"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBaseSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
exports.StyledBaseSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .section-content {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n\n  & .section-content--noHorizontalSpacing {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  @media (", ") {\n    & .section-content {\n      margin-left: auto;\n      margin-right: auto;\n      max-width: ", ";\n    }\n\n    & .section-content.section-content--large {\n      max-width: ", ";\n    }\n  }\n"], ["\n  & .section-content {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n\n  & .section-content--noHorizontalSpacing {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  @media (", ") {\n    & .section-content {\n      margin-left: auto;\n      margin-right: auto;\n      max-width: ", ";\n    }\n\n    & .section-content.section-content--large {\n      max-width: ", ";\n    }\n  }\n"])), branding_1.horizontalSpace.global, branding_1.horizontalSpace.global, branding_1.responsiveBreakpoints.isMediaLarge, branding_1.componentSizes.smallSectionWidth, branding_1.componentSizes.largeSectionWidth);
var templateObject_1;
