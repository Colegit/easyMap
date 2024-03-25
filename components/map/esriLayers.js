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
      captainKeys.forEach((key) => {
        L.esri
          .featureLayer({
            url: endpoint[key].url,
          })
          .addTo(map);
      });
    }
    if (endpointName == "esriMapLayers") {
      captainKeys.forEach((key) => {
        console.log(endpoint[key].url);
        L.esri
          .dynamicMapLayer({
            url: endpoint[key].url,
            layer: [0],
          })
          .addTo(map);
      });
    }
  }
}
