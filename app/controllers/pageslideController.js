angular.module("onlineGIS")
   .controller("pageslideController", ["$scope", "$rootScope", "$timeout", function($scope, $rootScope, $timeout) {
      $scope.sliderOpen = false;

      $rootScope.$on("geometry:select", function(ev, toOpen) {
         $timeout(function() {
            $scope.sliderOpen = toOpen;
            $scope.$apply();
         });
      });
   }]);
