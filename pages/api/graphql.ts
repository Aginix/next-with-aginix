import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';

import { AuthChecker, buildSchema } from 'type-graphql';
import { NextApiRequest, NextApiResponse } from 'next';
import { Context } from 'server/context';
import { HelloResolver } from 'server/hello/hello.resolver';

export const config = {
  api: {
    bodyParser: false,
  },
};

export const customAuthChecker: AuthChecker<Context> = ({ root, args, context, info }, roles) => {
  return true;
};

async function createApolloServer() {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    validate: false,
    authChecker: customAuthChecker,
  });

  return new ApolloServer({
    schema,
    playground: {
      settings: {
        'tracing.hideTracingResponse': true,
        'request.credentials': 'include',
      },
    },
    tracing: true,
    introspection: true,
    context: async ({ req }): Promise<Context> => {
      return {
        req: req,
      };
    },
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apolloServer = await createApolloServer();
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
};