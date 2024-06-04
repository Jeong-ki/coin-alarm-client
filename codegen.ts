import { CodegenConfig } from "@graphql-codegen/cli";

require("dotenv").config({
  path: ".env",
});

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_URL,
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
