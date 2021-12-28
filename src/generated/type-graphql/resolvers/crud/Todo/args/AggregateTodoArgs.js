"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TodoOrderByWithRelationInput_1 = require("../../../inputs/TodoOrderByWithRelationInput");
const TodoWhereInput_1 = require("../../../inputs/TodoWhereInput");
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
let AggregateTodoArgs = class AggregateTodoArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoWhereInput_1.TodoWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoWhereInput_1.TodoWhereInput)
], AggregateTodoArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TodoOrderByWithRelationInput_1.TodoOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateTodoArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TodoWhereUniqueInput_1.TodoWhereUniqueInput)
], AggregateTodoArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateTodoArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateTodoArgs.prototype, "skip", void 0);
AggregateTodoArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateTodoArgs);
exports.AggregateTodoArgs = AggregateTodoArgs;
