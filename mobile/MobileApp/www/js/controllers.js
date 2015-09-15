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

  })

/**
 * Controller for the camera view.
 *
 * @param $scope
 * @param Camera, the service to handle the camera
 */
  .controller('InfoOneCtrl', function ($scope, Camera) {

    /**
     * Take a picture.
     */
    $scope.getPhoto = function () {

      Camera.getPicture(
        {
          saveToPhotoAlbum: true
        }
      ).then(function (imageURI) {
          console.log(imageURI);
        }, function (err) {
          console.err(err);
        });

    }

  })

/**
 * Controller for a very simple view.
 *
 * @param $scope
 */
  .controller("InfoThreeCtrl", function($scope) {
    $scope.list = [
      {text:'angluarjs'},
      {text:'jQuery'}];
  })

/**
 * Controller for the list view.
 *
 * @param $scope
 */
  .controller('InfoTwoCtrl', function ($scope) {

    $scope.data = {
      showDelete: false
    };

    $scope.edit = function (item) {
      alert('Edit Item: ' + item.id);
    };
    $scope.share = function (item) {
      alert('Share Item: ' + item.id);
    };

    $scope.moveItem = function (item, fromIndex, toIndex) {
      $scope.items.splice(fromIndex, 1);
      $scope.items.splice(toIndex, 0, item);
    };

    $scope.onItemDelete = function (item) {
      $scope.items.splice($scope.items.indexOf(item), 1);
    };

    $scope.items = [
      {id: 0},
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 10},
      {id: 11},
      {id: 12},
      {id: 13},
      {id: 14},
      {id: 15},
      {id: 16},
      {id: 17},
      {id: 18},
      {id: 19},
      {id: 20},
      {id: 21},
      {id: 22},
      {id: 23},
      {id: 24},
      {id: 25},
      {id: 26},
      {id: 27},
      {id: 28},
      {id: 29},
      {id: 30},
      {id: 31},
      {id: 32},
      {id: 33},
      {id: 34},
      {id: 35},
      {id: 36},
      {id: 37},
      {id: 38},
      {id: 39},
      {id: 40},
      {id: 41},
      {id: 42},
      {id: 43},
      {id: 44},
      {id: 45},
      {id: 46},
      {id: 47},
      {id: 48},
      {id: 49},
      {id: 50}
    ];

  })
;
