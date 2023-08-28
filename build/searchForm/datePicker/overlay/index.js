"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerOverlay = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var baseStyles_1 = require("../../../searchForm/baseStyles");
var DatePickerOverlay_1 = require("./DatePickerOverlay");
var StyledDatePickerOverlay = (0, styled_components_1.default)(DatePickerOverlay_1.DatePickerOverlay)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    ", ";\n  }\n\n  & .kirk-datePickerOverlay-datepicker {\n    margin-top: ", ";\n  }\n\n  & .DayPicker-Month {\n    margin-bottom: 0;\n  }\n"], ["\n  & {\n    ", ";\n  }\n\n  & .kirk-datePickerOverlay-datepicker {\n    margin-top: ", ";\n  }\n\n  & .DayPicker-Month {\n    margin-bottom: 0;\n  }\n"])), baseStyles_1.overlayBaseStyle, branding_1.space.l);
exports.DatePickerOverlay = StyledDatePickerOverlay;
var templateObject_1;
