"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var baseStyles_1 = require("../../../searchForm/baseStyles");
var StepperSection_1 = require("./StepperSection");
var StyledStepperSection = (0, styled_components_1.default)(StepperSection_1.StepperSection)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    ", ";\n  }\n"], ["\n  & {\n    ", ";\n  }\n"])), baseStyles_1.sectionBaseStyle);
exports.StepperSection = StyledStepperSection;
var templateObject_1;
