// 4-user-promise.js

// Define a function named signUpUser
export default function signUpUser(firstName, lastName) {
  // Return a new Promise that resolves with an object containing firstName and lastName
  return Promise.resolve({ firstName, lastName });
}
