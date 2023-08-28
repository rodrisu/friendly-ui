"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextTitle = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var index_1 = require("../index");
exports.TextTitle = (0, styled_components_1.default)(index_1.Text).attrs(function (props) { return props; })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"])), function (props) { return (props.isDisabled ? branding_1.color.gray : branding_1.color.midnightGreen); }, branding_1.font.m.size, branding_1.fontWeight.regular, branding_1.font.m.lineHeight);
var templateObject_1;
