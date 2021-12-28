import { GraphQLResolveInfo } from "graphql";
import { FindFirstTodoArgs } from "./args/FindFirstTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class FindFirstTodoResolver {
    findFirstTodo(ctx: any, info: GraphQLResolveInfo, args: FindFirstTodoArgs): Promise<Todo | null>;
}
