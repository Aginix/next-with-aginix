import { TodoAvgOrderByAggregateInput } from "../inputs/TodoAvgOrderByAggregateInput";
import { TodoCountOrderByAggregateInput } from "../inputs/TodoCountOrderByAggregateInput";
import { TodoMaxOrderByAggregateInput } from "../inputs/TodoMaxOrderByAggregateInput";
import { TodoMinOrderByAggregateInput } from "../inputs/TodoMinOrderByAggregateInput";
import { TodoSumOrderByAggregateInput } from "../inputs/TodoSumOrderByAggregateInput";
export declare class TodoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    checked?: "asc" | "desc" | undefined;
    _count?: TodoCountOrderByAggregateInput | undefined;
    _avg?: TodoAvgOrderByAggregateInput | undefined;
    _max?: TodoMaxOrderByAggregateInput | undefined;
    _min?: TodoMinOrderByAggregateInput | undefined;
    _sum?: TodoSumOrderByAggregateInput | undefined;
}
