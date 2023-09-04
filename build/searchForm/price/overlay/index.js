"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceOverlay = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var baseStyles_1 = require("../../baseStyles");
var PriceOverlay_1 = require("./PriceOverlay");
var StyledPriceOverlay = (0, styled_components_1.default)(PriceOverlay_1.PriceOverlay)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    ", "\n    position: absolute;\n  }\n"], ["\n  & {\n    ", "\n    position: absolute;\n  }\n"])), baseStyles_1.overlayBaseStyle);
exports.PriceOverlay = StyledPriceOverlay;
var templateObject_1;
