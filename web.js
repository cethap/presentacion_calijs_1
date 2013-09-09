var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Este es el inicio de una gran app del camacho!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});