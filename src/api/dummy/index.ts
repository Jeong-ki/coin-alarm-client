import { gql } from "graphql-request";
import type { FilmsData } from "./type";
import client from "..";

const getFilmsQuery = gql`
  query {
    allFilms {
      films {
        title
      }
    }
  }
`;
export const getFilms = async (): Promise<FilmsData> =>
  client.request(getFilmsQuery);

const getPersonQuery = gql`
  query GetPerson($personID: ID!) {
    person(personID: $personID) {
      name
      gender
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
`;
export const getPerson = async (id: number): Promise<any> =>
  client.request(getPersonQuery, { personID: id });
