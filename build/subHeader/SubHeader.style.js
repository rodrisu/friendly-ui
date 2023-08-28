"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSubHeader = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
var subHeaderStrong_1 = require("../typography/subHeaderStrong");
exports.StyledSubHeader = (0, styled_components_1.default)(subHeaderStrong_1.TextSubHeaderStrong)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n\n  padding-top: ", ";\n  padding-bottom: ", ";\n"], ["\n  ", ";\n\n  padding-top: ", ";\n  padding-bottom: ", ";\n"])), layoutNormalizer_1.normalizeHorizontally, branding_1.space.xl, branding_1.space.m);
var templateObject_1;
