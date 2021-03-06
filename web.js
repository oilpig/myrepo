var express = require('express');

var fs = require('fs');

var temp =  new Buffer(20);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  	temp = fs.readFileSync('index.html');

	response.send(temp.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
