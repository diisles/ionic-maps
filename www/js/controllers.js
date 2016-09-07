angular.module('starter')

.controller('MapCtrl', function($scope,
$ionicModal, $timeout) {

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
    $scope.moddal.show();
  };

  // perform the  login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Log in time', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login// code if using a login system
    $timeout(function(){
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('UserCtrl', function($scope,$http){

  $scope.user = [];
  $http.get('localhost:3000/users', {cache: true})
  .then(function(response){
    $scope.user = response.data
  });

})

.controller('DriverCtrl', function($scope,$http){

  $scope.driver = [];
  $http.get('localhost:3000/drivers', {cache: true})
  .then(function(response){
    $scope.driver = response.data
  });

})

.controller('TripCtrl', function($scope, $http){

  $scope.trip = [];
  $http.get('', {cache:true})
  then.(function(response){
    $scope.trip = response.data
  });
})










})
