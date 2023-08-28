"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLoader = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
exports.StyledLoader = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .visually-hidden {\n    position: absolute;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px);\n    white-space: nowrap;\n  }\n\n  &.kirk-loader--inline {\n    display: inline-block;\n  }\n\n  &.kirk-loader--fullScreen {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(255, 255, 255, 0.85);\n    height: 100vh;\n    width: 100vw;\n    z-index: 4;\n  }\n\n  &.kirk-loader--block {\n    display: block;\n    display: flex;\n    justify-content: center;\n    padding: 16px 0;\n  }\n\n  & .kirk-loader--done {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n    color: ", ";\n    border-radius: 50%;\n  }\n"], ["\n  & .visually-hidden {\n    position: absolute;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px);\n    white-space: nowrap;\n  }\n\n  &.kirk-loader--inline {\n    display: inline-block;\n  }\n\n  &.kirk-loader--fullScreen {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(255, 255, 255, 0.85);\n    height: 100vh;\n    width: 100vw;\n    z-index: 4;\n  }\n\n  &.kirk-loader--block {\n    display: block;\n    display: flex;\n    justify-content: center;\n    padding: 16px 0;\n  }\n\n  & .kirk-loader--done {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ", ";\n    color: ", ";\n    border-radius: 50%;\n  }\n"])), branding_1.color.green, branding_1.color.white);
var templateObject_1;
