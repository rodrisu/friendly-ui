"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionDivider = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var divider_1 = require("../../_internals/divider");
var StyledDivider = (0, styled_components_1.default)(divider_1.Divider)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  > hr {\n    height: 8px;\n  }\n"], ["\n  > hr {\n    height: 8px;\n  }\n"])));
var SectionDivider = function () { return (react_1.default.createElement(StyledDivider, { "aria-hidden": "true" },
    react_1.default.createElement("hr", null))); };
exports.SectionDivider = SectionDivider;
var templateObject_1;
