"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TodoMaxOrderByAggregateInput = class TodoMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoMaxOrderByAggregateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoMaxOrderByAggregateInput.prototype, "checked", void 0);
TodoMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TodoMaxOrderByAggregateInput", {
        isAbstract: true
    })
], TodoMaxOrderByAggregateInput);
exports.TodoMaxOrderByAggregateInput = TodoMaxOrderByAggregateInput;
