import { BoolFilter } from "../inputs/BoolFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TodoWhereInput {
    AND?: TodoWhereInput[] | undefined;
    OR?: TodoWhereInput[] | undefined;
    NOT?: TodoWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringNullableFilter | undefined;
    checked?: BoolFilter | undefined;
}
