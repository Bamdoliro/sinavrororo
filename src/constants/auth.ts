export const GOOGLE_AUTH_CONFIG = {
  redirect_uri: "http://localhost:3000/auth/callback", 
  scope: [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ].join(" "),
  response_type: "code",
};
