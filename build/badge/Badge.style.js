"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBadge = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
exports.StyledBadge = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: inline-block;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  text-align: center;\n  border-radius: 18px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  color: ", ";\n"], ["\n  box-sizing: border-box;\n  display: inline-block;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  text-align: center;\n  border-radius: 18px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  color: ", ";\n"])), branding_1.color.white, branding_1.color.red, branding_1.color.white);
var templateObject_1;
