angular.module('starter.services', [])

//Note: We are including the constant `ApiEndpoint` to be used here.
.factory('ApiGet', function($http, $q, ApiEndpoint) {
  console.log('ApiEndpoint', ApiEndpoint)

  var getApiData = function() {
    var q = $q.defer();

     $http.get(ApiEndpoint.url + '/users')
      .success(function(data) {
        console.log('Got some data: ', data)
        q.resolve(data);

      })
      .error(function(error){
        console.log('Had an error')
        q.reject(error);
      })
      return q.promise;
  }

  return {
    getApiData: getApiData
  };
})


.factory('ApiPost', function($http, $q, ApiEndpoint) {
  console.log('ApiEndpoint', ApiEndpoint)

  var postApiData = function() {
    var q = $q.defer();

     $http.post(ApiEndpoint.url + '/users')
      .success(function(data) {
        console.log('Post some data: ', data)
        q.resolve(data);

      })
      .error(function(error){
        console.log('Had an error')
        q.reject(error);
      })
      return q.promise;
  }

  return {
    postApiData: postApiData
  };
})


//Note: We are including the constant `ApiEndpoint` to be used here.
.factory('ApiGetDrivers', function($http, $q, ApiEndpoint) {


  var getApiDataDrivers = function() {
    var q = $q.defer();

     $http.get(ApiEndpoint.url + '/drivers')
      .success(function(data) {
        console.log('Got some data: ', data)
        q.resolve(data);

      })
      .error(function(error){
        console.log('Had an error')
        q.reject(error);
      })
      return q.promise;
  }

  return {
    getApiDataDrivers: getApiDataDrivers
  };
})


.factory('ApiPostDrivers', function($http, $q, ApiEndpoint) {
  

  var postApiDataDrivers = function() {
    var q = $q.defer();

     $http.post(ApiEndpoint.url + '/drivers')
      .success(function(data) {
        console.log('Post some data: ', data)
        q.resolve(data);

      })
      .error(function(error){
        console.log('Had an error')
        q.reject(error);
      })
      return q.promise;
  }

  return {
    postApiDataDrivers: postApiDataDrivers
  };
})
