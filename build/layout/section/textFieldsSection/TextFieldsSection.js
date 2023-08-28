"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFieldsSection = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var baseSection_1 = require("../baseSection");
/**
 * Inputs Section: display two or more TextFieldProps on a row.
 */
var TextFieldsSectionDefinition = function (props) {
    var className = props.className, children = props.children, _a = props.tagName, tagName = _a === void 0 ? 'div' : _a;
    return (react_1.default.createElement(baseSection_1.BaseSection, __assign({}, props, { tagName: tagName, className: className, contentClassName: "kirk-textfields-section-content", noHorizontalSpacing: true }), children));
};
// Keeping the style here to be able to have a dynamic tag on BaseSection (and not style.div)
exports.TextFieldsSection = (0, styled_components_1.default)(TextFieldsSectionDefinition)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .kirk-textfields-section-content {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  & .kirk-textfields-section-content .kirk-textField {\n    flex-grow: 1;\n    flex: 1;\n  }\n\n  & .kirk-textfields-section-content .kirk-textField:first-child {\n    padding-right: ", " !important;\n  }\n\n  & .kirk-textfields-section-content .kirk-textField:last-child {\n    padding-left: ", " !important;\n  }\n"], ["\n  & .kirk-textfields-section-content {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  & .kirk-textfields-section-content .kirk-textField {\n    flex-grow: 1;\n    flex: 1;\n  }\n\n  & .kirk-textfields-section-content .kirk-textField:first-child {\n    padding-right: ", " !important;\n  }\n\n  & .kirk-textfields-section-content .kirk-textField:last-child {\n    padding-left: ", " !important;\n  }\n"])), branding_1.space.s, branding_1.space.s);
var templateObject_1;
