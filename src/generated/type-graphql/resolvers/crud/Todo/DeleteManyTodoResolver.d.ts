import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTodoArgs } from "./args/DeleteManyTodoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTodoResolver {
    deleteManyTodo(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTodoArgs): Promise<AffectedRowsOutput>;
}
