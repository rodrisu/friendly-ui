"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTag = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../_utils/branding");
var body_1 = require("../../typography/body");
exports.StyledTag = (0, styled_components_1.default)(body_1.TextBody).attrs({ isInverted: true })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n"], ["\n  background-color: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n"])), branding_1.color.blue, branding_1.space.xs, branding_1.space.m, branding_1.radius.m);
var templateObject_1;
