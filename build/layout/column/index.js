"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var column_1 = require("./column");
var StyledColumn = (0, styled_components_1.default)(column_1.Column)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    flex: 1;\n    text-indent: 0;\n    margin: 0;\n    padding: 0;\n  }\n"], ["\n  & {\n    flex: 1;\n    text-indent: 0;\n    margin: 0;\n    padding: 0;\n  }\n"])));
exports.Column = StyledColumn;
var templateObject_1;
