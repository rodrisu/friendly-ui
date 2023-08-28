"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutNormalizer = exports.normalizeHorizontally = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var branding_1 = require("../_utils/branding");
var horizontalPadding = function (props) {
    if (props.noHorizontalSpacing) {
        return '0';
    }
    return props.hasHorizontalSpacing ? branding_1.horizontalSpace.inner : branding_1.horizontalSpace.global;
};
var horizontalMargin = function (props) {
    return props.hasHorizontalSpacing ? branding_1.horizontalSpace.outer : 0;
};
/**
 * Util method to normalize horizontal spacing
 * using !important because this should never be overridden
 */
var normalizeHorizontally = function (props) { return "\n  padding-left: ".concat(horizontalPadding(props), " !important;\n  padding-right: ").concat(horizontalPadding(props), " !important;\n  margin-left: ").concat(horizontalMargin(props), ";\n  margin-right: ").concat(horizontalMargin(props), ";\n  "); };
exports.normalizeHorizontally = normalizeHorizontally;
// Legacy layout rules from production BBC.
var LegacyLayoutNormalizationGlobalStyles = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    .home-column .kirk-item.kirk-item--clickable,\n    .user-menu-item.kirk-item.kirk-item--clickable {\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n    .home-column button.kirk-item.kirk-item--clickable,\n    button.user-menu-item.kirk-item.kirk-item--clickable {\n        max-width: 100%;\n    }\n"], ["\n    .home-column .kirk-item.kirk-item--clickable,\n    .user-menu-item.kirk-item.kirk-item--clickable {\n        margin-left: 0;\n        margin-right: 0;\n    }\n\n    .home-column button.kirk-item.kirk-item--clickable,\n    button.user-menu-item.kirk-item.kirk-item--clickable {\n        max-width: 100%;\n    }\n"])));
var LayoutNormalizationGlobalStyles = (0, styled_components_1.createGlobalStyle)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  // Add normalization styles.\n"], ["\n  // Add normalization styles.\n"])));
var LayoutNormalizer = function (_a) {
    var _b = _a.useLegacyNormalization, useLegacyNormalization = _b === void 0 ? true : _b;
    if (useLegacyNormalization) {
        return react_1.default.createElement(LegacyLayoutNormalizationGlobalStyles, null);
    }
    return react_1.default.createElement(LayoutNormalizationGlobalStyles, null);
};
exports.LayoutNormalizer = LayoutNormalizer;
var templateObject_1, templateObject_2;
