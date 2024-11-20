import axios from "axios";

function retry(fn, retries = 0) {
  return function call(...args) {
    return fn(...args).catch((err) => {
      if (retries) {
        retries--;
        return call(...args);
      } else {
        return Promise.reject(err);
      }
    });
  };
}
const callApi = (url) => {
  return axios(url);
};
const retriesCall = retry(callApi, 3);
// function retryApiCall(fn, retries = 0) {
//   return fn().catch((err) => {
//     if (retries) {
//       console.log("Retrying...", retries);
//       return retryApiCall(fn, retries - 1);
//     } else {
//       return Promise.reject(err);
//     }
//   });
// }

retriesCall("https://jsonplaceholder.typicode.com/users")
  .then(console.log)
  .catch(console.log);
