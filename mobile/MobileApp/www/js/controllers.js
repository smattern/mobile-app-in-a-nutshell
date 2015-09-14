angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope, $http) {

    console.log('Success of controller');

  $http.get('http://localhost:3000/infos').then(function(resp) {

    console.log(resp);

    $scope.data = resp.data;

    }, function(err) {
      console.error('ERR');
      // err.status will contain the status code
    })
});
