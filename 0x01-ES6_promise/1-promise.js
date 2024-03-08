// 1-promise.js

// Define the function as a default export without a name
export default function (boolean) {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    const object = {
      status: 200,
      body: 'Success',
    };

    if (boolean === true) {
      // Resolve the Promise with the object
      resolve(object);
    } else {
      // Reject the Promise with an error object containing the message
      reject(Error('The fake API is not working currently'));
    }
  });
}
