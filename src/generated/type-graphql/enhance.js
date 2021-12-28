"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = (0, tslib_1.__importStar)(require("tslib"));
const crudResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = (0, tslib_1.__importStar)(require("./resolvers/crud/args.index"));
const actionResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-actions.index"));
const models = (0, tslib_1.__importStar)(require("./models"));
const outputTypes = (0, tslib_1.__importStar)(require("./resolvers/outputs"));
const inputTypes = (0, tslib_1.__importStar)(require("./resolvers/inputs"));
const crudResolversMap = {
    Todo: crudResolvers.TodoCrudResolver
};
const actionResolversMap = {
    Todo: {
        todo: actionResolvers.FindUniqueTodoResolver,
        findFirstTodo: actionResolvers.FindFirstTodoResolver,
        todos: actionResolvers.FindManyTodoResolver,
        createTodo: actionResolvers.CreateTodoResolver,
        createManyTodo: actionResolvers.CreateManyTodoResolver,
        deleteTodo: actionResolvers.DeleteTodoResolver,
        updateTodo: actionResolvers.UpdateTodoResolver,
        deleteManyTodo: actionResolvers.DeleteManyTodoResolver,
        updateManyTodo: actionResolvers.UpdateManyTodoResolver,
        upsertTodo: actionResolvers.UpsertTodoResolver,
        aggregateTodo: actionResolvers.AggregateTodoResolver,
        groupByTodo: actionResolvers.GroupByTodoResolver
    }
};
const crudResolversInfo = {
    Todo: ["todo", "findFirstTodo", "todos", "createTodo", "createManyTodo", "deleteTodo", "updateTodo", "deleteManyTodo", "updateManyTodo", "upsertTodo", "aggregateTodo", "groupByTodo"]
};
const argsInfo = {
    FindUniqueTodoArgs: ["where"],
    FindFirstTodoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTodoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateTodoArgs: ["data"],
    CreateManyTodoArgs: ["data", "skipDuplicates"],
    DeleteTodoArgs: ["where"],
    UpdateTodoArgs: ["data", "where"],
    DeleteManyTodoArgs: ["where"],
    UpdateManyTodoArgs: ["data", "where"],
    UpsertTodoArgs: ["where", "create", "update"],
    AggregateTodoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByTodoArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, void 0);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, void 0);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, void 0);
            tslib.__decorate(decorators, actionTarget, resolverActionName, void 0);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName);
        }
    }
}
const modelsInfo = {
    Todo: ["id", "title", "checked"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateTodo: ["_count", "_avg", "_sum", "_min", "_max"],
    TodoGroupBy: ["id", "title", "checked", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    TodoCountAggregate: ["id", "title", "checked", "_all"],
    TodoAvgAggregate: ["id"],
    TodoSumAggregate: ["id"],
    TodoMinAggregate: ["id", "title", "checked"],
    TodoMaxAggregate: ["id", "title", "checked"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    TodoWhereInput: ["AND", "OR", "NOT", "id", "title", "checked"],
    TodoOrderByWithRelationInput: ["id", "title", "checked"],
    TodoWhereUniqueInput: ["id"],
    TodoOrderByWithAggregationInput: ["id", "title", "checked", "_count", "_avg", "_max", "_min", "_sum"],
    TodoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "checked"],
    TodoCreateInput: ["title", "checked"],
    TodoUpdateInput: ["title", "checked"],
    TodoCreateManyInput: ["id", "title", "checked"],
    TodoUpdateManyMutationInput: ["title", "checked"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    BoolFilter: ["equals", "not"],
    TodoCountOrderByAggregateInput: ["id", "title", "checked"],
    TodoAvgOrderByAggregateInput: ["id"],
    TodoMaxOrderByAggregateInput: ["id", "title", "checked"],
    TodoMinOrderByAggregateInput: ["id", "title", "checked"],
    TodoSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
