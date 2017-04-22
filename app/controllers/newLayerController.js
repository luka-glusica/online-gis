angular.module("onlineGIS")
  .controller("newLayerController", ["$scope","$rootScope", function($scope, $rootScope) {
    $scope.geometryTypes = [{
            id: 1,
            label: "Point"
        },
        {
            id: 2,
            label: "Line"
        },
        {
            id: 3,
            label: "Polygon"
        }
    ];

    $scope.layerModel = {
        attributes: []
    }
    $scope.newAttribute = "";

    $scope.addAttribute = function() {
        $scope.layerModel.attributes.push({
           name: $scope.newAttribute,
           value: ""
        });
    }

    $scope.dismissNewLayer = function() {
        $scope.$parent.$parent.dismiss();
    }

    $scope.saveNewLayer = function() {
        //TODO:CREATE TABLE VIA REST - IF SUCCESSFULL, CLOSE MODAL, UPDATE LAYER CONTAINER, ELSE SHOW ERROR MESSAGE
        $rootScope.layers.push($scope.layerModel);
        $scope.$parent.$parent.close();
    }
  }])
