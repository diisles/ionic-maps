
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('welcome',{
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    // controller: 'signUpCtrl'
  })

  .state('member-signup', {
    url: '/signup',
    templateUrl: 'templates/member-signup.html',
    controller: 'signUpCtrl'
  })

  .state('driver-signup', {
    url: '/signup',
    templateUrl: 'templates/driver-signup.html',
    controller: 'signUpCtrl'
  })

  .state('map', {
    url: '/',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: './templates/login.html',
    controller: 'LoginController'
  })

  .state('users', {
    url: '/users',
    templateUrl: 'templates/users.html',
    controller: 'UsersController'
  })

  .state('user', {
    url: "/users/:id",
    templateUrl: "templates/user.html",
    controller: "UserController"
  })

  .state('drivers', {
    url: '/drivers',
    templateUrl: 'templates/drivers.html',
    controller: 'DriversController'
  })



  $urlRouterProvider.otherwise("/signup");

})

// .controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
//   var options = {timeout: 10000, enableHighAccuracy: true};
//
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
//   });
// });
