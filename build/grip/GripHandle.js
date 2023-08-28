"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GripHandle = exports.GRIP_HANDLE_HEIGHT = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
exports.GRIP_HANDLE_HEIGHT = parseInt(branding_1.space.xl, 10);
exports.GripHandle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ", ";\n\n  &::before {\n    content: ' ';\n    display: block;\n    width: 44px;\n    height: ", ";\n    background-color: ", ";\n    border-radius: 100px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ", ";\n\n  &::before {\n    content: ' ';\n    display: block;\n    width: 44px;\n    height: ", ";\n    background-color: ", ";\n    border-radius: 100px;\n  }\n"])), branding_1.space.xl, branding_1.space.s, branding_1.color.gray);
var templateObject_1;
