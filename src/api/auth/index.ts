import { graphql } from "@/lib/gql";
import client from "..";
import { SignUpInput } from "@/lib/gql/graphql";

export const signUpUser = async (data: SignUpInput) =>
  client.request({
    document: graphql(`
      mutation SignUp($data: SignUpInput!) {
        SignupUser(data: $data) {
          result
          errorMsg
        }
      }
    `),
    variables: { data },
  });

export const signInUser = async ({
  userId,
  password,
}: {
  userId: string;
  password: string;
}) =>
  client.request({
    document: graphql(`
      mutation LogIn($userId: String!, $password: String!) {
        LogIn(userId: $userId, password: $password) {
          token
          userId
          sessionExpiredDate
        }
      }
    `),
    variables: { userId, password },
  });
