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
exports.ZoomOutIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var ZoomOutIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 18 2" }),
    react_1.default.createElement("path", { fillRule: "evenodd", d: "M17.504.5c.274 0 .496.224.496.5a.5.5 0 01-.407.492l-.09.008H.497A.498.498 0 010 1 .5.5 0 01.407.508L.497.5h17.007z" }))); };
exports.ZoomOutIcon = ZoomOutIcon;
exports.ZoomOutIcon.defaultProps = icon_1.BaseIconDefaultProps;
