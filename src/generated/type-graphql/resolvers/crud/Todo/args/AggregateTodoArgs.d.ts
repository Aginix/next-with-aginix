import { TodoOrderByWithRelationInput } from "../../../inputs/TodoOrderByWithRelationInput";
import { TodoWhereInput } from "../../../inputs/TodoWhereInput";
import { TodoWhereUniqueInput } from "../../../inputs/TodoWhereUniqueInput";
export declare class AggregateTodoArgs {
    where?: TodoWhereInput | undefined;
    orderBy?: TodoOrderByWithRelationInput[] | undefined;
    cursor?: TodoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
