"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TodoCountOrderByAggregateInput = class TodoCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoCountOrderByAggregateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoCountOrderByAggregateInput.prototype, "checked", void 0);
TodoCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TodoCountOrderByAggregateInput", {
        isAbstract: true
    })
], TodoCountOrderByAggregateInput);
exports.TodoCountOrderByAggregateInput = TodoCountOrderByAggregateInput;
