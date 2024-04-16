function setSidebarData(properties, overrides) {
  let newHashMap = {};
  const overrideAttr = overrides.attributes;
  const overrideAttrDetails = overrides.attributeDetails;

  // Loop through each key in hashmap A
  for (let key in properties) {
    if (properties.hasOwnProperty(key)) {
      // Check if this key exists in hashmap B
      if (overrideAttr.hasOwnProperty(key)) {
        // Use the value from hashmap B as the new key
        newHashMap[overrideAttr[key]] = properties[key];
      } else {
        // If you have configured the mapAll attribute to true in the config, all attributes will display
        if (overrideAttrDetails.mapAll == true) {
          newHashMap[key] = properties[key];
        }
      }
    }
  }
  return newHashMap;
}
