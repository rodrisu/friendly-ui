"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledVideoSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var layoutNormalizer_1 = require("../../../layout/layoutNormalizer");
var baseSection_1 = require("../../../layout/section/baseSection");
var display1_1 = require("../../../typography/display1");
var VIDEO_MAX_HEIGHT = '320px';
var StyledSection = (0, styled_components_1.default)(baseSection_1.BaseSection)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  & .section-content {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  @media (", ") {\n    padding: ", " 0;\n  }\n"], ["\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  & .section-content {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  @media (", ") {\n    padding: ", " 0;\n  }\n"])), branding_1.space.xl, branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaLarge, branding_1.space.xl);
var StyledTitle = (0, styled_components_1.default)(display1_1.TextDisplay1)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  margin-bottom: ", ";\n  text-align: center;\n  width: 100%;\n\n  @media (", ") {\n    text-align: left;\n  }\n"], ["\n  ", ";\n  margin-bottom: ", ";\n  text-align: center;\n  width: 100%;\n\n  @media (", ") {\n    text-align: left;\n  }\n"])), layoutNormalizer_1.normalizeHorizontally, branding_1.space.xxl, branding_1.responsiveBreakpoints.isMediaLarge);
var StyledVideoContainer = styled_components_1.default.video(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: #000;\n  border-radius: ", ";\n  width: calc(100% - ", ");\n  max-height: ", ";\n\n  @media (", ") {\n    & {\n      width: calc(50% - ", ");\n    }\n  }\n"], ["\n  background-color: #000;\n  border-radius: ", ";\n  width: calc(100% - ", ");\n  max-height: ", ";\n\n  @media (", ") {\n    & {\n      width: calc(50% - ", ");\n    }\n  }\n"])), branding_1.radius.l, branding_1.space.xxl, VIDEO_MAX_HEIGHT, branding_1.responsiveBreakpoints.isMediaLarge, branding_1.space.xl);
var StyledTextContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  @media (", ") {\n    & {\n      width: 50%;\n    }\n  }\n\n  @media (", ") {\n    padding-top: ", ";\n  }\n"], ["\n  @media (", ") {\n    & {\n      width: 50%;\n    }\n  }\n\n  @media (", ") {\n    padding-top: ", ";\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge, branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.l);
exports.StyledVideoSection = {
    Section: StyledSection,
    Title: StyledTitle,
    Video: StyledVideoContainer,
    Text: StyledTextContainer,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
