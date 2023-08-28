"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var Text_1 = require("./Text");
var StyledText = (0, styled_components_1.default)(Text_1.Text).attrs(function (props) { return props; })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  white-space: pre-line;\n\n  & {\n    color: ", ";\n  }\n"], ["\n  white-space: pre-line;\n\n  & {\n    color: ", ";\n  }\n"])), function (props) { return (props.isInverted ? branding_1.color.white : ''); });
exports.Text = StyledText;
var templateObject_1;
