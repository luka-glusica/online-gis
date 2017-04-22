angular.module("onlineGIS")
  .controller("deleteLayerController", ["$scope", "$rootScope", "geometry", "$timeout", function($scope, $rootScope, geometry, $timeout) {
    $scope.dismissRemoval = function() {
        $scope.$parent.$parent.dismiss();
    }

    $scope.removeLayer = function() {
      //TODO: REMOVE TABLE VIA REST - IF SUCCESSFULL THEN REMOVE LAYER, ELSE SHOW ERROR
      var i = $rootScope.layers.indexOf($scope.$parent.$parent.data.scopeData);
      geometry.removeAllFeaturesFromLayer($scope.$parent.$parent.data.scopeData.name);
      $rootScope.layers.splice(i, 1);
      $rootScope.activeLayer = null;
      $scope.$parent.$parent.close();
    }
  }]);
