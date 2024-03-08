// 5-photo-reject.js

// Define a function named uploadPhoto
export default function uploadPhoto(filename) {
  // Return a new Promise that rejects with an Error
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
