import { Arg, Args, Authorized, Ctx, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql';

@ObjectType()
export class Hello {
  @Field((type) => String)
  text: string;
}

@Resolver(Hello)
export class HelloResolver {
  @Query(() => Hello)
  hello(): Hello {
    return {
      text: `Hello, world!`
    }
  }
}