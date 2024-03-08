// 9-try.js

// Define a function named guardrail
export default function guardrail(mathFunction) {
  // Create an array to store the values/errors
  const queue = [];

  try {
    // Execute the mathFunction and append the result to the queue
    queue.push(mathFunction());
  } catch (error) {
    // If an error occurs, append the error message to the queue
    queue.push(error.toString());
  } finally {
    // Append the message 'Guardrail was processed' to the queue
    queue.push('Guardrail was processed');
  }

  // Return the queue array
  return queue;
}
