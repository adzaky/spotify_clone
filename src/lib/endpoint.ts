import { CLIENT_ID, REDIRECT_URI, SCOPE_PARAM } from "./config";

interface endpointTypes {
  AUTHORIZE: string;
  BASE: string;
  URL: string;
}

const AUTHORIZE_ENDPOINT: endpointTypes["AUTHORIZE"] = "https://accounts.spotify.com/authorize";
// const BASE_ENDPOINT: endpointTypes["BASE"] = "https://api.spotify.com/v1/";

export const SIGNIN: endpointTypes["URL"] = `${AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_PARAM}&response_type=token&show_dialog=true`;
