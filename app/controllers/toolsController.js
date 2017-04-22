angular.module("onlineGIS")
   .controller("toolsController", ["$scope", "$rootScope", "geometry", function($scope, $rootScope, geometry) {

      //CONTROL ACTIVITY OF TOOLS - ONLY ONE CAN BE ACTIVE AT THE SAME TIME
      $scope.toolStatus = {
         draw: {
            status: false,
            setActivity: function(active) {
               this.status = active;
               ($rootScope.activeLayer) ? geometry.setToolActivity("draw", active, $rootScope.activeLayer.geom.label + "Draw") :  geometry.setToolActivity("draw", active);
            }
         },
         modify: {
            status: false,
            setActivity: function(active) {
               this.status = active;
               geometry.setToolActivity("modify", active);
            }
         },
         delete: {
            status: false,
            setActivity: function(active) {
               this.status = active;
               geometry.setToolActivity("delete", active);
            }
         }
      }

      //SET TOOL ACTIVE
      $scope.toggleTool = function(tool) {
         $scope.toolStatus[tool].setActivity(true);
         setInactiveExcept(tool);
      }

      //SET TOOLS INACTIVE EXCEPT SPECIFIED - IF NOT SPECIFIED, ALL WILL BE SET INACTIVE
      function setInactiveExcept(tool) {
         for (property in $scope.toolStatus) {
            if (property != tool) {
               $scope.toolStatus[property].setActivity(false);
            }
         }
      }

      //WATCH FOR ACTIVE LAYER CHANGES
      $rootScope.$watch("activeLayer", function(oldVal, newVal) {
        setInactiveExcept();
      })
   }]);
