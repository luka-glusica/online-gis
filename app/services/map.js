angular.module("onlineGIS")
   .service("map", [function() {
      //OL VIEW
      var view = new ol.View({
         center: ol.proj.transform([20.476274, 44.805654], "EPSG:4326", "EPSG:3857"),
         zoom: 15
      });

      //OL LAYERS
      // OpenStreetMaps layer
      var osm = new ol.layer.Tile({
         zIndex: 0,
         preload: Infinity,
         source: new ol.source.OSM()
      });

      // Geometry layer - Polygons, Lines, Points
      var geometry = new ol.layer.Vector({
         zIndex: 1,
         source: new ol.source.Vector(),
         style: new ol.style.Style({
            fill: new ol.style.Fill({
               color: "rgba(51, 51, 51, 0.2)"
            }),
            stroke: new ol.style.Stroke({
               color: "rgb(51, 51, 51)",
               width: 2
            }),
            image: new ol.style.Circle({
               radius: 6,
               fill: new ol.style.Fill({
                  color: "rgb(51, 51, 51)"
               }),
               stroke: new ol.style.Stroke({
                  width: 2,
                  color: "rgb(255, 255, 255)"
               })
            })
         })
      });

      var layers = [osm, geometry];

      //OL CONTROLS
      var controls = ol.control.defaults({
         attributionOptions: ({
            collapsible: false
         })
      }).extend([
         new ol.control.ScaleLine(),
         new ol.control.ZoomSlider()
      ])

      //OL MAP OBJECT
      var map = new ol.Map({
         target: "map",
         layers: layers,
         controls: controls,
         view: view,
         loadTilesWhileAnimating: true,
         loadTilesWhileInteracting: true,
      })

      //PUBLIC API
      this.map = map;
      this.layers = {
         osm: osm,
         geometry: geometry
      }
   }])
