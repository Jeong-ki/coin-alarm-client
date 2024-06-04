import client from "..";
import { graphql } from "@/gql";

export const queryFindUsers = graphql(`
  query FindUsers {
    FindUsers(filter: {}) {
      userId
      createdAt
      isActivated
    }
  }
`);

export const getFindUsers = async () => client.request(queryFindUsers);
