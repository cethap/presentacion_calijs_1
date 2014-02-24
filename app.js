
/**
 * Module dependencies.
 */

var express = require('express'),
    app = express(),
    presentacion = require('./routes/presentacion'),
    server = require('http').createServer(app),
    path = require('path'),
  io = require('socket.io').listen(server);

server.listen(process.env.PORT || 8888);

app.configure(function(){
  //app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', presentacion.index);
app.get('/movil', presentacion.movil);


io.sockets.on('connection', function (socket) {
  //socket.emit('news', { hello: 'world' });
  socket.on('sendLink', function (data) {
    io.sockets.emit('Linkiar', data);
  });

  socket.on('sendBook', function (data) {
    io.sockets.emit('Book', data);
  });
  
});

// http.createServer(app).listen(app.get('port'), function(){
//   console.log("Express server listening on port " + app.get('port'));
// });
