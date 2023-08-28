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
exports.InfoIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var InfoIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { transform: "translate(-1 -1)", fill: "none", fillRule: "evenodd" },
        react_1.default.createElement("path", { d: "M12 22.065C6.441 22.065 1.935 17.56 1.935 12 1.935 6.441 6.44 1.935 12 1.935c5.559 0 10.065 4.506 10.065 10.065 0 5.559-4.506 10.065-10.065 10.065zm0-1a9.065 9.065 0 1 0 0-18.13 9.065 9.065 0 0 0 0 18.13z", fill: props.iconColor, fillRule: "nonzero" }),
        react_1.default.createElement("path", { d: "M10.26 11.63a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .5.5v5.218a.5.5 0 1 1-1 0V11.63h-1.24zm0 5.218a.5.5 0 1 1 0-1h3.48a.5.5 0 1 1 0 1h-3.48z", fill: props.iconColor, fillRule: "nonzero" }),
        react_1.default.createElement("circle", { fill: props.iconColor, fillRule: "nonzero", cx: "12", cy: "7.652", r: "1" })))); };
exports.InfoIcon = InfoIcon;
exports.InfoIcon.defaultProps = icon_1.BaseIconDefaultProps;
