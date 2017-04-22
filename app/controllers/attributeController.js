angular.module("onlineGIS")
   .controller("attributeController", ["$scope", "geometry", function($scope, geometry) {
      $scope.attributes = $scope.$parent.$parent.data.other.getProperties().attributes;

      $scope.model = angular.copy($scope.attributes);

      $scope.saveGeometry = function() {
         geometry.saveFeature($scope.model, $scope.$parent.$parent.data.other);
         $scope.$parent.$parent.close();
      }

      $scope.dismissGeometry = function() {
         geometry.discardFeature($scope.$parent.$parent.data.other);
         $scope.$parent.$parent.dismiss();
      }
   }]);
