"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledIllustratedSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
exports.StyledIllustratedSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .section-content {\n    display: flex;\n    flex-direction: column;\n  }\n\n  & .kirk-illustratedSection-illustration {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  & .kirk-illustratedSection-illustration img {\n    max-width: 100%;\n  }\n\n  @media (", ") {\n    & .section-content {\n      flex-direction: row;\n    }\n\n    & .kirk-illustratedSection-illustration {\n      margin-left: 0;\n      margin-right: 0;\n      width: 33.33%;\n      padding-top: ", ";\n    }\n\n    & .kirk-illustratedSection-content {\n      margin-left: ", ";\n      width: 66.66%;\n    }\n  }\n"], ["\n  & .section-content {\n    display: flex;\n    flex-direction: column;\n  }\n\n  & .kirk-illustratedSection-illustration {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  & .kirk-illustratedSection-illustration img {\n    max-width: 100%;\n  }\n\n  @media (", ") {\n    & .section-content {\n      flex-direction: row;\n    }\n\n    & .kirk-illustratedSection-illustration {\n      margin-left: 0;\n      margin-right: 0;\n      width: 33.33%;\n      padding-top: ", ";\n    }\n\n    & .kirk-illustratedSection-content {\n      margin-left: ", ";\n      width: 66.66%;\n    }\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge, branding_1.space.xl, branding_1.space.xl);
var templateObject_1;
