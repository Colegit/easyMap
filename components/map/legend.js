// Only show legend if its been turned on within the config file
if (config[hashtag].legendOn) {
  var legend = L.control({ position: "topright" });

  const legendFinal = new Map();
  const legendTitle = config[hashtag].legendTitle;
  const restEndpoints = config[hashtag].restEndpoints;

  // Construct a map that contains each features legend name as the key, and an object of the css styling parameters from the config file as the value
  for (let endpoint in restEndpoints) {
    if (endpoint == "esriFeatureLayers") {
      const featureLayers = restEndpoints[endpoint];
      let layerData;
      Object.keys(featureLayers).forEach((layer) => {
        legendFinal.set(
          featureLayers[layer].legendName,
          featureLayers[layer].legendStyle
        );
      });
    }
  }

  legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h4>" + legendTitle + "</h4>";

    // Grab each layer from our constructed map and construct the html and styling for each one
    legendFinal.forEach((legendStyle, legendName) => {
      // The html is different if its an icon. This checks if the type is set to icon in the config file
      // Convert our object value into a string so that we can insert it into our string html
      let styleString = "";
      for (const [key, value] of Object.entries(legendStyle)) {
        if (key !== "type") {
          styleString += `${key}: ${value}; `;
        }
      }
      styleString = '"' + styleString + '"';

      if (!containsKeyValuePair(legendStyle, "type", "icon")) {
        // Construct our final html legend row
        div.innerHTML +=
          "<i style=" +
          styleString +
          '"></i><span> ' +
          legendName +
          "</span><br>";
      } else {
        console.log(styleString);
        div.innerHTML +=
          '<i class="icon" style=' +
          styleString +
          "></i><span> " +
          legendName +
          "</span><br>";
      }
    });

    div.innerHTML +=
      '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';

    return div;
  };

  legend.addTo(map);
}
