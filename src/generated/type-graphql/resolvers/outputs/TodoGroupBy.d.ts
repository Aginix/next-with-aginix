import { TodoAvgAggregate } from "../outputs/TodoAvgAggregate";
import { TodoCountAggregate } from "../outputs/TodoCountAggregate";
import { TodoMaxAggregate } from "../outputs/TodoMaxAggregate";
import { TodoMinAggregate } from "../outputs/TodoMinAggregate";
import { TodoSumAggregate } from "../outputs/TodoSumAggregate";
export declare class TodoGroupBy {
    id: number;
    title: string | null;
    checked: boolean;
    _count: TodoCountAggregate | null;
    _avg: TodoAvgAggregate | null;
    _sum: TodoSumAggregate | null;
    _min: TodoMinAggregate | null;
    _max: TodoMaxAggregate | null;
}
