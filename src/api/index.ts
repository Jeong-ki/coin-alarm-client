import { GraphQLClient } from "graphql-request";

const endpoint = "https://swapi-graphql.netlify.app/.netlify/functions/index";

const client = (() => {
  const token = localStorage?.getItem("token");

  return new GraphQLClient(endpoint, {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });
})();

export default client;
