// 7-load_balancer.js

// Define a function named loadBalancer
export default function loadBalancer(chinaDownload, USDownload) {
  // Return the value returned by the promise that resolves first
  return Promise.race([chinaDownload, USDownload]);
}
