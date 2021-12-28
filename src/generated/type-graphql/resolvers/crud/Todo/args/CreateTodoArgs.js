"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoCreateInput_1 = require("../../../inputs/TodoCreateInput");
let CreateTodoArgs = class CreateTodoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoCreateInput_1.TodoCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TodoCreateInput_1.TodoCreateInput)
], CreateTodoArgs.prototype, "data", void 0);
CreateTodoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateTodoArgs);
exports.CreateTodoArgs = CreateTodoArgs;
