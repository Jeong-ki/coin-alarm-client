import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_URL || "";

const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null;
};

const client = (() => {
  const accessToken = getAccessToken();
  const headersObj = accessToken
    ? { headers: { authorization: `Bearer ${accessToken}` } }
    : {};

  return new GraphQLClient(endpoint, { ...headersObj });
})();

export default client;
