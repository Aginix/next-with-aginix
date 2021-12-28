"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoOrderByWithAggregationInput_1 = require("../../../inputs/TodoOrderByWithAggregationInput");
const TodoScalarWhereWithAggregatesInput_1 = require("../../../inputs/TodoScalarWhereWithAggregatesInput");
const TodoWhereInput_1 = require("../../../inputs/TodoWhereInput");
const TodoScalarFieldEnum_1 = require("../../../../enums/TodoScalarFieldEnum");
let GroupByTodoArgs = class GroupByTodoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoWhereInput_1.TodoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoWhereInput_1.TodoWhereInput)
], GroupByTodoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TodoOrderByWithAggregationInput_1.TodoOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByTodoArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TodoScalarFieldEnum_1.TodoScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByTodoArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoScalarWhereWithAggregatesInput_1.TodoScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoScalarWhereWithAggregatesInput_1.TodoScalarWhereWithAggregatesInput)
], GroupByTodoArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByTodoArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByTodoArgs.prototype, "skip", void 0);
GroupByTodoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByTodoArgs);
exports.GroupByTodoArgs = GroupByTodoArgs;
