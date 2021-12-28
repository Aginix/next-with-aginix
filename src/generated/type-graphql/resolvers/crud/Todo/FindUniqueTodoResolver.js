"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTodoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueTodoArgs_1 = require("./args/FindUniqueTodoArgs");
const Todo_1 = require("../../../models/Todo");
const helpers_1 = require("../../../helpers");
let FindUniqueTodoResolver = class FindUniqueTodoResolver {
    async todo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], FindUniqueTodoResolver.prototype, "todo", null);
FindUniqueTodoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Todo_1.Todo)
], FindUniqueTodoResolver);
exports.FindUniqueTodoResolver = FindUniqueTodoResolver;
