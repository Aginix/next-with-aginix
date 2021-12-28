import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTodoArgs } from "./args/FindUniqueTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class FindUniqueTodoResolver {
    todo(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTodoArgs): Promise<Todo | null>;
}
