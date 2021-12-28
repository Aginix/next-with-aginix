"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TodoMinAggregate = class TodoMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoMinAggregate.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TodoMinAggregate.prototype, "checked", void 0);
TodoMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TodoMinAggregate", {
        isAbstract: true
    })
], TodoMinAggregate);
exports.TodoMinAggregate = TodoMinAggregate;
