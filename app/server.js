import express from 'express'
import React from 'react'
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import { renderToString } from 'react-dom/server';
import routes from './routes';

var server = express();

server.use((req, res) => {
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
      res.status(200).send(renderToString(<RouterContext {...renderProps} />))
    } else {
      res.status(404).send('Not found')
    }
  })
})

var PORT = process.env.PORT || 8000
server.listen(PORT,function(){
	console.log("express is on " + PORT)
});