import { prisma } from '@/lib/prisma';
import { Context } from '@/server/graphql/context';
import { getSchema } from '@/server/graphql/schema';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';
import 'reflect-metadata';

export const config = {
  api: {
    bodyParser: false,
  },
};

async function createApolloServer() {
  const schema = await getSchema();

  return new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          'tracing.hideTracingResponse': true,
          'request.credentials': 'include',
        },
      }),
    ],
    introspection: true,
    context: async ({ req }): Promise<Context> => {
      return {
        req: req,
        prisma: prisma,
      };
    },
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apolloServer = await createApolloServer();
  await apolloServer.start();
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
