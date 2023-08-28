"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledReview = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
exports.StyledReview = styled_components_1.default.blockquote(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  margin: 0;\n\n  &.kirk-is-review-response .kirk-review-inner {\n    padding-left: ", ";\n  }\n\n  & .kirk-review-title {\n    margin: 0;\n  }\n"], ["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  margin: 0;\n\n  &.kirk-is-review-response .kirk-review-inner {\n    padding-left: ", ";\n  }\n\n  & .kirk-review-title {\n    margin: 0;\n  }\n"])), branding_1.space.m, branding_1.space.m, branding_1.space.xl);
var templateObject_1;
