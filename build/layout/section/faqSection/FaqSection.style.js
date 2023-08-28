"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledFaqSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var layoutNormalizer_1 = require("../../../layout/layoutNormalizer");
var baseSection_1 = require("../../../layout/section/baseSection");
var display1_1 = require("../../../typography/display1");
var titleStrong_1 = require("../../../typography/titleStrong");
var StyledSection = (0, styled_components_1.default)(baseSection_1.BaseSection)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  @media (", ") {\n    ul {\n      display: flex;\n      flex-wrap: wrap;\n    }\n\n    li {\n      min-width: 50%;\n      max-width: 50%;\n    }\n  }\n"], ["\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  @media (", ") {\n    ul {\n      display: flex;\n      flex-wrap: wrap;\n    }\n\n    li {\n      min-width: 50%;\n      max-width: 50%;\n    }\n  }\n"])), branding_1.space.xl, branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaLarge);
var StyledList = styled_components_1.default.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  @media (", ") {\n    display: flex;\n    flex-wrap: wrap;\n  }\n"], ["\n  @media (", ") {\n    display: flex;\n    flex-wrap: wrap;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge);
var StyledListItem = styled_components_1.default.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  @media (", ") {\n    min-width: 50%;\n    max-width: 50%;\n  }\n"], ["\n  @media (", ") {\n    min-width: 50%;\n    max-width: 50%;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge);
var StyledButtonWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: ", ";\n  text-align: center;\n"], ["\n  margin: ", ";\n  text-align: center;\n"])), branding_1.space.xl);
var StyledTitle = (0, styled_components_1.default)(display1_1.TextDisplay1)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  margin: ", " 0 ", ";\n  text-align: center;\n"], ["\n  ", ";\n  margin: ", " 0 ", ";\n  text-align: center;\n"])), layoutNormalizer_1.normalizeHorizontally, branding_1.space.xl, branding_1.space.xxl);
var StyledQuestion = (0, styled_components_1.default)(titleStrong_1.TextTitleStrong)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), layoutNormalizer_1.normalizeHorizontally);
exports.StyledFaqSection = {
    Section: StyledSection,
    List: StyledList,
    ListItem: StyledListItem,
    ButtonWrapper: StyledButtonWrapper,
    Title: StyledTitle,
    Question: StyledQuestion,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
