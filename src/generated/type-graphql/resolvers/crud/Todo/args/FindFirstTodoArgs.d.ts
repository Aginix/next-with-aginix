import { TodoOrderByWithRelationInput } from "../../../inputs/TodoOrderByWithRelationInput";
import { TodoWhereInput } from "../../../inputs/TodoWhereInput";
import { TodoWhereUniqueInput } from "../../../inputs/TodoWhereUniqueInput";
export declare class FindFirstTodoArgs {
    where?: TodoWhereInput | undefined;
    orderBy?: TodoOrderByWithRelationInput[] | undefined;
    cursor?: TodoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "checked"> | undefined;
}
