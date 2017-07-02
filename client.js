var socket = io();
var app = angular.module("chatApp", []);

app.controller('chatCtrl', function($scope){
  $scope.messages = [];
  $scope.sendEvent = function(){
    console.log($scope.msg);
  };
});



  //
  //   $('form').submit(function(){
  //     socket.emit('chat message', $('#m').val());
  //     $('#m').val('');
  //     return false;
  //   });
  //   socket.on('chat message', function(msg){
  //     $('#messages').append($('<li>').text(msg));
  //   });
  // });
