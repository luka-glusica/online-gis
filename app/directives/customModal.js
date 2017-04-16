angular.module("onlineGIS")
    .directive("customModal", ["$uibModal", function($uibModal) {
        return {
            restrict: "A",
            scope: {
                customModalTitle: "@",
                customModalBodyTemplate: "@",
                customModalSize: "@",
                customModalData: "="
            },
            link: function(scope, element) {

                //OPEN BOOTSTRAP MODAL
                function openModal() {
                    $uibModal.open({
                        templateUrl: "app/templates/modal.html",
                        controller: "modalInstanceCtrl",
                        size: scope.customModalSize,
                        resolve: {
                            data: {
                                title: scope.customModalTitle,
                                bodyTemplate: scope.customModalBodyTemplate,
                                other: scope.customModalData
                            }
                        }
                    });
                }

                //REGISTER ONCLICK EVENT
                element.on("click", openModal);

                //CLEANUP AFTER THE SCOPE IS DESTROYED - PREVENTS MEMORY LEAK
                scope.$on("$destroy", function() {
                  element.off("click", openModal);
                })
            }
        }
    }])
