"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.crudResolvers = void 0;
const tslib_1 = require("tslib");
const crudResolversImport = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
(0, tslib_1.__exportStar)(require("./enums"), exports);
(0, tslib_1.__exportStar)(require("./models"), exports);
(0, tslib_1.__exportStar)(require("./resolvers/crud"), exports);
exports.crudResolvers = Object.values(crudResolversImport);
(0, tslib_1.__exportStar)(require("./resolvers/inputs"), exports);
(0, tslib_1.__exportStar)(require("./resolvers/outputs"), exports);
(0, tslib_1.__exportStar)(require("./enhance"), exports);
(0, tslib_1.__exportStar)(require("./scalars"), exports);
exports.resolvers = [
    ...exports.crudResolvers,
];
