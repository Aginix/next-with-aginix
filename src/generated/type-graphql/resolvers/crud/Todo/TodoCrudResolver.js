"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateTodoArgs_1 = require("./args/AggregateTodoArgs");
const CreateManyTodoArgs_1 = require("./args/CreateManyTodoArgs");
const CreateTodoArgs_1 = require("./args/CreateTodoArgs");
const DeleteManyTodoArgs_1 = require("./args/DeleteManyTodoArgs");
const DeleteTodoArgs_1 = require("./args/DeleteTodoArgs");
const FindFirstTodoArgs_1 = require("./args/FindFirstTodoArgs");
const FindManyTodoArgs_1 = require("./args/FindManyTodoArgs");
const FindUniqueTodoArgs_1 = require("./args/FindUniqueTodoArgs");
const GroupByTodoArgs_1 = require("./args/GroupByTodoArgs");
const UpdateManyTodoArgs_1 = require("./args/UpdateManyTodoArgs");
const UpdateTodoArgs_1 = require("./args/UpdateTodoArgs");
const UpsertTodoArgs_1 = require("./args/UpsertTodoArgs");
const helpers_1 = require("../../../helpers");
const Todo_1 = require("../../../models/Todo");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTodo_1 = require("../../outputs/AggregateTodo");
const TodoGroupBy_1 = require("../../outputs/TodoGroupBy");
let TodoCrudResolver = class TodoCrudResolver {
    async todo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async todos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTodo(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTodo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Todo_1.Todo, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueTodoArgs_1.FindUniqueTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "todo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Todo_1.Todo, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstTodoArgs_1.FindFirstTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "findFirstTodo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Todo_1.Todo], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyTodoArgs_1.FindManyTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "todos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateTodoArgs_1.CreateTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "createTodo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyTodoArgs_1.CreateManyTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "createManyTodo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteTodoArgs_1.DeleteTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "deleteTodo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateTodoArgs_1.UpdateTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "updateTodo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyTodoArgs_1.DeleteManyTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "deleteManyTodo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyTodoArgs_1.UpdateManyTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "updateManyTodo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertTodoArgs_1.UpsertTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "upsertTodo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateTodo_1.AggregateTodo, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateTodoArgs_1.AggregateTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "aggregateTodo", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [TodoGroupBy_1.TodoGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByTodoArgs_1.GroupByTodoArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TodoCrudResolver.prototype, "groupByTodo", null);
TodoCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Todo_1.Todo)
], TodoCrudResolver);
exports.TodoCrudResolver = TodoCrudResolver;
