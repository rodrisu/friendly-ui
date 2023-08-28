"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledMediaContentSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var body_1 = require("../../../typography/body");
var display1_1 = require("../../../typography/display1");
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: ", ";\n  margin-bottom: ", ";\n"], ["\n  margin-top: ", ";\n  margin-bottom: ", ";\n"])), branding_1.space.xl, branding_1.space.xl);
var StyledMedia = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-height: 320px;\n  margin-right: ", ";\n\n  img {\n    border-radius: ", ";\n    width: 100%;\n  }\n\n  @media (", ") {\n    min-height: 0;\n    margin-left: -", ";\n    margin-right: -", ";\n\n    img {\n      border-radius: 0;\n    }\n  }\n"], ["\n  min-height: 320px;\n  margin-right: ", ";\n\n  img {\n    border-radius: ", ";\n    width: 100%;\n  }\n\n  @media (", ") {\n    min-height: 0;\n    margin-left: -", ";\n    margin-right: -", ";\n\n    img {\n      border-radius: 0;\n    }\n  }\n"])), branding_1.space.xl, branding_1.radius.s, branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xl, branding_1.space.xl);
var StyledContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (", ") {\n    align-items: center;\n  }\n"], ["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (", ") {\n    align-items: center;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall);
var StyledTitle = (0, styled_components_1.default)(display1_1.TextDisplay1)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: ", ";\n\n  @media (", ") {\n    margin-top: ", ";\n  }\n"], ["\n  margin-bottom: ", ";\n\n  @media (", ") {\n    margin-top: ", ";\n  }\n"])), branding_1.space.m, branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xl);
var StyledParagraph = (0, styled_components_1.default)(body_1.TextBody)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: ", ";\n"], ["\n  margin-bottom: ", ";\n"])), branding_1.space.l);
exports.StyledMediaContentSection = {
    Container: StyledContainer,
    Media: StyledMedia,
    Content: StyledContent,
    Title: StyledTitle,
    Paragraph: StyledParagraph,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
