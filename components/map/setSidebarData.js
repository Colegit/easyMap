function setSidebarData(properties, overrides) {
  let newHashMap = {};

  // Loop through each key in hashmap A
  for (let key in properties) {
    if (properties.hasOwnProperty(key)) {
      // Check if this key exists in hashmap B
      if (overrides.hasOwnProperty(key)) {
        // Use the value from hashmap B as the new key
        newHashMap[overrides[key]] = properties[key];
      } else {
        // Uncomment below if you want all attributes to display regardless of config file attribute entries
        //newHashMap[key] = properties[key];
      }
    }
  }
  return newHashMap;
}
