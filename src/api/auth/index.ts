import { graphql } from "@/lib/gql";
import client from "..";
import { SignUpInput } from "@/lib/gql/graphql";

export const mutateSignup = async (data: SignUpInput) =>
  client.request({
    document: graphql(`
      mutation Signup($data: SignUpInput!) {
        SignupUser(data: $data) {
          result
          errorMsg
        }
      }
    `),
    variables: { data },
  });
