"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let TodoUpdateManyMutationInput = class TodoUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TodoUpdateManyMutationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TodoUpdateManyMutationInput.prototype, "checked", void 0);
TodoUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TodoUpdateManyMutationInput", {
        isAbstract: true
    })
], TodoUpdateManyMutationInput);
exports.TodoUpdateManyMutationInput = TodoUpdateManyMutationInput;
