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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteSection = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useFocusTrap_1 = require("../../../_internals/useFocusTrap");
var branding_1 = require("../../../_utils/branding");
var button_1 = require("../../../button");
var chevronIcon_1 = require("../../../icon/chevronIcon");
var baseSection_1 = require("../../../layout/section/baseSection");
var baseStyles_1 = require("../../baseStyles");
var BackButton = (0, styled_components_1.default)(button_1.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.kirk-button-bubble {\n    margin-right: ", ";\n    width: auto;\n    border: none;\n  }\n"], ["\n  &.kirk-button-bubble {\n    margin-right: ", ";\n    width: auto;\n    border: none;\n  }\n"])), branding_1.space.l);
var AutoCompleteSection = function (_a) {
    var onClose = _a.onClose, className = _a.className, renderAutocompleteComponent = _a.renderAutocompleteComponent, props = __rest(_a, ["onClose", "className", "renderAutocompleteComponent"]);
    var ref = (0, react_1.useRef)(null);
    (0, useFocusTrap_1.useFocusTrap)(ref, onClose);
    var backButton = (react_1.default.createElement(BackButton, { status: button_1.ButtonStatus.UNSTYLED, isBubble: true, onClick: onClose },
        react_1.default.createElement(chevronIcon_1.ChevronIcon, { size: "24", direction: chevronIcon_1.ChevronIconDirections.LEFT })));
    return (react_1.default.createElement(baseStyles_1.TransitionSection, { ref: ref, role: "dialog", className: className },
        react_1.default.createElement(baseSection_1.BaseSection, null, renderAutocompleteComponent(__assign(__assign({}, props), { autoFocus: true, inputAddon: backButton, embeddedInSearchForm: true })))));
};
exports.AutoCompleteSection = AutoCompleteSection;
var templateObject_1;
