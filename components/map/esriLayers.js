/**
 * Adds the esri layers (map and feature layers) from the configuration file to the map
 * @param map The leaflet map we are adding data to
 */
function addEsriLayersToMap(map) {
  const endpoints = config[hashtag].restEndpoints;

  for (const endpointName in endpoints) {
    const endpoint = endpoints[endpointName];
    const captainKeys = Object.keys(endpoint);

    if (endpointName == "esriFeatureLayers") {
      let identifiedFeature;

      captainKeys.forEach((key) => {
        const layer = endpoint[key];
        const featureLayer = L.esri
          .featureLayer({
            url: layer.url,
            style: layer.style,
            where: layer.whereClause,
          })
          .addTo(map);

        featureLayer.on("click", function (e) {
          const sidebarData = setSidebarData(e.layer.feature.properties, layer);
          displaySidebar(sidebarData);

          // Remove previously identified feature layer
          if (identifiedFeature) {
            map.removeLayer(identifiedFeature);
          }

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
}
