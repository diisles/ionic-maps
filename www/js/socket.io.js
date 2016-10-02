// app.factory('socket',function(socketFactory){
//         //Create socket and connect to http://chat.socket.io
//         var myIoSocket = io.connect("/socket.io/socket.io.js");
//
//         mySocket = socketFactory({
//             ioSocket: myIoSocket
//         });
//
//         return mySocket;
//     })





var user =  {};
var usersCount, messagesList, messageBox, sendButton, webSocket;

function initialize(username) {
  user.name = username;

  webSocket = io.connect(window.location.hostname);
  webSocket.on("user connected", addUser);
  webSocket.on("user disconnected", removeUser);
  websocket.on('new chat msg', receiveChatMessage);

  sendButton.on('click', sendChatMesage);

  var userName = { name : user.name} ;

  webSocket.emit('join', userName,
  // Callback function
  function(key){
    user.key = key;
    }
    );
  }

  function addUser(user){
    ++usersCount;
  }

  function receiveChatMessage(data){
    // Add the received message to the list
    messagesList.append(data.message);
  }

  function sendChatMesage() {
    // Obtain Message from textarea
    var messageVal = messageBox.val();
    messagesList.append(messageVal);
    // Empty testarea
    messageBox.val('');
    // send the message
    webSocket.send(messageVal);
  }
