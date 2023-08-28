"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledWhy = exports.StyledWhyWrapper = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
exports.StyledWhyWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), layoutNormalizer_1.normalizeHorizontally);
exports.StyledWhy = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", " ", " ", " ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  display: inline-flex;\n  align-items: center;\n  font-size: ", ";\n  cursor: pointer;\n  color: ", ";\n  background-color: ", ";\n  -webkit-tap-highlight-color: ", ";\n  max-width: 100%;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  :focus:not(.focus-visible) {\n    outline: none;\n  }\n\n  /* Reset hover styles on devices not supporting hover state (e.g. touch devices). */\n  @media (hover: none), (hover: on-demand) {\n    &:hover {\n      background-color: ", ";\n    }\n  }\n\n  & > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-left: ", ";\n  }\n"], ["\n  padding: ", " ", " ", " ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  display: inline-flex;\n  align-items: center;\n  font-size: ", ";\n  cursor: pointer;\n  color: ", ";\n  background-color: ", ";\n  -webkit-tap-highlight-color: ", ";\n  max-width: 100%;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  :focus:not(.focus-visible) {\n    outline: none;\n  }\n\n  /* Reset hover styles on devices not supporting hover state (e.g. touch devices). */\n  @media (hover: none), (hover: on-demand) {\n    &:hover {\n      background-color: ", ";\n    }\n  }\n\n  & > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-left: ", ";\n  }\n"])), branding_1.space.m, branding_1.space.l, branding_1.space.m, branding_1.space.m, branding_1.color.gray, branding_1.radius.xl, branding_1.font.base.size, branding_1.color.lightMidnightGreen, branding_1.color.white, branding_1.color.tapHighlight, branding_1.color.lightGray, branding_1.color.white, branding_1.space.m);
var templateObject_1, templateObject_2;
