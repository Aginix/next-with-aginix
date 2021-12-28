"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TodoWhereUniqueInput = class TodoWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TodoWhereUniqueInput.prototype, "id", void 0);
TodoWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TodoWhereUniqueInput", {
        isAbstract: true
    })
], TodoWhereUniqueInput);
exports.TodoWhereUniqueInput = TodoWhereUniqueInput;
