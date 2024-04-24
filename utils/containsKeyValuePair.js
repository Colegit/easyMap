// Function to check if object contains a specific key and value pair
function containsKeyValuePair(obj, key, value) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && prop === key && obj[prop] === value) {
      return true;
    }
  }
  return false;
}
