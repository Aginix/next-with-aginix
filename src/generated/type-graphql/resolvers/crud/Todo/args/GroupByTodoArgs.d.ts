import { TodoOrderByWithAggregationInput } from "../../../inputs/TodoOrderByWithAggregationInput";
import { TodoScalarWhereWithAggregatesInput } from "../../../inputs/TodoScalarWhereWithAggregatesInput";
import { TodoWhereInput } from "../../../inputs/TodoWhereInput";
export declare class GroupByTodoArgs {
    where?: TodoWhereInput | undefined;
    orderBy?: TodoOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "checked">;
    having?: TodoScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
