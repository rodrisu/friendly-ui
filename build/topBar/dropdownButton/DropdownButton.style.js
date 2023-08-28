"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledDropdownButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
exports.StyledDropdownButton = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  & > button {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: ", ";\n    background: none;\n    border: 0;\n    font-size: ", ";\n    cursor: pointer;\n  }\n\n  & .kirk-icon {\n    transition: transform ", " ease-out;\n  }\n\n  &.kirk-dropdownButton--open .kirk-icon {\n    transform: rotate(180deg);\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  & > button {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: ", ";\n    background: none;\n    border: 0;\n    font-size: ", ";\n    cursor: pointer;\n  }\n\n  & .kirk-icon {\n    transition: transform ", " ease-out;\n  }\n\n  &.kirk-dropdownButton--open .kirk-icon {\n    transform: rotate(180deg);\n  }\n"])), branding_1.color.blue, branding_1.font.base.size, branding_1.transition.duration.base);
var templateObject_1;
