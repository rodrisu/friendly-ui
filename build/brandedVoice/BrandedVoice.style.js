"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledContent = exports.StyledIcon = exports.StyledWrapper = exports.StyledBrandedVoice = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
exports.StyledBrandedVoice = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  background: ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n"], ["\n  ", ";\n  background: ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n"])), layoutNormalizer_1.normalizeHorizontally, branding_1.gradientColors.blueGradient, branding_1.space.l, branding_1.space.xl);
exports.StyledWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n\n  @media (", ") {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: ", ";\n  }\n"], ["\n  display: flex;\n\n  @media (", ") {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: ", ";\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge, branding_1.componentSizes.smallSectionWidth);
exports.StyledIcon = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: ", " ", " 0 0;\n"], ["\n  margin: ", " ", " 0 0;\n"])), branding_1.space.s, branding_1.space.s);
exports.StyledContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
