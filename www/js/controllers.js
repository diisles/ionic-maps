angular.module('starter')
  .controller('LoginController', function($scope, LoginService, $ionicPopup, $state, $sanitize, $ionicModal, $timeout, ngFB) {
    console.log('is this running');

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for login Modal
    $scope.data = {};

    // Create the login modal that we will use later
    // $ionicModal.fromTemplateUrl('templates/login.html', {
    //   scope: $scope
    // }).then(function(modal){
    //   $scope.modal = modal;
    // });


    // Triggered in the login modal to close it
    $scope.closeLogin = function(){
    //
    //   // greyed out bellow code because cosole eror stating could not find "hide".
    //
    //   // $scope.modal.hide();
    };
    // Open the login modal
    // $scope.login = function() {
    //   $scope.modal.show()
    //     // console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
    // };

    // perform the  login action when the user submits the login form
    $scope.login = function() {
      LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data){
        $state.go('map');
      }).error(function(data){
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
      console.log('Log in time', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login// code if using a login system
      // $timeout(function(){
      //   $scope.closeLogin();
      // }, 1000);
    };

    $scope.fbLogin = function () {
      ngFB.login({scope: 'email,read_stream,publish_actions'}).then(function(response){
        if (response.status === 'connected'){

          console.log('Facebook login succeeded')
          .then(function(response){
            $state.go('map')
          })
          $scope.closeLogin();
        } else {
          alert('Facebook login failed');
        }
      });
    }

  })

.controller('signUpCtrl', function($scope,$http,$state,$stateParams, ApiPost, ApiPostDrivers){
  $scope.userForm = {};

  $scope.addUser = function() {
    event.preventDefault();
<<<<<<< HEAD
    if($scope.userForm.driver){
      ApiPostDrivers.postApiDataDrivers($scope.userForm)
      // $http.post('http://localhost:3000/drivers', $scope.userForm)

    // if($scope.userForm.driver) {
    //   $http.post('https://mysterious-coast-25984.herokuapp.com/drivers', $scope.userForm)

      .then(function(response){
        $state.go('map')
      })
      alert('Driver added to Drivers list:' + $scope.userForm.item)
      $scope.userForm.item = ""

    } else {

      ApiPost.postApiData($scope.userForm)
      // $http.post('http://localhost:3000/users', $scope.userForm)

      // $http.post('https://mysterious-coast-25984.herokuapp.com/users', $scope.userForm)

      .then(function(response){
        $state.go('map')
      })
      alert('User added to Users list:' + $scope.userForm.username)
      $scope.userForm = {}
    }
  };
})






.controller('UserCtrl',      function($scope,$http,$state,$stateParams,  ApiGet,socket){
  $scope.user = [];
  ApiGet.getApiData($scope.userForm)

// hiiii
// .controller('UserCtrl', function($scope,$http,$state,$stateParams){
//
//   $scope.user = [];
//   $http.get('https://mysterious-coast-25984.herokuapp.com/users', {cache: true})

  .then(function(response){
    return $scope.user = response.data
  })
})

  // $scope.userForm = {}
  //
  // $scope.addUserToUsers = function (){
  //   event.preventDefault()
  //   $http.post('https://mysterious-coast-25984.herokuapp.com/users', $scope.userForm)
  //   .then(function(response){
  //     $state.go('map')
  //   })
  //   alert('User added to Users list:' + $scope.userForm.item)
  //   $scope.userForm.item = "")
  // }


.controller('DriverCtrl',
function($scope,$http,$state,$stateParams, ApiGetDrivers,ApiPostDrivers,socket){
  $scope.driver = [];

  ApiGetDrivers.getApiDataDrivers($scope.userForm)
  // $http.get('https://mysterious-coast-25984.herokuapp.com/drivers', {cache: true})

  .then(function(response){
    return $scope.driver = response.data
  })
})
////////////////
//used below code before I changed to proxyUrl
///////////////

  // $scope.driverForm = {}
  //
  // $scope.addDriverToDrivers = function (){
  //   event.preventDefault()
  //   $http.post('https://mysterious-coast-25984.herokuapp.com/drivers', $scope.driverForm)
  //   .then(function(response){
  //     $state.go('map')
  //   })
  //   alert('Driver added to Drivers list:' + $scope.driverForm.item)
  //   $scope.driverForm.item = "")
  //  }

///////////////////
///Need to change the below controller to use the proxy set up in starter-services
//////////////////
.controller('TripCtrl', function($scope, $http,$state,ApiEndpoint){
  var getApiData = function(){
  $scope.trip = [];
  $http.get(ApiEnpoint.url + '/trips', {cache:true})
  .then(function(response){
    $scope.trip = response.data
  });
}


//   $scope.tripForm = {}
//
//   $scope.addTripToTrips = function (){
//     event.preventDefault()
// <<<<<<< HEAD
//     $http.post(ApiEnpoint.url + '/trips', $scope.tripForm)
// =======
//     $http.post('https://mysterious-coast-25984.herokuapp.com/trips', $scope.tripForm)
// >>>>>>> master
//     .then(function(response){
//       $state.go('map')
//     })
//
//    }

    alert("Trip added to Trips list: " + $scope.tripForm.item)
    $scope.tripForm.item = ""
})

// function ContentController($scope, $ionicSideMenuDelegate) {
//   $scope.toggleLeft = function() {
//     $ionicSideMenuDelegate.toggleLeft();
//   };
// }

// This code bellow for chatctrl is from http://melvin0008.github.io/blog/ionic-socketio-chat/
.controller('ChatController', function($stateParams,socket, $sanatize, $ionicScrollDelegate, $timeout){

  var self=this;
  var typing = false;
  var lastTypingTime;
  var TYPING_TIMER_LENGTH = 400;

  // Add colors
  var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
     '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
     '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

  //initializing messages array
  self.messages=[]


  socket.on('connect',function(){
    connected = true
    // Add user called nickname
    socket.emit('add user', 'username');
    })
  socket.on('new message', function (data){
    addMessaageToList(data.username,true,data.messaage)
  });

  //function called when user hits the send buttton
  self.sendMessage=function(){
    socket.emit('new message', self.message)
    addMessageToList($stateParams.username,true,self.message)
    socket.emit('stop typing');
    self.message = ""
  }

  function addMessageToList(username,style_type,message){
    username = $sanitize(username) //The input is sanitizedFor more info reach this link
    var color = style_type ? getUsernameColor(username) : null //Get color for user
    self.messages.push({content:$sanitize(message),style:style_type,username:username,color:color}) // Push the messages to the messages list.
      $ionicScrollDelegate.scrollBottom();// Scroll to the bottom to read the latest.
    }

    // Whenever the server emits 'user joined', log it in the chat body
    socket.on('user joined', function (data) {
      addMessageToList("",false,data.username + " joined")
      addMessageToList("",false,message_string(data.numUsers))
    });

    // Whenever the server emits 'user left', log it in the chat body
    socket.on('user left', function (data) {
      addMessageToList("",false,data.username+" left")
      addMessageToList("",false,message_string(data.numUsers))
    });

  // Return message string depending on the number of users
    function message_string(number_of_users)
    {
      return number_of_users === 1 ? "there's 1 participant":"there are " + number_of_users + " participants"
    }

    //Whenever the server emits 'typing', show the typing message
    socket.on('typing', function (data) {
      addChatTyping(data);
    });

    // Whenever the server emits 'stop typing', kill the typing message
    socket.on('stop typing', function (data) {
      removeChatTyping(data.username);
    });

  // Adds the visual chat typing message
  function addChatTyping (data) {
      addMessageToList(data.username,true," is typing");
  }

  // Removes the visual chat typing message
  function removeChatTyping (username) {
      self.messages = self.messages.filter(function(element){return element.username != username || element.content != " is typing"})
  }

  // Updates the typing event
      function sendUpdateTyping(){
        if(connected){
            if (!typing) {
                typing = true;
                socket.emit('typing');
            }
        }
        lastTypingTime = (new Date()).getTime();
        $timeout(function () {
            var typingTimer = (new Date()).getTime();
            var timeDiff = typingTimer - lastTypingTime;
            if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
              socket.emit('stop typing');
              typing = false;
            }
            }, TYPING_TIMER_LENGTH)
      }





  })







.controller('ToggleCtrl', function($scope,$ionicSideMenuDelegate) {
  $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('TabsCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

// .controller('HomeTabCtrl', function($scope, $ionicSideMenuDelegate){
//
// });

.controller('AboutCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.openMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('AccountCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.openMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('GetGasCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.openMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };
})


.controller('MapCtrl', function($scope, $state, $cordovaGeolocation, $http, $interval) {

.controller('HelpCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.openMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('OrdersCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.openMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('VehiclesCtrl', function($scope, $ionicSideMenuDelegate){
  $scope.openMenu = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };
})

///////////////////////
///The 3 controllers below(91,89,87) need to be changed to look more like the mapCtrl in terms of using socket
//////////////////////

.controller('91TabCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Wait until the map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

      var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng
      });

      var infoWindow = new google.maps.InfoWindow({
          content: "test!"
      });

      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
      });

    });

  }, function(error){
    console.log("Could not get location");
  })
})


.controller('89TabCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Wait until the map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

      var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng
      });

      var infoWindow = new google.maps.InfoWindow({
          content: "test!"
      });

      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
      });

    });

  }, function(error){
    console.log("Could not get location");
  })
})

//////////////////////
///This code below was the code that Kate helped me with that i used as the presentation for project 4. It basically Refresh markers each 2 seconds without sockets.
///////////////////

// .controller('87TabCtrl', function($scope, $state, $cordovaGeolocation) {
// >>>>>>> socket
//   var options = {timeout: 10000, enableHighAccuracy: true};
//   $scope.getAllUsers = function(){
//     $http.get('https://mysterious-coast-25984.herokuapp.com/users')
//     .then(function(data){
//       console.log(data)
//       // $interval(function(){
//       //   console.log('Yes')
//       // }, 1000)
//     })
//   }
//   $cordovaGeolocation.getCurrentPosition(options).then(function(position){
//
//     var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//     var mapOptions = {
//       center: latLng,
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//
//     $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
//     //Wait until the map is loaded
//     google.maps.event.addListenerOnce($scope.map, 'idle', function(){
//       var markers = []
//       function getUsers(){
//         $http.get('https://mysterious-coast-25984.herokuapp.com/users')
//         .then(function(data){
//           console.log(data)
//           var users = data.data.users
//           function clearOverlays(){
//             for (var i = 0; i < markers.length; i++){
//               markers[i].setMap(null);
//             }
//             markers = []
//           }
//           clearOverlays()
//           for(var i = 0; i<users.length; i++){
//             if(users[i].location) {
//               console.log(users[i].location)
//               var userLatLng = new google.maps.LatLng(users[i].location.y, users[i].location.x)
// // this code below sets a image that can be used as the marker for drivers.
//               var image = {
//     url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/3306-200.png',
//      size: new google.maps.Size(71, 71),
//      origin: new google.maps.Point(0, 0),
//      anchor: new google.maps.Point(17, 34),
//      scaledSize: new google.maps.Size(25, 25)
//    };
//
//                 var marker = new google.maps.Marker({
//                 map: $scope.map,
//                 icon: image,
//                 animation: google.maps.Animation.BOUNCE,
//                 position: userLatLng
//               })
//               markers.push(marker)
//             }
//
//           }
//         })
//       }
//       $interval(getUsers, 2000)
//       var marker = new google.maps.Marker({
//           map: $scope.map,
//           animation: google.maps.Animation.DROP,
//           position: latLng
//       });
//
//       var infoWindow = new google.maps.InfoWindow({
//           content: "test!"
//       });
//
//       google.maps.event.addListener(marker, 'click', function () {
//           infoWindow.open($scope.map, marker);
//       });
//
//     });
//
//   }, function(error){
//     console.log("Could not get location");
//   });
// })




///////////////////////
//This is the MapCtrl that im trying to get sockets to work with.
//////////////////////

.controller('MapCtrl', function($scope, socket, $state, $cordovaGeolocation, $http) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  var socket, map;
  var markers =  {};

  function initialize(mapContainer) {
    // Here we create a new connection, but you can reuse a existing one
    // socket = io.connect("http://localhost:3000");

    // Creating google map
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    socket.on('location update', updateMarker);
    socket.on('user disconnected', removeMarker);
    socket.emit('request locations', loadMarkers);
  }

  function updateMarker(data) {
    var marker = markers[data.key];
    if(marker) {
      marker.setPosition(new google.maps.LatLng(data.lat,data.lng));
    } else {
      markers[data.key] = getMarker(data.lat, data.lng, data.name);
    }
  }

  function removeMarker(key){
    var marker = markers[key];
    if(marker){
      marker.setMap(null);
      delete markers[key];
    }
  }

  function loadMarkers(data) {
    for(key in data) {
      var user = data[key];
      markers[key] = getMarker(user.lat, user.lng, user.name);
    }
  }

  function getMarker(lat, lng, label) {
    return new google.maps.Marker({
      title: label,
      map: $scope.map,
      position: new google.maps.LatLng(lat,lng)
    });
  }

  function tryGeolocation(){
    if(navigator.geolocation) {
      navigation.geolocation.getCurrentPosition(sendLocation, errorHandler);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function sendLocation(position) {
  var data = {
    lat : position.coords.latitude,
    lng : position.coords.longitude,
  }
  socket.emit("send location", data);

}

  function errorHandler(error) {
    alert('Eror detecting your location');
  }
})



//   $cordovaGeolocation.getCurrentPosition(options).then(function(position){
//
//     var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//     $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
//     //Wait until the map is loaded
//     google.maps.event.addListenerOnce($scope.map, 'idle', function(){
//
//       var marker = new google.maps.Marker({
//           map: $scope.map,
//           animation: google.maps.Animation.DROP,
//           position: latLng
//       });
//
//       var infoWindow = new google.maps.InfoWindow({
//           content: "Fill me Up!"
//       });
//
//       google.maps.event.addListener(marker, 'click', function () {
//           infoWindow.open($scope.map, marker);
//       });
//
//     });
//
//   }, function(error){
//     console.log("Could not get location");
//   })
// });
