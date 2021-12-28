"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTodo = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoAvgAggregate_1 = require("../outputs/TodoAvgAggregate");
const TodoCountAggregate_1 = require("../outputs/TodoCountAggregate");
const TodoMaxAggregate_1 = require("../outputs/TodoMaxAggregate");
const TodoMinAggregate_1 = require("../outputs/TodoMinAggregate");
const TodoSumAggregate_1 = require("../outputs/TodoSumAggregate");
let AggregateTodo = class AggregateTodo {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoCountAggregate_1.TodoCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoCountAggregate_1.TodoCountAggregate)
], AggregateTodo.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoAvgAggregate_1.TodoAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoAvgAggregate_1.TodoAvgAggregate)
], AggregateTodo.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoSumAggregate_1.TodoSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoSumAggregate_1.TodoSumAggregate)
], AggregateTodo.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoMinAggregate_1.TodoMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoMinAggregate_1.TodoMinAggregate)
], AggregateTodo.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoMaxAggregate_1.TodoMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoMaxAggregate_1.TodoMaxAggregate)
], AggregateTodo.prototype, "_max", void 0);
AggregateTodo = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateTodo", {
        isAbstract: true
    })
], AggregateTodo);
exports.AggregateTodo = AggregateTodo;
