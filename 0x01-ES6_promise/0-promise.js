// 0-promise.js

// Export the function so it can be imported elsewhere
export default function getResponseFromAPI() {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
}
