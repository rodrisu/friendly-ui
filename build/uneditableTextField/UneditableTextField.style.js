"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledUneditableTextField = exports.StyledUneditableContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
var inputHeight = '54px';
exports.StyledUneditableContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), layoutNormalizer_1.normalizeHorizontally);
exports.StyledUneditableTextField = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & {\n    display: flex;\n    align-items: center;\n    min-height: ", ";\n    padding: 0 ", ";\n    background-color: ", ";\n    border-radius: ", ";\n    color: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    text-decoration: none;\n  }\n\n  & .kirk-uneditableTextField-label:not(:first-child) {\n    margin-left: ", ";\n  }\n\n  & .kirk-uneditableTextField-label--ellipsis {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  & .kirk-uneditableTextField-label--placeholder {\n    color: ", ";\n  }\n"], ["\n  & {\n    display: flex;\n    align-items: center;\n    min-height: ", ";\n    padding: 0 ", ";\n    background-color: ", ";\n    border-radius: ", ";\n    color: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    text-decoration: none;\n  }\n\n  & .kirk-uneditableTextField-label:not(:first-child) {\n    margin-left: ", ";\n  }\n\n  & .kirk-uneditableTextField-label--ellipsis {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  & .kirk-uneditableTextField-label--placeholder {\n    color: ", ";\n  }\n"])), inputHeight, branding_1.space.l, branding_1.color.lightGray, branding_1.radius.l, branding_1.color.midnightGreen, branding_1.font.base.size, inputHeight, branding_1.space.l, branding_1.color.lightMidnightGreen);
var templateObject_1, templateObject_2;
