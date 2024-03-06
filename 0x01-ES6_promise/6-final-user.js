// 6-final-user.js

import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// Define a function named handleProfileSignup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call signUpUser and uploadPhoto functions
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  // Wait for all promises to settle and return an array with the status and value/error
  return Promise.allSettled([promise1, promise2]).then((results) => {
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
  });
}
