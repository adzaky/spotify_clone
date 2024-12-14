interface configTypes {
  CLIENT_ID: string;
  REDIRECT_URI: string;
  SCOPE: string[];
  SCOPE_PARAM: string;
}

export const CLIENT_ID: configTypes["CLIENT_ID"] = "d524b5e56c154c1eac427a468ba571dd";
export const REDIRECT_URI: configTypes["REDIRECT_URI"] = "http://localhost:5173/";
export const SCOPE: configTypes["SCOPE"] = ["user-top-read", "user-read-recently-played"];
export const SCOPE_PARAM: configTypes["SCOPE_PARAM"] = SCOPE.join("%20");
