/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  LogIn: UserSessionInfo;
  RefreshSessionExpiration: SessionUpdateOutput;
  SignupUser: SignUpResult;
  UpdateUser: User;
  UpdateUserAcivation: User;
  UpdateUserBySelf: User;
};


export type MutationLogInArgs = {
  password: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationSignupUserArgs = {
  data: SignUpInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationUpdateUserAcivationArgs = {
  data: UpdateUserInput;
};


export type MutationUpdateUserBySelfArgs = {
  data: UpdateUserBySelfInput;
};

export type Query = {
  __typename?: 'Query';
  FindUserSessionInfo?: Maybe<UserSessionInfo>;
  FindUsers: Array<User>;
};


export type QueryFindUsersArgs = {
  filter: UserFilter;
};

export type SessionUpdateOutput = {
  __typename?: 'SessionUpdateOutput';
  sessionUpdateReasonEnum: SessionUpdateReasonEnum;
  userSessionInfo: UserSessionInfo;
};

export enum SessionUpdateReasonEnum {
  RefreshSessionExpirationDate = 'REFRESH_SESSION_EXPIRATION_DATE',
  UpdateUserAuthInfo = 'UPDATE_USER_AUTH_INFO'
}

export enum SignUpErrMsgEnum {
  DuplicatedId = 'DUPLICATED_ID',
  EmptyName = 'EMPTY_NAME',
  ShortIdLength = 'SHORT_ID_LENGTH',
  ShortPwLength = 'SHORT_PW_LENGTH',
  UnknownErr = 'UNKNOWN_ERR'
}

export type SignUpInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type SignUpResult = {
  __typename?: 'SignUpResult';
  errorMsg?: Maybe<SignUpErrMsgEnum>;
  result: Scalars['Boolean']['output'];
};

export type UpdateUserBySelfInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  id: Scalars['ID']['input'];
  isActivated?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActivated: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type UserFilter = {
  isActivated?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UserSessionInfo = {
  __typename?: 'UserSessionInfo';
  sessionExpiredDate: Scalars['DateTime']['output'];
  token: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type SignupMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', SignupUser: { __typename?: 'SignUpResult', result: boolean, errorMsg?: SignUpErrMsgEnum | null } };

export type FindUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUsersQuery = { __typename?: 'Query', FindUsers: Array<{ __typename?: 'User', userId: string, createdAt: any, isActivated: boolean }> };


export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SignupUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"errorMsg"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const FindUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FindUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActivated"}}]}}]}}]} as unknown as DocumentNode<FindUsersQuery, FindUsersQueryVariables>;