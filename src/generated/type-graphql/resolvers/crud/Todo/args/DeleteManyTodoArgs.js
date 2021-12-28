"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoWhereInput_1 = require("../../../inputs/TodoWhereInput");
let DeleteManyTodoArgs = class DeleteManyTodoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoWhereInput_1.TodoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoWhereInput_1.TodoWhereInput)
], DeleteManyTodoArgs.prototype, "where", void 0);
DeleteManyTodoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyTodoArgs);
exports.DeleteManyTodoArgs = DeleteManyTodoArgs;
