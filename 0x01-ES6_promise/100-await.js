import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser functions concurrently using async/await
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    // Wait for both promises to resolve
    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    // Return an object with the responses
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // If an error occurs, return an empty object
    console.error(error); // Log the error for debugging purposes
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;
