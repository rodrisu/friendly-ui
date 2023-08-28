"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIcon = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../branding");
var BaseIcon_1 = require("./BaseIcon");
var StyledBaseIcon = (0, styled_components_1.default)(BaseIcon_1.BaseIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fill: ", ";\n\n  &,\n  & rect,\n  & circle,\n  & line,\n  & polyline,\n  & path,\n  & g {\n    stroke: ", ";\n  }\n\n  &.kirk-icon-wrapper {\n    display: inline-block;\n    position: relative;\n  }\n\n  &.kirk-icon-shadowed {\n    border-radius: 50%;\n    box-shadow: ", ";\n  }\n\n  & .kirk-icon-badge {\n    position: absolute;\n    bottom: 12px;\n    left: 12px;\n  }\n"], ["\n  fill: ", ";\n\n  &,\n  & rect,\n  & circle,\n  & line,\n  & polyline,\n  & path,\n  & g {\n    stroke: ", ";\n  }\n\n  &.kirk-icon-wrapper {\n    display: inline-block;\n    position: relative;\n  }\n\n  &.kirk-icon-shadowed {\n    border-radius: 50%;\n    box-shadow: ", ";\n  }\n\n  & .kirk-icon-badge {\n    position: absolute;\n    bottom: 12px;\n    left: 12px;\n  }\n"])), function (props) { var _a; return (_a = props.iconColor) !== null && _a !== void 0 ? _a : branding_1.color.lightMidnightGreen; }, function (props) { return (props.isDisabled ? branding_1.color.gray : ''); }, branding_1.shadow.icon);
exports.BaseIcon = StyledBaseIcon;
__exportStar(require("./BaseIcon"), exports);
var templateObject_1;
