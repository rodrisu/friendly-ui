"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRadioCheckbox = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var index_1 = require("./index");
exports.ItemRadioCheckbox = (0, styled_components_1.default)(index_1.Item)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    cursor: ", ";\n    border: ", " solid transparent;\n  }\n\n  &.focus-visible {\n    outline: ", " solid ", ";\n  }\n\n  & input {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n  }\n"], ["\n  & {\n    cursor: ", ";\n    border: ", " solid transparent;\n  }\n\n  &.focus-visible {\n    outline: ", " solid ", ";\n  }\n\n  & input {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n  }\n"])), function (props) { return (props.disabled ? 'default' : 'pointer'); }, branding_1.inputBorderSize.focus, branding_1.inputBorderSize.focus, branding_1.color.blue);
var templateObject_1;
