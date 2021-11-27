import { AuthChecker, buildSchema } from 'type-graphql';
import { Context } from './context';
import { HelloResolver } from './resolvers/hello/hello.resolver';

export const customAuthChecker: AuthChecker<Context> = ({ root, args, context, info }, roles) => {
  return true;
};

export async function getSchema() {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    validate: false,
    authChecker: customAuthChecker,
  });

  return schema;
}