"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledRating = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
exports.StyledRating = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  & span {\n    color: ", ";\n    margin-left: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  & span {\n    color: ", ";\n    margin-left: ", ";\n  }\n"])), branding_1.color.lightMidnightGreen, branding_1.space.s);
var templateObject_1;
