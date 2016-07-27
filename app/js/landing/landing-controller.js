const angular = require('angular');

angular.module('LandingModule', ['HeaderModule'])
.controller('LandingController', ['$http', '$location', LandingController])
.directive('landingRender', function() {
  return {
    restrict: 'E',
    // templateUrl: '/../templates/landing-view.html'
    templateUrl: './landing-view.html'
  };
});

function LandingController ($http, $location) {
  this.hexagramId;

  this.hexagramInfo;

  this.changeView = function(view){
    $location.path(view); // path not hash
  };

  this.castHexagram = function() {
    let randomHex = Math.floor(Math.random() * 64) + 1;
    this.hexagramId = randomHex;
    console.log(this.hexagramId);
    this.getHexagram();
    this.changeView('results');
  };

  this.getHexagram = function() {
    $http.get('http://localhost:3000/hexagrams/' + this.hexagramId)
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
