"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSlidePanel = exports.StyledSlideLayout = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
exports.StyledSlideLayout = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  border-bottom: 1px solid ", ";\n"], ["\n  position: relative;\n  overflow: hidden;\n  border-bottom: 1px solid ", ";\n"])), branding_1.color.gray);
exports.StyledSlidePanel = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  height: ", "px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  box-shadow: ", ";\n  transition: width ease 200ms;\n\n  &.expanded {\n    overflow: auto;\n  }\n\n  &.animated {\n    transition: transform ease 200ms;\n  }\n"], ["\n  background-color: ", ";\n  height: ", "px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  box-shadow: ", ";\n  transition: width ease 200ms;\n\n  &.expanded {\n    overflow: auto;\n  }\n\n  &.animated {\n    transition: transform ease 200ms;\n  }\n"])), branding_1.color.white, function (props) { return props.expandedHeight; }, branding_1.shadow.slideSection);
var templateObject_1, templateObject_2;
