/**
 * Adds the esri layers (map and feature layers) from the configuration file to the map
 * @param map The leaflet map we are adding data to
 */
function addEsriLayersToMap(map) {
  const endpoints = config[hashtag].restEndpoints;
  const layers = {};
  let identifiedFeature;
  let identifiedFeatureName;

  for (const endpointName in endpoints) {
    const endpoint = endpoints[endpointName];
    const captainKeys = Object.keys(endpoint);

    const icon = L.icon({
      iconUrl: "https://img.icons8.com/color/user",
      iconSize: [27, 31],
      iconAnchor: [13.5, 17.5],
      popupAnchor: [0, -11],
    });

    if (endpointName == "esriFeatureLayers") {
      captainKeys.forEach((key) => {
        const layer = endpoint[key];
        const featureLayer = L.esri
          .featureLayer({
            url: layer.url,
            style: layer.style,
            where: layer.whereClause,
            pointToLayer: function (geojson, latlng) {
              if (geojson.geometry.type === "Point") {
                const leafletLatlng = [latlng.lat, latlng.lng];
                return L.marker(leafletLatlng, {
                  icon: L.icon(layer.style),
                });
              }
            },
          })
          .addTo(map);

        // Add the feature layer to the object with a key
        layers[layer.legendName] = featureLayer;

        featureLayer.on("click", function (e) {
          const sidebarData = setSidebarData(e.layer.feature.properties, layer);
          displaySidebar(sidebarData);

          // Remove previously identified feature layer
          if (identifiedFeature) {
            map.removeLayer(identifiedFeature);
          }

          // Each time a feature is clicked, we want to store which layer currently is highlighted so we can remove the highlight if the layer is turned off in the layer toggle
          identifiedFeatureName = layer.legendName;

          // Highlight the clicked feature layer in config defined color
          identifiedFeature = L.geoJSON(e.layer.feature, {
            style: { color: layer.featureSelection.selectColor },
          }).addTo(map);

          if (layer.featureSelection.zoomToFeature == true) {
            if (e.layer.getBounds) {
              map.fitBounds(e.layer.getBounds());
            } else if (e.layer.getLatLng) {
              map.setView(e.layer.getLatLng(), map.getZoom());
            }
          }
        });
      });
    }
    if (endpointName == "esriMapLayers") {
      captainKeys.forEach((key) => {
        const layer = endpoint[key];
        L.esri
          .dynamicMapLayer({
            url: layer.url,
            layers: layer.layers,
          })
          .addTo(map);
      });
    }
  }

  // Add the control layers to the map with the featureLayers object
  L.control.layers(null, layers, { position: "bottomright" }).addTo(map);

  map.on("overlayremove", function (eventLayer) {
    // If the layer name removed from the layer toggle matches the name of the feature that currently has highlighting on it, remove the highlighting
    if (eventLayer.name == identifiedFeatureName) {
      map.removeLayer(identifiedFeature);
    }
  });
}
