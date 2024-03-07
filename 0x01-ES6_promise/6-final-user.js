// Importing signUpUser function from './4-user-promise.js'
import signUpUser from './4-user-promise.js';

// Importing uploadPhoto function from './5-photo-reject.js'
import uploadPhoto from './5-photo-reject.js';

// Defining the handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Calling signUpUser and uploadPhoto functions with provided arguments
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  // Returning a Promise that resolves when all promises are settled
  return Promise.allSettled([promise1, promise2]).then((results) => {
    // Mapping the results to create an array with the desired structure
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
  });
}
