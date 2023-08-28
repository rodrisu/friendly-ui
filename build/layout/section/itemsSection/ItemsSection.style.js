"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledItemsSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var baseSection_1 = require("../../../layout/section/baseSection");
exports.StyledItemsSection = (0, styled_components_1.default)(baseSection_1.BaseSection)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .kirk-items-section-content {\n    display: flex;\n  }\n"], ["\n  & .kirk-items-section-content {\n    display: flex;\n  }\n"])));
var templateObject_1;
