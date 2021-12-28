import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTodoArgs } from "./args/UpdateManyTodoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTodoResolver {
    updateManyTodo(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTodoArgs): Promise<AffectedRowsOutput>;
}
