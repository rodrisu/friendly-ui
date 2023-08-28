"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledQrCard = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var card_1 = require("../_internals/card");
var branding_1 = require("../_utils/branding");
var qrCardMaxWidth = '450px';
exports.StyledQrCard = (0, styled_components_1.default)(card_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .kirk-card {\n    display: block;\n    padding: ", ";\n    max-width: ", ";\n  }\n\n  & img {\n    width: 100%;\n    padding: ", " ", ";\n  }\n"], ["\n  & .kirk-card {\n    display: block;\n    padding: ", ";\n    max-width: ", ";\n  }\n\n  & img {\n    width: 100%;\n    padding: ", " ", ";\n  }\n"])), branding_1.space.none, qrCardMaxWidth, branding_1.space.m, branding_1.space.xl);
var templateObject_1;
