// 0-promise.js

// Define a function named getResponseFromAPI
function getResponseFromAPI(success) {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Inside the Promise executor function, resolve the Promise
    // For demonstration purposes, let's resolve it immediately with a string
   if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('The fake API is not working currently'));
  });
}

// Export the function so it can be imported elsewhere
export default getResponseFromAPI;
