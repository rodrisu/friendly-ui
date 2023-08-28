"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledMarketingMessage = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
exports.StyledMarketingMessage = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  border: 1px solid ", ";\n  margin: 0 0 0 ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  border-top-left-radius: 0;\n"], ["\n  margin: 0;\n  border: 1px solid ", ";\n  margin: 0 0 0 ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  border-top-left-radius: 0;\n"])), branding_1.color.lightGray, branding_1.space.xxl, branding_1.space.m, branding_1.space.l, branding_1.radius.l);
var templateObject_1;
