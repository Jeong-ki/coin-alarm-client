import client from "..";
import { graphql } from "@/lib/gql";

export const getFindUsers = async () =>
  client.request(
    graphql(`
      query FindUsers {
        FindUsers(filter: {}) {
          userId
          createdAt
          isActivated
        }
      }
    `)
  );
