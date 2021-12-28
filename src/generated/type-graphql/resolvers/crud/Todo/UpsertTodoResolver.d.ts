import { GraphQLResolveInfo } from "graphql";
import { UpsertTodoArgs } from "./args/UpsertTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class UpsertTodoResolver {
    upsertTodo(ctx: any, info: GraphQLResolveInfo, args: UpsertTodoArgs): Promise<Todo>;
}
