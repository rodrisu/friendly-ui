"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWrapper = exports.StyledParagraph = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
exports.StyledParagraph = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: ", " 0;\n  word-break: break-word;\n  ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: ", " 0;\n  word-break: break-word;\n  ", ";\n"])), branding_1.space.m, layoutNormalizer_1.normalizeHorizontally);
exports.ButtonWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: ", ";\n  text-align: right;\n\n  & > .kirk-button {\n    display: inline-block;\n  }\n"], ["\n  margin-top: ", ";\n  text-align: right;\n\n  & > .kirk-button {\n    display: inline-block;\n  }\n"])), branding_1.space.m);
var templateObject_1, templateObject_2;
