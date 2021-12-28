"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TodoMaxAggregate = class TodoMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoMaxAggregate.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TodoMaxAggregate.prototype, "checked", void 0);
TodoMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TodoMaxAggregate", {
        isAbstract: true
    })
], TodoMaxAggregate);
exports.TodoMaxAggregate = TodoMaxAggregate;
