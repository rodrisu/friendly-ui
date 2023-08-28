"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledArrowIcon = exports.StyledRideAxis = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var icon_1 = require("../../icon");
var branding_1 = require("../branding");
exports.StyledRideAxis = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.StyledArrowIcon = (0, styled_components_1.default)(icon_1.ArrowIcon)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* increase specificity when inside any card */\n  & {\n    display: inline-block;\n    /* hack: optical alignment since the icon isn't centered on the viewport */\n    padding: 0.1em 0 0;\n    margin: 0 ", ";\n    height: 0.9em;\n    width: 0.9em;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n"], ["\n  /* increase specificity when inside any card */\n  & {\n    display: inline-block;\n    /* hack: optical alignment since the icon isn't centered on the viewport */\n    padding: 0.1em 0 0;\n    margin: 0 ", ";\n    height: 0.9em;\n    width: 0.9em;\n    flex-shrink: 0;\n    flex-grow: 0;\n  }\n"])), branding_1.space.m);
var templateObject_1, templateObject_2;
