import { tokensType } from "../@types/tokenTypes/tokenTypes";

const setCookie = (tokens: tokensType) => {
  document.cookie = `accessToken=${tokens.accessToken} , max-age=${
    1 * 24 * 60 * 60
  }`;
  document.cookie = `refreshToken=${tokens.refreshToekn} , max-age=${
    30 * 24 * 60 * 60
  }`;
};

const getCookie = (cookieName: string) => {
  return document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieName)?.split("=")[1];
};

export { setCookie, getCookie };
