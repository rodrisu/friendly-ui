"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var baseStyles_1 = require("../../baseStyles");
var PriceSection_1 = require("./PriceSection");
var StyledPriceSection = (0, styled_components_1.default)(PriceSection_1.PriceSection)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    ", ";\n  }\n"], ["\n  & {\n    ", ";\n  }\n"])), baseStyles_1.sectionBaseStyle);
exports.PriceSection = StyledPriceSection;
var templateObject_1;
