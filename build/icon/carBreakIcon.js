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
exports.CarBreakIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CarBreakIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.062 12.123l.036-.202.607-3.392C3.056 7.606 3.795 7 4.635 7h9.251c.991 0 1.637.392 2.291 1.258.122.16.244.336.404.575a111.822 111.822 0 01.425.641c.54.804.962 1.494 1.27 2.071h2.815a.91.91 0 01.909.91v3.636a.91.91 0 01-.91.909h-3.227a2.273 2.273 0 01-4.454 0H8.773a2.274 2.274 0 01-4.454 0h-1.41A.91.91 0 012 16.09v-3.636c0-.117.022-.229.062-.331zm6.301-4.214H4.634c-.429 0-.853.349-1.057.86l-.49 2.776h5.276V7.91zm.91 3.636V7.91h4.613c.674 0 1.07.24 1.566.897.109.144.223.306.373.532l.143.216.283.426c.394.588.723 1.11.985 1.565H9.272zm-.455.91H2.909v3.636h1.41a2.274 2.274 0 014.454 0h4.636a2.274 2.274 0 014.454 0h3.228v-3.637H8.817zm-.908 4.09a1.364 1.364 0 11-2.727 0 1.364 1.364 0 012.727 0zm7.726 1.364a1.364 1.364 0 100-2.727 1.364 1.364 0 000 2.727z", fill: props.iconColor }))); };
exports.CarBreakIcon = CarBreakIcon;
exports.CarBreakIcon.defaultProps = icon_1.BaseIconDefaultProps;
