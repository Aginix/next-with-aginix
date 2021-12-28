"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoAvgAggregate_1 = require("../outputs/TodoAvgAggregate");
const TodoCountAggregate_1 = require("../outputs/TodoCountAggregate");
const TodoMaxAggregate_1 = require("../outputs/TodoMaxAggregate");
const TodoMinAggregate_1 = require("../outputs/TodoMinAggregate");
const TodoSumAggregate_1 = require("../outputs/TodoSumAggregate");
let TodoGroupBy = class TodoGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoGroupBy.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TodoGroupBy.prototype, "checked", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoCountAggregate_1.TodoCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoCountAggregate_1.TodoCountAggregate)
], TodoGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoAvgAggregate_1.TodoAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoAvgAggregate_1.TodoAvgAggregate)
], TodoGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoSumAggregate_1.TodoSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoSumAggregate_1.TodoSumAggregate)
], TodoGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoMinAggregate_1.TodoMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoMinAggregate_1.TodoMinAggregate)
], TodoGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoMaxAggregate_1.TodoMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoMaxAggregate_1.TodoMaxAggregate)
], TodoGroupBy.prototype, "_max", void 0);
TodoGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TodoGroupBy", {
        isAbstract: true
    })
], TodoGroupBy);
exports.TodoGroupBy = TodoGroupBy;
