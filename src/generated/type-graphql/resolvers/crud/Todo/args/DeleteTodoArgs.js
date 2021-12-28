"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
let DeleteTodoArgs = class DeleteTodoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TodoWhereUniqueInput_1.TodoWhereUniqueInput)
], DeleteTodoArgs.prototype, "where", void 0);
DeleteTodoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteTodoArgs);
exports.DeleteTodoArgs = DeleteTodoArgs;
