const angular = require('angular');

angular.module('HeaderModule', [])
.controller('HeaderController', ['$http', function() {
  
}])
.directive('headerRender', function() {
  return {
    restrict: 'E',
    // templateUrl: '/../templates/header-view.html'
    templateUrl: './header-view.html'
  };
});

// function HeaderController ($http) {
//   this.hexagramId;
//   this.hexagramInfo;
//   this.castHexagram = function() {
//     let randomHex = Math.floor(Math.random() * 64) + 1;
//     this.hexagramId = randomHex;
//     console.log(this.hexagramId);
//     this.getHexagram();
//   };
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
