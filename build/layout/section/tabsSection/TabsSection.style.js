"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTabsSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
exports.StyledTabsSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (", ") {\n    & .kirk-tablist-wrapper {\n      width: calc(", " - 2 * ", ");\n      margin: 0 auto;\n    }\n  }\n"], ["\n  @media (", ") {\n    & .kirk-tablist-wrapper {\n      width: calc(", " - 2 * ", ");\n      margin: 0 auto;\n    }\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge, branding_1.componentSizes.smallSectionWidth, branding_1.space.xl);
var templateObject_1;
