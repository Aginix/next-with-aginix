import { GraphQLResolveInfo } from "graphql";
import { CreateTodoArgs } from "./args/CreateTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class CreateTodoResolver {
    createTodo(ctx: any, info: GraphQLResolveInfo, args: CreateTodoArgs): Promise<Todo>;
}
