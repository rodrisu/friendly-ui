"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledOption = exports.StyledOptionList = exports.StyledRatingLabel = exports.StyledSubInfo = exports.StyledProfileLeft = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var item_1 = require("../_internals/item");
var branding_1 = require("../_utils/branding");
var layoutNormalizer_1 = require("../layout/layoutNormalizer");
exports.StyledProfileLeft = (0, styled_components_1.default)(item_1.Item)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), layoutNormalizer_1.normalizeHorizontally);
exports.StyledSubInfo = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  margin-top: ", ";\n"], ["\n  display: flex;\n  margin-top: ", ";\n"])), branding_1.space.s);
exports.StyledRatingLabel = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: ", ";\n"], ["\n  margin-left: ", ";\n"])), branding_1.space.m);
exports.StyledOptionList = styled_components_1.default.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  margin-left: ", ";\n"], ["\n  color: ", ";\n  margin-left: ", ";\n"])), branding_1.color.lightMidnightGreen, branding_1.space.m);
exports.StyledOption = styled_components_1.default.li(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-block;\n  margin-left: ", ";\n"], ["\n  display: inline-block;\n  margin-left: ", ";\n"])), branding_1.space.m);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
