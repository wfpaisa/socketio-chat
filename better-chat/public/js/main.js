$(function () {

  
  Materialize.updateTextFields();
  

  var socket = io();
  $('form').submit(function(){
    
    var objMessage = {
      n:$('#n').val(),
      m:$('#m').val()
    }

    socket.emit('chat message', objMessage);
    
    $('#m').val('');
    
    return false;
  });

  socket.on('chat message', function(msg){
    
    
    $('#messages').append(`<li><b>${msg.n}:</b> <em>${msg.m}</em>`);
  });

});