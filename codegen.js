module.exports = {
  schema: [
    {
      [process.env.GRAPHQL_ENDPOINT]: {
        headers: {
          // For Hasura (GraphQL Engine)
          // 'X-Hasura-Admin-Secret': process.env.AUTH_TOKEN,
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      documents: ['./graph/*.graphql'],
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: true,
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