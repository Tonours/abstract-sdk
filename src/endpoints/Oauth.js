// @flow
import { BaseError } from "../errors";
import type {
  OAuthAuthorizeInput,
  OAuthOnAuthorizeToken,
  TokenResponseData
} from "../types";
import Endpoint from "../endpoints/Endpoint";
import Client from "../Client";

export default class OAuth extends Endpoint {
  name = "oauth";

  getToken(input: OAuthOnAuthorizeToken) {
    const clientId = input.clientId || this.options.clientId;
    const clientSecret = input.clientSecret || this.options.clientSecret;
    let redirectUri = input.redirectUri || this.options.redirectUri;
    const { authorizationCode } = input;

    const body = new URLSearchParams();

    body.append("client_id", clientId);
    body.append("client_secret", clientSecret);
    body.append("code", authorizationCode);
    body.append("grant_type", "authorization_code");
    body.append("redirect_uri", redirectUri);

    return this.configureRequest<Promise<TokenResponseData>>("getToken", {
      api: async () => {
        const response = await this.apiRequest(
          `auth/tokens`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body
          },
          {
            customHostname: "https://auth.goabstract.com"
          }
        );

        if (!!response.error) {
          throw new BaseError(`Error: ${response.error}`);
        } else {
          return response.access_token;
        }
      }
    });
  }

  setToken(accessToken: string) {
    return new Client({
      ...this.options,
      accessToken
    });
  }

  generateAuthorizeUrl(input: OAuthAuthorizeInput): string {
    const clientId = input.clientId || this.options.clientId;
    const state = input.state;
    const redirectUri = input.redirectUri || this.options.redirectUri;

    if (!clientId || !state || !redirectUri) {
      throw new BaseError(
        "Client credentials are missing. Please doublecheck clientId, redirectUri and state"
      );
    }

    return `https://app.abstract.com/signin/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&scope=all&state=${state}`;
  }
}
