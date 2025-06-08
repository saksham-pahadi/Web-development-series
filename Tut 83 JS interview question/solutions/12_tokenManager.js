function setAuthToken(token) {
  if (typeof token !== 'string' || token.trim() === '') {
    throw new Error('Invalid token');
  }
  localStorage.setItem("authToken", token);
}
function getAuthToken() {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error('No token found');
  }
  return token;
}   
function removeAuthToken() {
  localStorage.removeItem('authToken');
}
// function isAuthenticated() {
//   const token = localStorage.getItem('authToken');
//   return token !== null && token.trim() !== '';
// }
// function getTokenExpirationDate(token) {
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   if (!payload.exp) {
//     throw new Error('Token does not have an expiration date');
//   }
//   return new Date(payload.exp * 1000);
// }   
// function isTokenExpired(token) {
//   const expirationDate = getTokenExpirationDate(token);
//   return new Date() > expirationDate;
// }
// function refreshAuthToken() {
//   const token = localStorage.getItem('authToken');
//   if (!token) {
//     throw new Error('No token found to refresh');
//   }
//   // Simulate a token refresh by simply returning the same token
//   // In a real application, you would make an API call to refresh the token
//   return token;
// }
// export {
//   setAuthToken, 
//     getAuthToken,
//     removeAuthToken,
//     isAuthenticated,
//     getTokenExpirationDate,
//     isTokenExpired,
//     refreshAuthToken
// };

// Named Exports
// These allow you to export multiple values from a module. Each exported value has a specific name that is used when importing.
let pass = 'saksham'; // Example token
setAuthToken(pass); // Set the token in local storage
console.log(getAuthToken()); // Retrieve the token from local storage   
removeAuthToken();
