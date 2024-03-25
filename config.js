/**
 * Enum to prevent typos, ensure consistency, and general naming rules for the hashtag in the url. Data is used for displaying tab information as well as static text on the page
 */
pageEnum = {
  wildfires: "wildfires",
  driveInfo: "madeUpCity",
  eoc: "eoc",
};

/**
 * Grab the hashtag passed into the url if there is one
 */
const hashtag = getHashtag();

/**
 * Define configurations for each hashtag. Undefined is the default
 */
const config = {
  //
  // Wildfires Map
  //
  [pageEnum.wildfires]: {
    title: "Wildfires",
    restEndpoints: {
      //https://developers.arcgis.com/esri-leaflet/styles-and-data-visualization/style-a-feature-layer/
      //
      esriFeatureLayers: {
        firePerimeters: {
          url: "https://services6.arcgis.com/ubm4tcTYICKBpist/arcgis/rest/services/BCWS_FirePerimeters_PublicView/FeatureServer/0/",
          whereClause: "", // Add any criteria e.g. "OUTOFCONTROL = 'YES'"
          // As feature layers are not returned with their original styling, we can add their styles here.
          style: {
            color: "#FFFFFF",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5",
          },
          //For the side panel the attribute names coming from the featureLayer arent always presentable. This allows you to override them with a better name
          attributeNameOverrides: {
            area_name: "Area Name",
          },
          // What the feature layer will show when in the toggle layers and legend
          legendName: "Fire Perimeters",
          pane: "firePerimeter",
        },
        houses: {
          url: "https://services6.arcgis.com/ubm4tcTYICKBpist/arcgis/rest/services/BCWS_FirePerimeters_PublicView/FeatureServer/0/",
        },
      },
      //
      esriMapLayers: {
        summerTrails: {
          url: "https://geospatial.alberta.ca/titan/rest/services/boundary/trails/MapServer/2/",
          layers: [0, 1],
        },
      },
    },
    mapCenter: [53.910704, -122.7819],
    initialZoom: 6,
    bannerColor: "#Fae11",
    textColor: "#FF0000",
    logo: "/assets/logo.png",
    favicon: "/assets/logo.png",
    bookmarks: {
      0: {
        bookmarkTitle: "Doe Creek Wildfire",
        location: [-120.2123, 54.2314],
        zoom: 14,
      },
      1: {
        bookmarkTitle: "Dawson Creek Wildfire",
        location: [-120.2123, 54.2314],
        zoom: 14,
      },
    },
  },
  //
  // This is the default text if no desiredPage/hashtag is passed into the URL
  [undefined]: {
    title: "Default Map",
    restEndpoints: {
      streets:
        "https://geo.rdffg.bc.ca/arcgis/rest/services/GEO/civic_address_reporting/MapServer/0/query",
      parcels:
        "https://geo.rdffg.bc.ca/arcgis/rest/services/GEO/civic_address_reporting/MapServer/0/query",
      perimeter:
        "https://geo.rdffg.bc.ca/arcgis/rest/services/GEO/civic_address_reporting/MapServer/0/query",
    },
    mapCenter: [53.910704, -122.7819],
    initialZoom: 12,
    bannerColor: "#Fae11",
    textColor: "#FF0000",
    logo: "/assets/logo.png",
    favicon: "/assets/logo.png",
    displayTermConditions: false,
    termsAndConditionsTitle: "Terms and Conditions",
    termsAndConditionsDesc: "",
  },
  // Add more custom text as you add more hashtags to the application
};
