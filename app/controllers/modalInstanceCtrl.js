angular.module("onlineGIS")
  .controller("modalInstanceCtrl",["$scope","$uibModalInstance", "data", function($scope, $uibModalInstance, data) {

    $scope.data = data;

    $scope.close = function () {
      $uibModalInstance.close();
    };
  }])
