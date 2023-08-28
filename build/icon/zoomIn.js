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
exports.ZoomInIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var ZoomInIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 18 18" }),
    react_1.default.createElement("path", { fillRule: "evenodd", d: "M9 0c.244 0 .446.175.488.407l.008.09v8.006h8.008a.496.496 0 01.09.985l-.09.008H9.496v8.008a.496.496 0 01-.984.09l-.008-.09-.001-8.008H.496a.496.496 0 01-.09-.984l.09-.008 8.007-.001V.496C8.504.222 8.727 0 9 0z" }))); };
exports.ZoomInIcon = ZoomInIcon;
exports.ZoomInIcon.defaultProps = icon_1.BaseIconDefaultProps;
