"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TodoSumAggregate = class TodoSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoSumAggregate.prototype, "id", void 0);
TodoSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TodoSumAggregate", {
        isAbstract: true
    })
], TodoSumAggregate);
exports.TodoSumAggregate = TodoSumAggregate;
