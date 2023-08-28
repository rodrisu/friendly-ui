"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBreadcrumb = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var Breadcrumb_1 = require("./Breadcrumb");
exports.StyledBreadcrumb = styled_components_1.default.ol(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n\n  margin: 0;\n  list-style: none;\n\n  li {\n    display: inline-block;\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  .breadcrumb-separator {\n    display: inline-block;\n    padding: 0 0.5em;\n  }\n"], ["\n  padding: ", ";\n\n  margin: 0;\n  list-style: none;\n\n  li {\n    display: inline-block;\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  .breadcrumb-separator {\n    display: inline-block;\n    padding: 0 0.5em;\n  }\n"])), function (props) {
    if (props.divider === Breadcrumb_1.DividerPosition.TOP) {
        return "".concat(branding_1.space.m, " ").concat(branding_1.space.xl, " ").concat(branding_1.space.l);
    }
    if (props.divider === Breadcrumb_1.DividerPosition.BOTTOM) {
        return "".concat(branding_1.space.l, " ").concat(branding_1.space.xl, " ").concat(branding_1.space.m);
    }
    return "".concat(branding_1.space.l, " ").concat(branding_1.space.xl, " ").concat(branding_1.space.l);
}, branding_1.color.blue);
var templateObject_1;
