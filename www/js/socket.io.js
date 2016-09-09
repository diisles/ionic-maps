app.factory('socket',function(socketFactory){
        //Create socket and connect to http://chat.socket.io
        var myIoSocket = io.connect("/socket.io/socket.io.js");

        mySocket = socketFactory({
            ioSocket: myIoSocket
        });

        return mySocket;
    })
