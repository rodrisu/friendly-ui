"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCaption = exports.StyledProximity = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var caption_1 = require("../typography/caption");
exports.StyledProximity = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  line-height: 0;\n  align-items: center;\n  padding-top: ", ";\n\n  svg + svg {\n    margin-left: ", ";\n  }\n"], ["\n  display: flex;\n  line-height: 0;\n  align-items: center;\n  padding-top: ", ";\n\n  svg + svg {\n    margin-left: ", ";\n  }\n"])), branding_1.space.s, branding_1.space.s);
exports.StyledCaption = (0, styled_components_1.default)(caption_1.TextCaption)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-left: ", ";\n  color: ", ";\n"], ["\n  padding-left: ", ";\n  color: ", ";\n"])), branding_1.space.s, function (props) { return props.color; });
var templateObject_1, templateObject_2;
