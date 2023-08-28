"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCountsCard = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var card_1 = require("../_internals/card");
var branding_1 = require("../_utils/branding");
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: ", " 0;\n\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 50%;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: ", ";\n    z-index: 1;\n  }\n\n  @media (", ") {\n    padding: ", ";\n\n    &::after {\n      top: 66%;\n    }\n  }\n"], ["\n  position: relative;\n  padding: ", " 0;\n\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 50%;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: ", ";\n    z-index: 1;\n  }\n\n  @media (", ") {\n    padding: ", ";\n\n    &::after {\n      top: 66%;\n    }\n  }\n"])), branding_1.space.xl, branding_1.color.midnightGreen, branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xl);
var StyledCard = (0, styled_components_1.default)(card_1.Card)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  z-index: 2;\n\n  @media (", ") {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  position: relative;\n  z-index: 2;\n\n  @media (", ") {\n    flex-direction: column;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall);
var StyledItem = styled_components_1.default.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  padding: ", ";\n\n  & > * {\n    display: block;\n  }\n"], ["\n  flex: 1;\n  padding: ", ";\n\n  & > * {\n    display: block;\n  }\n"])), branding_1.space.xl);
exports.StyledCountsCard = {
    Container: StyledContainer,
    Card: StyledCard,
    Item: StyledItem,
};
var templateObject_1, templateObject_2, templateObject_3;
