"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledPriceSimulator = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var caption_1 = require("../typography/caption");
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  padding-bottom: ", ";\n\n  @media (", ") {\n    padding-top: ", ";\n  }\n"], ["\n  background-color: ", ";\n  padding-bottom: ", ";\n\n  @media (", ") {\n    padding-top: ", ";\n  }\n"])), branding_1.color.lightBlue, branding_1.space.xxl, branding_1.responsiveBreakpoints.isMediaLarge, branding_1.space.xl);
var StyledColumns = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n\n  @media (", ") {\n    flex-direction: column;\n    padding: 0 ", ";\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n\n  @media (", ") {\n    flex-direction: column;\n    padding: 0 ", ";\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xl);
var StyledSearchForm = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 360px;\n  flex-shrink: 0;\n\n  @media (", ") {\n    width: 100%;\n  }\n"], ["\n  width: 360px;\n  flex-shrink: 0;\n\n  @media (", ") {\n    width: 100%;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall);
var StyledIllustration = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 400px;\n  text-align: center;\n\n  img {\n    margin: 0 auto;\n  }\n\n  ", ";\n\n  @media (", ") {\n    width: 100%;\n    margin-top: ", ";\n\n    img {\n      max-width: 100%;\n    }\n  }\n"], ["\n  width: 400px;\n  text-align: center;\n\n  img {\n    margin: 0 auto;\n  }\n\n  ", ";\n\n  @media (", ") {\n    width: 100%;\n    margin-top: ", ";\n\n    img {\n      max-width: 100%;\n    }\n  }\n"])), function (props) {
    return props.hasDefaultIllustration &&
        "\n    position: relative;\n    width: 100%;\n\n    svg {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      max-height: none;\n\n      @media (".concat(branding_1.responsiveBreakpoints.isMediaSmall, ") {\n        position: static;\n      }\n    }\n  ");
}, branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xl);
var StyledCaption = (0, styled_components_1.default)(caption_1.TextCaption)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  margin-top: ", ";\n  text-align: left;\n\n  &:before {\n    display: inline;\n    content: '*';\n  }\n"], ["\n  display: block;\n  margin-top: ", ";\n  text-align: left;\n\n  &:before {\n    display: inline;\n    content: '*';\n  }\n"])), branding_1.space.xl);
exports.StyledPriceSimulator = {
    Container: StyledContainer,
    Columns: StyledColumns,
    Form: StyledSearchForm,
    Illustration: StyledIllustration,
    Caption: StyledCaption,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
