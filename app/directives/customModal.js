angular.module("onlineGIS")
   .directive("customModal", ["$uibModal", "$rootScope", "$timeout", function($uibModal, $rootScope, $timeout) {
      return {
         restrict: "A",
         scope: {
            customModalTitle: "@",
            customModalBodyTemplate: "@",
            customModalSize: "@",
            customModalData: "=",
            customModalListener: "@"
         },
         link: function(scope, element) {
            //OPEN BOOTSTRAP MODAL
            function openModal(opt_data) {
               $uibModal.open({
                  templateUrl: "app/templates/modal.html",
                  controller: "modalInstanceCtrl",
                  size: scope.customModalSize,
                  resolve: {
                     data: {
                        title: scope.customModalTitle,
                        bodyTemplate: scope.customModalBodyTemplate,
                        scopeData: scope.customModalData,
                        other: opt_data
                     }
                  }
               });
            }

            //REGISTER ONCLICK EVENT
            element.on("click", openModal);

            //REGISTER CUSTOM EVENT, IF PROVIDED
            if(scope.customModalListener) {
               $rootScope.$on(scope.customModalListener, function(ev, data) {
                  openModal(data);
               });
            }

            //CLEANUP AFTER THE SCOPE IS DESTROYED - PREVENTS MEMORY LEAK
            scope.$on("$destroy", function() {
               element.off("click", openModal);
            });


         }
      }
   }])
