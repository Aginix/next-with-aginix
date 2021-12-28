"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TodoCreateInput = class TodoCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TodoCreateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TodoCreateInput.prototype, "checked", void 0);
TodoCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TodoCreateInput", {
        isAbstract: true
    })
], TodoCreateInput);
exports.TodoCreateInput = TodoCreateInput;
