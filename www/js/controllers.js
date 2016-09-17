angular.module('starter', ['ngOpenFB'])

.controller('LoginController', function($scope,
$ionicModal, $timeout, ngFB) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  // Form data for login Modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal){
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function(){
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // perform the  login action when the user submits the login form
  $scope.doLogin = function() {
    LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data){
      $state.go('map');
    }).error(function(data){
      var alertPopup =$ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
    console.log('Log in time', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login// code if using a login system
    $timeout(function(){
      $scope.closeLogin();
    }, 1000);
  };

  $scope.fbLogin = function () {
    ngFB.login({scope: 'email,read_stream,publish_actions'}).then(function(response){
      if (response.status === 'connected'){
        console.log('Facebook login succeeded');
        $scope.closeLogin();
      } else {
        alert('Facebook login failed');
      }
    });
  }

})

.controller('signUpCtrl', function($scope,$http,$state,$stateParams){
  $scope.userForm = {};

  $scope.addUser = function() {
    event.preventDefault();
    if($scope.userForm.driver) {
      $http.post('http://localhost:3000/drivers', $scope.userForm)
      .then(function(response){
        $state.go('map')
      })
      alert('Driver added to Drivers list:' + $scope.userForm.item)
      $scope.driverForm.item = ""

    } else {
      $http.post('http://localhost:3000/users', $scope.userForm)
      .then(function(response){
        $state.go('map')
      })
      alert('User added to Users list:' + $scope.userForm.item)
      $scope.userForm.item = ""
    }
  }
})





.controller('UserCtrl', function($scope,$http,$state,$stateParams){

  $scope.user = [];
  $http.get('http://localhost:3000/users', {cache: true})
  .then(function(response){
    $scope.user = response.data
  });

  // $scope.userForm = {}
  //
  // $scope.addUserToUsers = function (){
  //   event.preventDefault()
  //   $http.post('http://localhost:3000/users', $scope.userForm)
  //   .then(function(response){
  //     $state.go('map')
  //   })
  //   alert('User added to Users list:' + $scope.userForm.item)
  //   $scope.userForm.item = "")
  // }

})

.controller('DriverCtrl', function($scope,$http,$state, $stateParams){

  $scope.driver = [];
  $http.get('http://localhost:3000/drivers', {cache: true})
  .then(function(response){
    $scope.driver = response.data
  });

  // $scope.driverForm = {}
  //
  // $scope.addDriverToDrivers = function (){
  //   event.preventDefault()
  //   $http.post('http://localhost:3000/drivers', $scope.driverForm)
  //   .then(function(response){
  //     $state.go('map')
  //   })
  //   alert('Driver added to Drivers list:' + $scope.driverForm.item)
  //   $scope.driverForm.item = "")
  //  }

})

.controller('TripCtrl', function($scope, $http,$state){

  $scope.trip = [];
  $http.get('http://loclhost:3000/trips', {cache:true})
  .then(function(response){
    $scope.trip = response.data
  });
  $scope.tripForm = {}

  $scope.addTripToTrips = function (){
    event.preventDefault()
    $http.post('http://localhost:3000/trips', $scope.tripForm)
    .then(function(response){
      $state.go('map')
    })

   }

    alert("Trip added to Trips list: " + $scope.tripForm.item)
    $scope.tripForm.item = ""
})

// function ContentController($scope, $ionicSideMenuDelegate) {
//   $scope.toggleLeft = function() {
//     $ionicSideMenuDelegate.toggleLeft();
//   };
// }
.controller('ToggleCtrl', function($scope,$ionicSideMenuDelegate) {
  $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})





.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
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
          content: "Fill me Up!"
      });

      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
      });

    });

  }, function(error){
    console.log("Could not get location");
  });
});
