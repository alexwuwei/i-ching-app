const angular = require('angular');

angular.module('LandingModule', [])
.controller('LandingController', ['$http', LandingController])
.directive('landingRender', function() {
  return {
    restrict: 'E',
    // templateUrl: '/../templates/landing-view.html'
    templateUrl: './landing-view.html'
  };
});

function LandingController ($http) {
  this.hexagramId;
  this.hexagramInfo;
  this.castHexagram = function() {
    let randomHex = Math.floor(Math.random() * 64) + 1;
    this.hexagramId = randomHex;
  };
  this.getHexagram = function() {
    $http.get('http://localhost:3000/hexagrams/', this.hexagramId)
    .then((res) => {
      console.log(res);
      this.hexagramInfo = res.data;
    }, function(err) {
      console.log('error getting hexagram info');
    });
  };
}

// const app = angular.module('LandingModule', []);
//
// app.controller('LandingController', ['$http', function($http) {
//
// }])
