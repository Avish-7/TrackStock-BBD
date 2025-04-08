export const msalConfig = {
    auth: {
      clientId: "b91441e3-db36-4dbd-95a7-50d0d60b1dd7",
      authority: "https://login.microsoftonline.com/42de0daa-6a6a-46c1-8c9f-0a788e498a5d",
      redirectUri: "http://localhost:3000/signup2",
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    }
  };
  
  export const loginRequest = {
    scopes: ["User.Read"],
  };