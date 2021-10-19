/**
 * Fetches data from backend that needs authentication.
 * @param {object} options
 * @param callback
 *
 * following options are available
 *   - {string} body
 */
export default function fetchData(callback, options = null) {
  let method, body, requestBody;
  let address = "https://htwg-app-back.herokuapp.com/";
  if (options !== null) {
    if (typeof options === "object") {
      ({ method, body } = options || {});
      requestBody = {
        method: method || "POST",
        body: body || "",
      };
    } else if (typeof options === "string") {
      address = options;
    }
  }

  fetch(address, requestBody)
    .then((result) => {
      if (result.status === 200) {
        callback(result);
      }
    })
    .catch(() => {
      console.warn(
        `There was an error when trying to fetch from ${address} with params ${
          requestBody || ""
        }`
      );
    });
}
