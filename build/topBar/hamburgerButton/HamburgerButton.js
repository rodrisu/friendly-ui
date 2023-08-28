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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HamburgerButton = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var interfaces_1 = require("../../_utils/interfaces");
var HamburgerButton_style_1 = require("./HamburgerButton.style");
var HamburgerButton = function (props) {
    var _a = props.open, open = _a === void 0 ? false : _a, onClick = props.onClick, className = props.className;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    return (react_1.default.createElement(HamburgerButton_style_1.StyledHamburgerButton, __assign({ className: (0, classcat_1.default)([className]) }, a11yAttrs, { "aria-expanded": open, onClick: onClick }),
        react_1.default.createElement("i", null)));
};
exports.HamburgerButton = HamburgerButton;
