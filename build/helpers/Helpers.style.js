"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledHelpers = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var body_1 = require("../typography/body");
var display1_1 = require("../typography/display1");
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), branding_1.color.midnightGreen);
var StyledWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  padding: ", " ", ";\n\n  @media (", ") {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  padding: ", " ", ";\n\n  @media (", ") {\n    flex-direction: column;\n  }\n"])), branding_1.space.xxl, branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaSmall);
var StyledIllustration = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: center;\n  padding-left: ", ";\n\n  @media (", ") {\n    order: 0;\n    padding-left: 0;\n\n    img {\n      max-width: 100%;\n    }\n  }\n"], ["\n  text-align: center;\n  padding-left: ", ";\n\n  @media (", ") {\n    order: 0;\n    padding-left: 0;\n\n    img {\n      max-width: 100%;\n    }\n  }\n"])), branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaSmall);
var StyledContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n\n  @media (", ") {\n    order: 1;\n  }\n"], ["\n  flex-grow: 1;\n\n  @media (", ") {\n    order: 1;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall);
var StyledTitle = (0, styled_components_1.default)(display1_1.TextDisplay1).attrs({ as: 'h2' })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding-bottom: ", ";\n\n  @media (", ") {\n    padding-top: ", ";\n  }\n"], ["\n  padding-bottom: ", ";\n\n  @media (", ") {\n    padding-top: ", ";\n  }\n"])), branding_1.space.xxl, branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xxl);
var StyledParagraph = (0, styled_components_1.default)(body_1.TextBody).attrs({ as: 'p' })(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding-bottom: ", ";\n"], ["\n  padding-bottom: ", ";\n"])), branding_1.space.xl);
exports.StyledHelpers = {
    Container: StyledContainer,
    Wrapper: StyledWrapper,
    Illustration: StyledIllustration,
    Content: StyledContent,
    Title: StyledTitle,
    Paragraph: StyledParagraph,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
