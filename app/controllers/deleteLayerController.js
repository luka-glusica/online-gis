angular.module("onlineGIS")
  .controller("deleteLayerController", ["$scope", "$rootScope", function($scope, $rootScope) {
    $scope.dismissRemoval = function() {
        $scope.$parent.$parent.dismiss();
    }

    $scope.removeLayer = function() {
      //TODO: REMOVE TABLE VIA REST - IF SUCCESSFULL THEN REMOVE LAYER, ELSE SHOW ERROR
      var i = $rootScope.layers.indexOf($scope.$parent.$parent.data.other);
      $rootScope.layers.splice(i, 1);
      $scope.$parent.$parent.close();
    }
  }]);
