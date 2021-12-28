"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TodoCountAggregate = class TodoCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoCountAggregate.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoCountAggregate.prototype, "checked", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoCountAggregate.prototype, "_all", void 0);
TodoCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TodoCountAggregate", {
        isAbstract: true
    })
], TodoCountAggregate);
exports.TodoCountAggregate = TodoCountAggregate;
