"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTodoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateTodoArgs_1 = require("./args/AggregateTodoArgs");
const Todo_1 = require("../../../models/Todo");
const AggregateTodo_1 = require("../../outputs/AggregateTodo");
const helpers_1 = require("../../../helpers");
let AggregateTodoResolver = class AggregateTodoResolver {
    async aggregateTodo(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateTodoResolver.prototype, "aggregateTodo", null);
AggregateTodoResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Todo_1.Todo)
], AggregateTodoResolver);
exports.AggregateTodoResolver = AggregateTodoResolver;
