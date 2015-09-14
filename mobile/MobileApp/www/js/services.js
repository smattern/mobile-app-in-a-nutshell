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

  });// end of service
