import { GraphQLResolveInfo } from "graphql";
import { CreateManyTodoArgs } from "./args/CreateManyTodoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTodoResolver {
    createManyTodo(ctx: any, info: GraphQLResolveInfo, args: CreateManyTodoArgs): Promise<AffectedRowsOutput>;
}
