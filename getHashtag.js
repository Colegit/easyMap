/**
 * This function grabs the hash put on the end of the URL so we can configure the app accordingly.
 *
 * For example, sample.com/#electoralArea or sample.com/#fireProtection
 */
function getHashtag() {
  const hash = window.location.hash;
  if (window.location.hash) {
    return hash.substring(1);
  }
}
