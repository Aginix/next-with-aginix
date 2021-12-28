"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TodoCreateManyInput = class TodoCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoCreateManyInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TodoCreateManyInput.prototype, "checked", void 0);
TodoCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TodoCreateManyInput", {
        isAbstract: true
    })
], TodoCreateManyInput);
exports.TodoCreateManyInput = TodoCreateManyInput;
