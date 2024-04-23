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
    mapCenter: [53.910704, -122.7819],
    initialZoom: 6,
    bannerColor: "#Fae11",
    textColor: "#FF0000",
    favicon: "assets/wildfires.png",
    legendTitle: "Legend",
    legendOn: true, // Turn legend on or off
    restEndpoints: {
      //
      // https://developers.arcgis.com/esri-leaflet/styles-and-data-visualization/style-a-feature-layer/
      //
      esriFeatureLayers: {
        firePerimeters: {
          url: "https://services6.arcgis.com/ubm4tcTYICKBpist/arcgis/rest/services/BCWS_FirePerimeters_PublicView/FeatureServer/0/",
          whereClause: "FIRE_SIZE_HECTARES > 10000", // Add any criteria e.g. "FIRE_SIZE_HECTARES > 10000"

          // As feature layers are not returned with their original styling, we can add their styles here.
          style: {
            color: "#FF0000",
            weight: "1.0",
          },
          // For the side panel these are the attributes that will be displayed along with their human-readable titles
          attributes: {
            FIRE_STATUS: "Fire Status",
            FIRE_NUMBER: "Fire Number",
            FIRE_SIZE_HECTARES: "Fire Size in Hectares",
          },
          attributeDetails: {
            mapAll: true, // Set this to false if you only want the attributes you listed within the attributes {} hashmap to display. true will grab all attribute values.
          },
          featureSelection: {
            selectColor: "yellow", // Determines the color of the feature when clicked
            zoomToFeature: false, // Will zoom to the selected feature when clicked
          },
          legendName: "Fire Perimeters", // What the feature layer will show when in the toggle layers and legend
          legendStyle: {
            // Insert CSS styling parameters
            background: "rgba(255, 0, 0, 0.4);",
            border: "1.5px solid red",
          },
        },

        personStartedFire: {
          url: "https://services6.arcgis.com/ubm4tcTYICKBpist/ArcGIS/rest/services/BCWS_ActiveFires_PublicView/FeatureServer/0",
          whereClause: "FIRE_CAUSE = 'Person'", // Add any criteria e.g. "FIRE_SIZE_HECTARES > 10000"

          // As feature layers are not returned with their original styling, we can add their styles here.
          style: {
            iconUrl: "https://img.icons8.com/color/user",
            iconSize: [27, 31],
            iconAnchor: [13.5, 17.5],
            popupAnchor: [0, -11],
          },
          // For the side panel these are the attributes that will be displayed along with their human-readable titles
          attributes: {
            FIRE_STATUS: "Fire Status",
            FIRE_NUMBER: "Fire Number",
            FIRE_SIZE_HECTARES: "Fire Size in Hectares",
          },
          attributeDetails: {
            mapAll: true, // Set this to false if you only want the attributes you listed within the attributes {} hashmap to display. true will grab all attribute values.
          },
          featureSelection: {
            selectColor: "yellow", // Determines the color of the feature when clicked
            zoomToFeature: false, // Will zoom to the selected feature when clicked
          },
          legendName: "Person Caused Fires", // What the feature layer will show when in the toggle layers and legend
          legendStyle: {
            // Insert CSS styling parameters
            backgroundimage: "https://img.icons8.com/color/user;",
            border: "1.5px solid blue",
          },
        },

        // Add more feature servers as needed
      },
      //
      //
      //
      esriMapLayers: {
        albertaRegions: {
          url: "https://geospatial.alberta.ca/titan/rest/services/transportation/transportation/MapServer",
          layers: [0, 1, 2, 3], // Add the layers you want returned back from the map server
        },
        // Add more map servers as needed
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
