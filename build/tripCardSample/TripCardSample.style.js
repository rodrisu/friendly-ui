"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledPriceTextSubHeaderStrong = exports.StyledPriceTextBody = exports.StyledPriceBlock = exports.StyledTripCardSample = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var body_1 = require("../typography/body");
var subHeaderStrong_1 = require("../typography/subHeaderStrong");
exports.StyledTripCardSample = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-wrap: wrap;\n"])));
exports.StyledPriceBlock = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0 0 ", " ", ";\n  text-align: right;\n"], ["\n  margin: 0 0 ", " ", ";\n  text-align: right;\n"])), branding_1.space.xl, branding_1.space.m);
exports.StyledPriceTextBody = (0, styled_components_1.default)(body_1.TextBody)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
exports.StyledPriceTextSubHeaderStrong = (0, styled_components_1.default)(subHeaderStrong_1.TextSubHeaderStrong)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n"], ["\n  display: block;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
