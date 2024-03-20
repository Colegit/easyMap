/**
 * Adds the esri layers (map and feature layers) from the configuration file to the map
 * @param map The leaflet map we are adding data to
 */
function addEsriLayersToMap(map) {
  const endpoints = config[hashtag].restEndpoints;

  for (const endpointType in endpoints) {
    const endpoint = endpoints[endpointType];
    const captainKeys = Object.keys(endpoint);

    if (endpointType == "esriFeatureLayers") {
      captainKeys.forEach((key) => {
        L.esri
          .featureLayer({
            url: endpoint[key].url,
          })
          .addTo(map);
      });
    }
    if (endpointType == "esriMapLayers") {
      captainKeys.forEach((key) => {
        console.log(endpoint[key].url);
        L.esri
          .dynamicMapLayer({
            url: endpoint[key].url,
            layer: endpoint[key].layers,
          })
          .addTo(map);
      });
    }
  }
}
