"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCardContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
exports.StyledCardContainer = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-left: ", ";\n  padding-right: ", ";\n"], ["\n  padding-left: ", ";\n  padding-right: ", ";\n"])), function (props) { return (props.noHorizontalSpacing ? branding_1.space.s : branding_1.horizontalSpace.global); }, function (props) { return (props.noHorizontalSpacing ? branding_1.space.s : branding_1.horizontalSpace.global); });
var templateObject_1;
