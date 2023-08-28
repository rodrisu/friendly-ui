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
exports.LadyIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var LadyIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fill: "none", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", stroke: props.iconColor },
        react_1.default.createElement("path", { d: "M12 17v6M9 21h6" }),
        react_1.default.createElement("circle", { cx: "12", cy: "9", r: "8" })))); };
exports.LadyIcon = LadyIcon;
exports.LadyIcon.defaultProps = icon_1.BaseIconDefaultProps;
