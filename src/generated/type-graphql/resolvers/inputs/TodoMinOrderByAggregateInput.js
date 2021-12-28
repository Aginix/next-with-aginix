"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TodoMinOrderByAggregateInput = class TodoMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoMinOrderByAggregateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoMinOrderByAggregateInput.prototype, "checked", void 0);
TodoMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TodoMinOrderByAggregateInput", {
        isAbstract: true
    })
], TodoMinOrderByAggregateInput);
exports.TodoMinOrderByAggregateInput = TodoMinOrderByAggregateInput;
