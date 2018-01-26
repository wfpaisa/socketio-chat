var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  
  console.log('a user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + JSON.stringify(msg)); 

    // Send all
  	io.emit('chat message', msg);

  	// If you want to send a message to everyone except for a certain socket, we have the broadcast flag:
  	socket.broadcast.emit('hi');

  });

});


http.listen(3000, function(){
  console.log('listening on *:3000');
});