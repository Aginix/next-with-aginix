"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoUpdateInput_1 = require("../../../inputs/TodoUpdateInput");
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
let UpdateTodoArgs = class UpdateTodoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoUpdateInput_1.TodoUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TodoUpdateInput_1.TodoUpdateInput)
], UpdateTodoArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TodoWhereUniqueInput_1.TodoWhereUniqueInput)
], UpdateTodoArgs.prototype, "where", void 0);
UpdateTodoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateTodoArgs);
exports.UpdateTodoArgs = UpdateTodoArgs;
