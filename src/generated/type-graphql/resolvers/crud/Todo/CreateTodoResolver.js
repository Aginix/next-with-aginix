"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateTodoArgs_1 = require("./args/CreateTodoArgs");
const Todo_1 = require("../../../models/Todo");
const helpers_1 = require("../../../helpers");
let CreateTodoResolver = class CreateTodoResolver {
    async createTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateTodoResolver.prototype, "createTodo", null);
CreateTodoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Todo_1.Todo)
], CreateTodoResolver);
exports.CreateTodoResolver = CreateTodoResolver;
