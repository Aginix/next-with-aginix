"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoAvgOrderByAggregateInput_1 = require("../inputs/TodoAvgOrderByAggregateInput");
const TodoCountOrderByAggregateInput_1 = require("../inputs/TodoCountOrderByAggregateInput");
const TodoMaxOrderByAggregateInput_1 = require("../inputs/TodoMaxOrderByAggregateInput");
const TodoMinOrderByAggregateInput_1 = require("../inputs/TodoMinOrderByAggregateInput");
const TodoSumOrderByAggregateInput_1 = require("../inputs/TodoSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TodoOrderByWithAggregationInput = class TodoOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoOrderByWithAggregationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoOrderByWithAggregationInput.prototype, "checked", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoCountOrderByAggregateInput_1.TodoCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoCountOrderByAggregateInput_1.TodoCountOrderByAggregateInput)
], TodoOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoAvgOrderByAggregateInput_1.TodoAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoAvgOrderByAggregateInput_1.TodoAvgOrderByAggregateInput)
], TodoOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoMaxOrderByAggregateInput_1.TodoMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoMaxOrderByAggregateInput_1.TodoMaxOrderByAggregateInput)
], TodoOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoMinOrderByAggregateInput_1.TodoMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoMinOrderByAggregateInput_1.TodoMinOrderByAggregateInput)
], TodoOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoSumOrderByAggregateInput_1.TodoSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoSumOrderByAggregateInput_1.TodoSumOrderByAggregateInput)
], TodoOrderByWithAggregationInput.prototype, "_sum", void 0);
TodoOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TodoOrderByWithAggregationInput", {
        isAbstract: true
    })
], TodoOrderByWithAggregationInput);
exports.TodoOrderByWithAggregationInput = TodoOrderByWithAggregationInput;
