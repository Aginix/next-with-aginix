import { GraphQLResolveInfo } from "graphql";
import { FindManyTodoArgs } from "./args/FindManyTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class FindManyTodoResolver {
    todos(ctx: any, info: GraphQLResolveInfo, args: FindManyTodoArgs): Promise<Todo[]>;
}
