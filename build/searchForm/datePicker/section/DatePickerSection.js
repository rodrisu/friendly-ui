"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerSection = void 0;
var react_1 = __importStar(require("react"));
var item_1 = require("../../../_internals/item");
var useFocusTrap_1 = require("../../../_internals/useFocusTrap");
var datePicker_1 = require("../../../datePicker");
var contentDivider_1 = require("../../../divider/contentDivider");
var chevronIcon_1 = require("../../../icon/chevronIcon");
var baseSection_1 = require("../../../layout/section/baseSection");
var baseStyles_1 = require("../../baseStyles");
var DatePickerSection = function (_a) {
    var title = _a.title, onClose = _a.onClose, renderDatePickerComponent = _a.renderDatePickerComponent, className = _a.className, props = __rest(_a, ["title", "onClose", "renderDatePickerComponent", "className"]);
    var ref = (0, react_1.useRef)(null);
    (0, useFocusTrap_1.useFocusTrap)(ref, onClose);
    return (react_1.default.createElement(baseStyles_1.TransitionSection, { ref: ref, role: "dialog", className: className },
        react_1.default.createElement(baseSection_1.BaseSection, null,
            react_1.default.createElement(item_1.Item, { leftAddon: react_1.default.createElement(chevronIcon_1.ChevronIcon, { direction: chevronIcon_1.ChevronIconDirections.LEFT }), leftTitle: title, tag: react_1.default.createElement("button", { type: "button" }), onClick: onClose }),
            react_1.default.createElement(contentDivider_1.ContentDivider, null),
            renderDatePickerComponent(__assign(__assign({}, props), { className: 'kirk-datePickerSection-datepicker', orientation: datePicker_1.DatePickerOrientation.VERTICAL })))));
};
exports.DatePickerSection = DatePickerSection;
