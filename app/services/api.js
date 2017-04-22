angular.module("onlineGIS")
   .service("api", ["$http", function($http) {
      //GET ALL TABLES
      function getLayers() {}

      //CREATE TABLE WITH PROVIDED ATTRIBUTES
      function createLayer() {}

      //DELETE TABLE
      function deleteLayer() {}

      //ADD ROW IN A TABLE
      function addFeature() {}

      //ALTER ROW IN A TABLE
      function modifyFeature() {}

      //REMOVE ROW IN A TABLE
      function deleteFeature() {}

      return {
         getLayers: getLayers,
         createLayer: createLayer,
         deleteLayer: deleteLayer,
         addFeature: addFeature,
         modifyFeature: modifyFeature,
         deleteFeature: deleteFeature
      }
   }]);
