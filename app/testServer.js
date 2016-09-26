var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve("/../built")));

console.log(path.resolve(__dirname + "/../built"));

app.get("/",function(req,res){
	console.log(path.resolve(__dirname + "/../built/test.html"));
	res.sendFile(path.resolve(__dirname + "/../built/test.html"));
})

app.listen(8000,function(){
	console.log("running on port 8000")
})