"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoCreateInput_1 = require("../../../inputs/TodoCreateInput");
const TodoUpdateInput_1 = require("../../../inputs/TodoUpdateInput");
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
let UpsertTodoArgs = class UpsertTodoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TodoWhereUniqueInput_1.TodoWhereUniqueInput)
], UpsertTodoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoCreateInput_1.TodoCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TodoCreateInput_1.TodoCreateInput)
], UpsertTodoArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoUpdateInput_1.TodoUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TodoUpdateInput_1.TodoUpdateInput)
], UpsertTodoArgs.prototype, "update", void 0);
UpsertTodoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertTodoArgs);
exports.UpsertTodoArgs = UpsertTodoArgs;
