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
  //
  [pageEnum.wildfires]: {
    title: "Wildfires",
    restEndpoints: {
      streets:
        "https://geo.rdffg.bc.ca/arcgis/rest/services/GEO/civic_address_reporting/MapServer/0/query",
      parcels:
        "https://geo.rdffg.bc.ca/arcgis/rest/services/GEO/civic_address_reporting/MapServer/0/query",
      perimeter:
        "https://geo.rdffg.bc.ca/arcgis/rest/services/GEO/civic_address_reporting/MapServer/0/query",
    },
    mapCenter: [53.910704, -122.7819],
    initialZoom: 14,
    bannerColor: "#Fae11",
    textColor: "#FF0000",
    logo: "/assets/logo.png",
    favicon: "/assets/logo.png",
    displayTermConditions: false,
    termsAndConditionsTitle: "Terms and Conditions",
    termsAndConditionsDesc: "",
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
  //
  [pageEnum.driveInfo]: {
    title: "Sample City",
    restEndpoints: {
      streets:
        "https://geo.rdffg.bc.ca/arcgis/rest/services/GEO/civic_address_reporting/MapServer/0/query",
      parcels:
        "https://geo.rdffg.bc.ca/arcgis/rest/services/GEO/civic_address_reporting/MapServer/0/query",
      perimeter:
        "https://geo.rdffg.bc.ca/arcgis/rest/services/GEO/civic_address_reporting/MapServer/0/query",
    },
    mapCenter: [-120.1234, 54.1234],
    initialZoom: 14,
    bannerColor: "#Fae11",
    textColor: "#FF0000",
    logo: "/assets/logo.png",
    favicon: "/assets/logo.png",
    displayTermConditions: false,
    termsAndConditionsTitle: "Terms and Conditions",
    termsAndConditionsDesc: "",
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