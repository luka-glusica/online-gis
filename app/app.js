angular.module("onlineGIS", ["ngAnimate", "ui.bootstrap", "pageslide-directive"])

  .run(["$rootScope", function($rootScope) {
    $rootScope.layers = [];
  }])

  .config([function() {

  }])

  .constant("URL", {
    domain: "http://localhost/",
    restAPI: ""
  })
