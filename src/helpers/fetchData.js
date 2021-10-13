/**
 * Fetches data from backend that needs authentication.
 * @param {object} options
 * @param callback
 *
 * following options are available
 *   - {string} body
 */
export default function fetchData(callback, options = {}) {
  const { method, body } = options || {};

  fetch(`https://htwg-app-back.herokuapp.com/`, {
    method: method || "POST",
    body: body || "",
  }).then((result) => {
    if (result.status === 200) {
      callback(result);
    }
  });
}
