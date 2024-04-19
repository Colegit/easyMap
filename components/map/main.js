// Initialize Leaflet map
var map = L.map("leaflet").setView(
  config[hashtag].mapCenter,
  config[hashtag].initialZoom
);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

addEsriLayersToMap(map);
