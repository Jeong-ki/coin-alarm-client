import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_URL || "";

const client = (() => {
  // const token = localStorage?.getItem("token");
  const token = false;

  return new GraphQLClient(endpoint, {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });
})();

export default client;
