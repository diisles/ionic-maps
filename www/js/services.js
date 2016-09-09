angular.module('starter')
var app = angular.module('ionic-socketio-chat-client', ['ionic','btford.socket-io'])


// simple login method markup found on devdactic by Simon.
.service('LoginService', function($q) {
  return {
    loginUser: function(name, password) {
      var deferred = $q.defer();
      var promise = deferred.promise;

        if (name == 'user' && password == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
          } else {
                deferred.reject('Wrong credentials.');
          }
          promise.success = function(fn) {
              promise.then(fn);
              return promise;
          }
          promise.error = function(fn) {
              promise.then(null, fn);
              return promise;
          }
          return promise;
        }
    }
})
