"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBlaBlaCarDaily = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var itemAction_1 = require("../itemAction");
var body_1 = require("../typography/body");
var display1_1 = require("../typography/display1");
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), branding_1.color.blaBlaCarDailyBrand);
var StyledWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  padding: ", " ", ";\n\n  @media (", ") {\n    flex-direction: column;\n    padding-bottom: 0;\n  }\n"], ["\n  display: flex;\n  padding: ", " ", ";\n\n  @media (", ") {\n    flex-direction: column;\n    padding-bottom: 0;\n  }\n"])), branding_1.space.xxl, branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaSmall);
var StyledIllustration = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: center;\n  flex-shrink: 0;\n  width: 50%;\n  position: relative;\n\n  svg {\n    position: absolute;\n    bottom: -", ";\n    left: 0;\n    max-height: none;\n    object-fit: none;\n  }\n\n  @media (", ") {\n    width: 100%;\n    order: 1;\n\n    svg {\n      position: static;\n    }\n  }\n"], ["\n  text-align: center;\n  flex-shrink: 0;\n  width: 50%;\n  position: relative;\n\n  svg {\n    position: absolute;\n    bottom: -", ";\n    left: 0;\n    max-height: none;\n    object-fit: none;\n  }\n\n  @media (", ") {\n    width: 100%;\n    order: 1;\n\n    svg {\n      position: static;\n    }\n  }\n"])), branding_1.space.xxl, branding_1.responsiveBreakpoints.isMediaSmall);
var StyledContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var StyledTitle = (0, styled_components_1.default)(display1_1.TextDisplay1)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0 ", " ", ";\n  color: ", ";\n\n  @media (", ") {\n    padding: 0 0 ", " 0;\n  }\n"], ["\n  padding: 0 ", " ", ";\n  color: ", ";\n\n  @media (", ") {\n    padding: 0 0 ", " 0;\n  }\n"])), branding_1.space.xl, branding_1.space.xxl, branding_1.color.blaBlaCarDailyBrandText, branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xxl);
var StyledParagraph = (0, styled_components_1.default)(body_1.TextBody)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 0 ", " ", ";\n  color: ", ";\n\n  @media (", ") {\n    padding: 0 0 ", " 0;\n  }\n"], ["\n  padding: 0 ", " ", ";\n  color: ", ";\n\n  @media (", ") {\n    padding: 0 0 ", " 0;\n  }\n"])), branding_1.space.xl, branding_1.space.l, branding_1.color.blaBlaCarDailyBrandText, branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.l);
var StyledLink = (0, styled_components_1.default)(itemAction_1.ItemAction)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  // Can't override it otherwise...\n  &.kirk-item--highlighted {\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  &.kirk-item--highlighted .kirk-text-title {\n    color: ", ";\n  }\n\n  &.kirk-item--highlighted:hover {\n    background: none;\n  }\n\n  &.kirk-item--highlighted:hover .kirk-text-title {\n    color: ", ";\n  }\n\n  @media (", ") {\n    // To counter normalization which uses !important\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n"], ["\n  // Can't override it otherwise...\n  &.kirk-item--highlighted {\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  &.kirk-item--highlighted .kirk-text-title {\n    color: ", ";\n  }\n\n  &.kirk-item--highlighted:hover {\n    background: none;\n  }\n\n  &.kirk-item--highlighted:hover .kirk-text-title {\n    color: ", ";\n  }\n\n  @media (", ") {\n    // To counter normalization which uses !important\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n"])), branding_1.color.white, branding_1.color.blaBlaCarDailyBrandText, branding_1.responsiveBreakpoints.isMediaSmall);
exports.StyledBlaBlaCarDaily = {
    Container: StyledContainer,
    Wrapper: StyledWrapper,
    Illustration: StyledIllustration,
    Content: StyledContent,
    Title: StyledTitle,
    Paragraph: StyledParagraph,
    Link: StyledLink,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
