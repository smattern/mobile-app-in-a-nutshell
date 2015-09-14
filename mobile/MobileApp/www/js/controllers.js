angular.module('starter.controllers', [])

/**
 * Controller for the dash view, this controller handle all dash functionality.
 *
 * @param $scope
 * @param WebService, handle request
 */
  .controller('DashCtrl', function ($scope, WebService) {

    /**
     * On view is entered load all info from server
     */
    $scope.$on('$ionicView.enter', function () {

      var promise = WebService.all();

      promise.then(
        function (payload) {

          $scope.data = payload.data;

        },
        function (errorPayload) {
          Console.error('failure loading content', errorPayload);
        });
    }); // end of function

  });
