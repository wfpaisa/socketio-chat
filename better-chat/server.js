"use strict";

const   express = require('express'),
        app =   express(),
        http =  require('http').Server(app),
        io =    require('socket.io')(http);

module.exports = function(){

	app.use(express.static('public'));

	io.on('connection', (socket)=>{
	  
	  console.log('a user connected');
	  
	  socket.on('disconnect', ()=>{
	    console.log('user disconnected');
	  });

	  socket.on('chat message', (msg)=>{
	    console.log('message: ' + JSON.stringify(msg)); 

	    // Send all
	  	io.emit('chat message', msg);

	  	// If you want to send a message to everyone except for a certain socket, we have the broadcast flag:
	  	socket.broadcast.emit('hi');

	  });

	});


	http.listen(3000, ()=>{
	  console.log('listening on *:3000');
	});


}


