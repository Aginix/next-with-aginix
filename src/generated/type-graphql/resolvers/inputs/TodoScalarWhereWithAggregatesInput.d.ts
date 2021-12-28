import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class TodoScalarWhereWithAggregatesInput {
    AND?: TodoScalarWhereWithAggregatesInput[] | undefined;
    OR?: TodoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TodoScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringNullableWithAggregatesFilter | undefined;
    checked?: BoolWithAggregatesFilter | undefined;
}
