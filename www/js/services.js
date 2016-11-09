angular.module('services',[])
//   factory('socket.io-client', function(socketFactory){
//     return socketFactory();
//   }).
//
//   // factory('socket')


.factory('socket', function(socketFactory){
  //Create socket and connect to http://localhost3000
  var myIoSocket = io.connect('http://localhost:3000');

  socket = socketFactory({
    ioSocket: myIoSocket,
    // path: '/stomp'
  });

  return socket;
})
