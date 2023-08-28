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
exports.CrosshairIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CrosshairIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
        react_1.default.createElement("g", { stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("circle", { cx: "12", cy: "12", r: "7.826" }),
            react_1.default.createElement("path", { d: "M12 2.435v3.478M21.565 12h-3.478M12 21.565v-3.478M2.435 12h3.478" }),
            react_1.default.createElement("circle", { cx: "12", cy: "12", r: "1" })),
        react_1.default.createElement("circle", { fill: props.iconColor, fillRule: "nonzero", cx: "12", cy: "12", r: "1" })))); };
exports.CrosshairIcon = CrosshairIcon;
exports.CrosshairIcon.defaultProps = icon_1.BaseIconDefaultProps;
