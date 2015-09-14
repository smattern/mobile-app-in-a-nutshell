angular.module('starter.services', [])

/**
 * Service to handle the web service.
 *
 * @param $http
 */
  .factory('WebService', function ($http) {

    return {

      /**
       * Get all info from server.
       *
       * @returns {HttpPromise}
       */
      all: function () {

        return $http.get('http://localhost:3000/infos');

      }// end of function all

    };

  })

/**
 * Service to handle the camera.
 *
 * @param $q
 */
  .factory('Camera', ['$q', function ($q) {

    return {
      getPicture: function (options) {
        var q = $q.defer();

        navigator.camera.getPicture(function (result) {
          // Do any magic you need
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        }, options);

        return q.promise;
      }
    }
  }]);// end of service
