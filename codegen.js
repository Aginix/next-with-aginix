const GRAPHQL_URL = process.env.GRAPHQL_URL || 'http://localhost:3000/api/graphql';

module.exports = {
  schema: [
    {
      [GRAPHQL_URL]: {
        headers: {},
      },
    },
  ],
  documents: ['./components/**/*.graphql'],
  overwrite: true,
  generates: {
    './generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        namingConvention: {
          typeNames: 'pascal-case#pascalCase',
          transformUnderscore: true,
        },
      },
    },
    // For backend
    // './generated/graphql-request.ts': {
    //   plugins: ['typescript-graphql-request'],
    //   config: {
    //     typesPrefix: 'Operations.',
    //     rawRequest: false,
    //     documentMode: 'external',
    //     importDocumentNodeExternallyFrom: './graphql',
    //     namingConvention: {
    //       typeNames: 'pascal-case#pascalCase',
    //       transformUnderscore: true,
    //     },
    //   },
    // },
    './generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};
