"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TodoAvgAggregate = class TodoAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoAvgAggregate.prototype, "id", void 0);
TodoAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TodoAvgAggregate", {
        isAbstract: true
    })
], TodoAvgAggregate);
exports.TodoAvgAggregate = TodoAvgAggregate;
