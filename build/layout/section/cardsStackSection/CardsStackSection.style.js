"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCardsStackSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
exports.StyledCardsStackSection = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > * {\n    margin-bottom: ", ";\n  }\n  .kirk-cardItem {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"], ["\n  & > * {\n    margin-bottom: ", ";\n  }\n  .kirk-cardItem {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"])), branding_1.space.m, branding_1.horizontalSpace.global, branding_1.horizontalSpace.global);
var templateObject_1;
