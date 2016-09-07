angular.module('starter')
.factory('mapFactory', mapFactory)

mapFactory.$inject = ['$http']

function mapFactory($http){

}


angular.module('starter')
.factory('userFactory', userFactory)

userFactory.$inject = ['$http']

function userFactory($http){
  var usersUrl = 'localhost:3000/users'
  var users = {}
  users.all = function(){
    return $http.get(usersUrl)
  }
}


angular.module('starter')
.factory('driverFactory', driverFactory)

driverFactory.$inject = ['$http']

function driverFactory($http){

}

angular.module('starter')
.factory('tripFactory', tripFactory)

tripFactory.$inject = ['$http']

function tripFactory($http){

}
