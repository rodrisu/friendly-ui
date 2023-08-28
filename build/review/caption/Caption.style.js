"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCaption = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var button_1 = require("../../button");
var layoutNormalizer_1 = require("../../layout/layoutNormalizer");
exports.StyledCaption = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  ", ";\n\n  > * {\n    flex: 1 0 auto;\n  }\n\n  > * + * {\n    text-align: right;\n  }\n\n  ", " {\n    display: inline;\n  }\n"], ["\n  display: flex;\n  ", ";\n\n  > * {\n    flex: 1 0 auto;\n  }\n\n  > * + * {\n    text-align: right;\n  }\n\n  ", " {\n    display: inline;\n  }\n"])), layoutNormalizer_1.normalizeHorizontally, button_1.Button);
var templateObject_1;
