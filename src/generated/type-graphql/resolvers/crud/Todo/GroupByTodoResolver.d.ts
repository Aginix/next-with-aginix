import { GraphQLResolveInfo } from "graphql";
import { GroupByTodoArgs } from "./args/GroupByTodoArgs";
import { TodoGroupBy } from "../../outputs/TodoGroupBy";
export declare class GroupByTodoResolver {
    groupByTodo(ctx: any, info: GraphQLResolveInfo, args: GroupByTodoArgs): Promise<TodoGroupBy[]>;
}
