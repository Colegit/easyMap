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
          whereClause: "FIRE_SIZE_HECTARES > 10000", // Add any criteria e.g. "FIRE_SIZE_HECTARES > 10000"
          legendName: "Fire Perimeters", // What the feature layer will show when in the toggle layers and legend

          // As feature layers are not returned with their original styling, we can add their styles here.
          style: {
            color: "#FF0000",
            // dashArray: "2, 3",
            // dashOffset: "2",
            weight: "1.0",
          },
          //For the side panel the attribute names coming from the featureLayer arent always presentable. This allows you to override them with a better name
          attributeNameOverrides: {
            FIRE_STATUS: "Fire Status",
            FIRE_NUMBER: "Fire Number",
            FIRE_SIZE_HECTARES: "Fire Size in Hectares",
          },
        },
        // Add more feature servers as needed
      },
      //
      esriMapLayers: {
        albertaRegions: {
          url: "https://geospatial.alberta.ca/titan/rest/services/transportation/transportation/MapServer",
          layers: [0, 1, 2, 3], // Add the layers you want returned back from the map server
        },
        // Add more map servers as needed
      },
    },
    mapCenter: [53.910704, -122.7819],
    initialZoom: 6,
    bannerColor: "#Fae11",
    textColor: "#FF0000",
    favicon: "assets/wildfires.png",
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
    favicon: "assets/default.png",
    displayTermConditions: false,
    termsAndConditionsTitle: "Terms and Conditions",
    termsAndConditionsDesc: "",
  },
  // Add more custom text as you add more hashtags to the application
};
