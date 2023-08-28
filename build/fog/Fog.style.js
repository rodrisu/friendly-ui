"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledFog = exports.StyledFogContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
exports.StyledFogContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var transitionDelay = '420ms';
var transitionTimingFunction = 'ease-in-out';
exports.StyledFog = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  background: ", ";\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: ", ";\n  visibility: ", ";\n  transition: opacity ", " ", ",\n    visibility ", " ", ";\n"], ["\n  position: absolute;\n  background: ", ";\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: ", ";\n  visibility: ", ";\n  transition: opacity ", " ", ",\n    visibility ", " ", ";\n"])), branding_1.color.white, function (props) { return (props.$isLoading ? 0.64 : 0); }, function (props) { return (props.$isLoading ? '' : 'hidden'); }, transitionDelay, transitionTimingFunction, transitionDelay, transitionTimingFunction);
var templateObject_1, templateObject_2;
