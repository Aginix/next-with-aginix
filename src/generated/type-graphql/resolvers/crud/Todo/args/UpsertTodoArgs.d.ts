import { TodoCreateInput } from "../../../inputs/TodoCreateInput";
import { TodoUpdateInput } from "../../../inputs/TodoUpdateInput";
import { TodoWhereUniqueInput } from "../../../inputs/TodoWhereUniqueInput";
export declare class UpsertTodoArgs {
    where: TodoWhereUniqueInput;
    create: TodoCreateInput;
    update: TodoUpdateInput;
}
