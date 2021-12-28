import { GraphQLResolveInfo } from "graphql";
import { UpdateTodoArgs } from "./args/UpdateTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class UpdateTodoResolver {
    updateTodo(ctx: any, info: GraphQLResolveInfo, args: UpdateTodoArgs): Promise<Todo | null>;
}
