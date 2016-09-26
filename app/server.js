import express from 'express'
import React from 'react'
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import routes from './routes';
import App from '../containers/app';
import path from 'path';


var server = express();

server.use(express.static(path.resolve(__dirname + '/../assets')));
server.use(express.static(path.resolve(__dirname + '/../built')));
server.use(express.static(path.resolve(__dirname + '/../style')));

function layout(html, preloadedState){
  var mainCss =  `<link rel="stylesheet" href="./style/style.css">`;
  var bootStrap = `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`;
  var reactScript = `<script src="./built/built.js"></script>`
  
  return `
    <!DOCTYPE html>
    <html>
        <head>
          ${mainCss}
        ${bootStrap}
        </head>
      <body>
          <div class="app-container">${html}</div>
          ${reactScript}
        </body>
    </html>`
}



server.get("*",(req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      let html = renderToString(<RouterContext {...renderProps} />);
      res.status(200).send(layout(html));
      
    } else {
      res.status(404).send('Not found')
    }
  })
})

var PORT = process.env.PORT || 8000
server.listen(PORT,function(){
	console.log("express is on " + PORT)
});