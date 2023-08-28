"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextTitleStrong = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var title_1 = require("../title");
exports.TextTitleStrong = (0, styled_components_1.default)(title_1.TextTitle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: ", ";\n"], ["\n  font-weight: ", ";\n"])), branding_1.fontWeight.medium);
var templateObject_1;