"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
let FindUniqueTodoArgs = class FindUniqueTodoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TodoWhereUniqueInput_1.TodoWhereUniqueInput)
], FindUniqueTodoArgs.prototype, "where", void 0);
FindUniqueTodoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueTodoArgs);
exports.FindUniqueTodoArgs = FindUniqueTodoArgs;
