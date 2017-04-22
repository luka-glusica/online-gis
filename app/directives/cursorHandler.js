angular.module("onlineGIS")
   .directive("cursorHandler", function() {
      return {
         restrict: "A",
         link: function(scope, element) {
            scope.$on("cursor:change", function(ev, bool) {
               if (bool) {
                  angular.element(document.getElementsByTagName("canvas")[0]).css("cursor", "none");
               } else {
                  angular.element(document.getElementsByTagName("canvas")[0]).css("cursor", "default");
               }
            });
         }
      }
   })
