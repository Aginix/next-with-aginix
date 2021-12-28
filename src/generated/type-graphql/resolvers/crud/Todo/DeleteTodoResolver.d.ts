import { GraphQLResolveInfo } from "graphql";
import { DeleteTodoArgs } from "./args/DeleteTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class DeleteTodoResolver {
    deleteTodo(ctx: any, info: GraphQLResolveInfo, args: DeleteTodoArgs): Promise<Todo | null>;
}
