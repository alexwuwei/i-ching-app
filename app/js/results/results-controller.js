const angular = require('angular');

angular.module('ResultsModule', ['HeaderModule'])
.controller('ResultsController', ['$http', function() {
  
}])
.directive('resultsRender', function() {
  return {
    restrict: 'E',
    // templateUrl: '/../templates/results-view.html'
    templateUrl: './results-view.html'
  };
});

// function ResultsController ($http, $location) {
//   this.hexagramId;
//
//   this.hexagramInfo;
//
//   this.changeView = function(view){
//     $location.path(view); // path not hash
//   };
//
//   this.castHexagram = function() {
//     let randomHex = Math.floor(Math.random() * 64) + 1;
//     this.hexagramId = randomHex;
//     console.log(this.hexagramId);
//     this.getHexagram();
//     this.changeView('results');
//   };
//
//   this.getHexagram = function() {
//     $http.get('http://localhost:3000/hexagrams/' + this.hexagramId)
//     .then((res) => {
//       console.log(res);
//       this.hexagramInfo = res.data;
//     }, function(err) {
//       console.log('error getting hexagram info');
//     });
//   };
// }
//
// // const app = angular.module('LandingModule', []);
// //
// // app.controller('LandingController', ['$http', function($http) {
// //
// // }])
