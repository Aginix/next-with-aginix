"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var TodoScalarFieldEnum;
(function (TodoScalarFieldEnum) {
    TodoScalarFieldEnum["id"] = "id";
    TodoScalarFieldEnum["title"] = "title";
    TodoScalarFieldEnum["checked"] = "checked";
})(TodoScalarFieldEnum = exports.TodoScalarFieldEnum || (exports.TodoScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TodoScalarFieldEnum, {
    name: "TodoScalarFieldEnum",
    description: undefined,
});
