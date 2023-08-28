"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSpecialOfferButton = exports.StyledSpecialOfferButtons = exports.StyledSpecialOfferText = exports.StyledSpecialOfferFigure = exports.StyledSpecialOfferContent = exports.StyledSpecialOffer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
exports.StyledSpecialOffer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", ";\n  align-items: center;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", ";\n  align-items: center;\n"])), branding_1.space.m);
exports.StyledSpecialOfferContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  align-items: flex-start;\n  min-width: 100%;\n\n  @media (", ") {\n    min-width: auto;\n  }\n"], ["\n  flex: 1;\n  align-items: flex-start;\n  min-width: 100%;\n\n  @media (", ") {\n    min-width: auto;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge);
exports.StyledSpecialOfferFigure = styled_components_1.default.figure(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n\n  ", "\n\n  & > img {\n    display: block;\n    width: 100%;\n    max-width: 300px;\n  }\n"], ["\n  padding-top: ", ";\n  padding-bottom: ", ";\n\n  ", "\n\n  & > img {\n    display: block;\n    width: 100%;\n    max-width: 300px;\n  }\n"])), branding_1.space.xl, branding_1.space.m, layoutNormalizer_1.normalizeHorizontally);
exports.StyledSpecialOfferText = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: ", ";\n"], ["\n  margin-bottom: ", ";\n"])), branding_1.space.xl);
exports.StyledSpecialOfferButtons = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  @media (", ") {\n    text-align: center;\n  }\n"], ["\n  @media (", ") {\n    text-align: center;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall);
exports.StyledSpecialOfferButton = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 0 ", " ", " ", ";\n\n  @media (", ") {\n    display: inline-block;\n  }\n"], ["\n  margin: 0 ", " ", " ", ";\n\n  @media (", ") {\n    display: inline-block;\n  }\n"])), branding_1.space.m, branding_1.space.m, branding_1.space.m, branding_1.responsiveBreakpoints.isMediaLarge);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
