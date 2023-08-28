"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperOverlay = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var baseStyles_1 = require("../../../searchForm/baseStyles");
var StepperOverlay_1 = require("./StepperOverlay");
var StyledStepperOverlay = (0, styled_components_1.default)(StepperOverlay_1.StepperOverlay)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    ", "\n    position: absolute;\n  }\n"], ["\n  & {\n    ", "\n    position: absolute;\n  }\n"])), baseStyles_1.overlayBaseStyle);
exports.StepperOverlay = StyledStepperOverlay;
var templateObject_1;
