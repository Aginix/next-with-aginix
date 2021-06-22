module.exports = {
  schema: [
    {
      [process.env.GRAPHQL_URL]: {
        headers: {
          // For Hasura (GraphQL Engine)
          // 'X-Hasura-Admin-Secret': process.env.AUTH_TOKEN,
        },
      },
    },
  ],
  documents: ['./graph/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
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
    './src/generated/graphql-request.ts': {
      plugins: ['typescript-graphql-request'],
      config: {
        typesPrefix: 'Operations.',
        rawRequest: false,
        documentMode: 'external',
        importDocumentNodeExternallyFrom: './graphql',
        namingConvention: {
          typeNames: 'pascal-case#pascalCase',
          transformUnderscore: true,
        },
      },
    },
    './src/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};