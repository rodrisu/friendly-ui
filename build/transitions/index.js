"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transitions = exports.AnimationType = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var Transitions_1 = require("./Transitions");
var StyledTransitions = (0, styled_components_1.default)(Transitions_1.Transitions)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.fade {\n    transition: ease-in-out ", ";\n    transition-property: opacity;\n  }\n\n  &.fade-entering {\n    opacity: 0;\n  }\n\n  &.fade-entered {\n    opacity: 1;\n  }\n\n  &.fade-exiting {\n    opacity: 0;\n  }\n\n  &.slide-up {\n    transition: ease-in-out ", ";\n    transition-property: opacity, transform;\n  }\n\n  &.slide-up-entering {\n    opacity: 0;\n    transform: translateY(50%);\n  }\n\n  &.slide-up-entered {\n    opacity: 1;\n  }\n\n  &.slide-up-exiting {\n    opacity: 0;\n    transform: translateY(50%);\n  }\n"], ["\n  &.fade {\n    transition: ease-in-out ", ";\n    transition-property: opacity;\n  }\n\n  &.fade-entering {\n    opacity: 0;\n  }\n\n  &.fade-entered {\n    opacity: 1;\n  }\n\n  &.fade-exiting {\n    opacity: 0;\n  }\n\n  &.slide-up {\n    transition: ease-in-out ", ";\n    transition-property: opacity, transform;\n  }\n\n  &.slide-up-entering {\n    opacity: 0;\n    transform: translateY(50%);\n  }\n\n  &.slide-up-entered {\n    opacity: 1;\n  }\n\n  &.slide-up-exiting {\n    opacity: 0;\n    transform: translateY(50%);\n  }\n"])), branding_1.transition.duration.base, branding_1.transition.duration.base);
exports.Transitions = StyledTransitions;
var Transitions_2 = require("./Transitions");
Object.defineProperty(exports, "AnimationType", { enumerable: true, get: function () { return Transitions_2.AnimationType; } });
var templateObject_1;
