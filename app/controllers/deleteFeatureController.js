angular.module("onlineGIS")
   .controller("deleteFeatureController", ["$scope", "geometry", function($scope, geometry) {
      $scope.cancel = function() {
         $scope.$parent.$parent.dismiss();
      }

      $scope.removeFeature = function() {
         geometry.removeFeature($scope.$parent.$parent.data.other);
         $scope.$parent.$parent.close();
      }
   }]);
