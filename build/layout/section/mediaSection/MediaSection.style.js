"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledMediaSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
exports.StyledMediaSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (", ") {\n    padding-left: ", ";\n    padding-right: ", ";\n    margin-left: auto;\n    margin-right: auto;\n    max-width: ", ";\n  }\n"], ["\n  @media (", ") {\n    padding-left: ", ";\n    padding-right: ", ";\n    margin-left: auto;\n    margin-right: auto;\n    max-width: ", ";\n  }\n"])), branding_1.responsiveBreakpoints.isMediaLarge, branding_1.space.xl, branding_1.space.xl, branding_1.componentSizes.smallSectionWidth);
var templateObject_1;
