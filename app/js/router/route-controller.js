angular.module('RouteModule', [require('angular-route')])
.config(['$routeProvider', function(route) {
  route
    .when('/landing', {
      templateUrl:'./landing-view.html'
    })
    .when('/results', {
      templateUrl:'./results-view.html'
    })
    .when('/cast', {
      templateUrl:'./cast-view.html'
    })
    .otherwise({
      redirectTo:'/landing'
    });
}]);
