"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var baseStyles_1 = require("../../../searchForm/baseStyles");
var DatePickerSection_1 = require("./DatePickerSection");
var StyledDatePickerSection = (0, styled_components_1.default)(DatePickerSection_1.DatePickerSection)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    ", ";\n  }\n"], ["\n  & {\n    ", ";\n  }\n"])), baseStyles_1.sectionBaseStyle);
exports.DatePickerSection = StyledDatePickerSection;
var templateObject_1;
