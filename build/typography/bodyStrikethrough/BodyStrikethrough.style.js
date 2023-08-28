"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBodyStrikethrough = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var body_1 = require("../body");
exports.TextBodyStrikethrough = (0, styled_components_1.default)(body_1.TextBody)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: line-through;\n"], ["\n  text-decoration: line-through;\n"])));
var templateObject_1;
