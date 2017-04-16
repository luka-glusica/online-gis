angular.module("onlineGIS")
    .controller("layerController", ["$scope", "$rootScope", function($scope, $rootScope) {
        $scope.layerList = $rootScope.layers;
    }]);
