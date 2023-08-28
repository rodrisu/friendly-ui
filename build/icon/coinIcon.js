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
exports.CoinIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CoinIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fill: "none", stroke: props.iconColor, strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round" },
        react_1.default.createElement("path", { d: "M2.43 5.04v3.48c0 1.44 2.34 2.61 5.22 2.61s5.22-1.17 5.22-2.6V5.03" }),
        react_1.default.createElement("path", { d: "M2.43 8.52V12c0 1.44 2.34 2.6 5.22 2.6a8.7 8.7 0 0 0 3.48-.66" }),
        react_1.default.createElement("path", { d: "M2.43 12v3.48c0 1.44 2.34 2.6 5.22 2.6a8.7 8.7 0 0 0 3.48-.66" }),
        react_1.default.createElement("ellipse", { cx: "7.65", cy: "5.04", rx: "5.22", ry: "2.61" }),
        react_1.default.createElement("path", { d: "M11.13 12v3.48c0 1.44 2.34 2.6 5.22 2.6s5.22-1.16 5.22-2.6V12" }),
        react_1.default.createElement("path", { d: "M11.13 15.48v3.48c0 1.44 2.34 2.6 5.22 2.6s5.22-1.16 5.22-2.6v-3.48" }),
        react_1.default.createElement("ellipse", { cx: "16.35", cy: "12", rx: "5.22", ry: "2.61" })))); };
exports.CoinIcon = CoinIcon;
exports.CoinIcon.defaultProps = icon_1.BaseIconDefaultProps;
