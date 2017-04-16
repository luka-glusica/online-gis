angular.module("onlineGIS")
  .controller("modalInstanceCtrl",["$rootScope", "$scope","$uibModalInstance", "data", function($rootScope, $scope, $uibModalInstance, data) {

    $scope.data = data;

    $scope.dismiss = function() {
      $uibModalInstance.dismiss();
    }

    $scope.close = function () {
      $uibModalInstance.close();
    };
  }])
