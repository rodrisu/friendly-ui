"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledConnection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var caption_1 = require("../typography/caption");
exports.StyledConnection = (0, styled_components_1.default)(caption_1.TextCaption)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", " 0;\n  color: ", ";\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-right: ", ";\n  }\n"], ["\n  padding: ", " 0;\n  color: ", ";\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-right: ", ";\n  }\n"])), branding_1.space.l, branding_1.color.lightMidnightGreen, branding_1.space.s);
var templateObject_1;
