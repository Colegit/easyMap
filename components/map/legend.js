/*Legend specific*/
var legend = L.control({ position: "topright" });

const legendFinal = new Map();
const legendTitle = config[hashtag].legendTitle;
const restEndpoints = config[hashtag].restEndpoints;

/* Loop through all feature and map layers (or any future supported rest endpoint types) and grab their legend styling */

for (let endpoint in restEndpoints) {
  if (endpoint == "esriFeatureLayers") {
    const featureLayers = restEndpoints[endpoint];
    let layerData;
    Object.keys(featureLayers).forEach((layer) => {
      legendFinal.set(
        featureLayers[layer].legendName,
        featureLayers[layer].style.color
      );
    });
  }
}

legend.onAdd = function (map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>" + legendTitle + "</h4>";
  legendFinal.forEach((color, title) => {
    div.innerHTML +=
      '<i style="background: ' +
      color +
      '"></i><span> ' +
      title +
      "</span><br>";
  });
  div.innerHTML +=
    '<i style="background: #477AC2"></i><span> ' + legendTitle + "</span><br>";
  div.innerHTML += '<i style="background: #448D40"></i><span>Forest</span><br>';
  div.innerHTML += '<i style="background: #E6E696"></i><span>Land</span><br>';
  div.innerHTML +=
    '<i style="background: #E8E6E0"></i><span>Residential</span><br>';
  div.innerHTML += '<i style="background: #FFFFFF"></i><span>Ice</span><br>';
  div.innerHTML +=
    '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';

  return div;
};

legend.addTo(map);
