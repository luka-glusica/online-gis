angular.module("onlineGIS")
    .directive("customModal", ["$uibModal", function($uibModal) {
        return {
            restrict: "A",
            scope: {
                customModalTitle: "@",
                customModalBodyTemplate: "@",
                customodalSize: "@"
            },
            link: function(scope, element) {

                //OPEN BOOTSTRAP MODAL
                function openModal() {
                    $uibModal.open({
                        templateUrl: "app/templates/modal.html",
                        controller: "modalInstanceCtrl",
                        size: scope.customodalSize,
                        resolve: {
                            data: {
                                title: scope.customModalTitle,
                                bodyTemplate: scope.customModalBodyTemplate
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
