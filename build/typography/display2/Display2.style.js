"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDisplay2 = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var index_1 = require("../index");
exports.TextDisplay2 = (0, styled_components_1.default)(index_1.Text)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n"], ["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n"])), branding_1.color.midnightGreen, branding_1.font.xxl.size, branding_1.font.xxl.lineHeight, branding_1.fontWeight.medium);
var templateObject_1;
