// 6-final-user.js

// Importing signUpUser function from './4-user-promise.js' module
import signUpUser from './4-user-promise';

// Importing uploadPhoto function from './5-photo-reject.js' module
import uploadPhoto from './5-photo-reject';

// Define a function named handleProfileSignup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Returning a Promise that resolves when all promises from signUpUser and uploadPhoto functions are settled
  return Promise.allSettled([
    signUpUser(firstName, lastName), // Calling signUpUser function with provided firstName and lastName
    uploadPhoto(fileName), // Calling uploadPhoto function with provided fileName
  ]).then((values) => { // Handling the settled promises
    const arr = []; // Initializing an empty array to store the results
    // Looping through the settled promises
    for (const item of values) {
      // Pushing an object with status and value/error of each promise to the array
      arr.push({ status: item.status, value: item.value || item.reason });
    }
    // Returning the array containing the status and value/error of each Promise
    return arr;
  });
}
