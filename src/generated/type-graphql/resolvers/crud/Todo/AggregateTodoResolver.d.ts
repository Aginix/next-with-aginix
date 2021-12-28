import { GraphQLResolveInfo } from "graphql";
import { AggregateTodoArgs } from "./args/AggregateTodoArgs";
import { AggregateTodo } from "../../outputs/AggregateTodo";
export declare class AggregateTodoResolver {
    aggregateTodo(ctx: any, info: GraphQLResolveInfo, args: AggregateTodoArgs): Promise<AggregateTodo>;
}
