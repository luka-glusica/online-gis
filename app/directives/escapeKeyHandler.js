angular.module("onlineGIS")
	.directive("escapeKeyHandler", function() {
		return {
			restrict: "E",
			scope: {
				handler: "="
			},
			link: function(scope, element) {
				
				function callback(event) {
					if(event.keyCode == 27) {
						scope.handler();
					}
				}

				document.addEventListener("keyup", callback)
			}
		}
	})