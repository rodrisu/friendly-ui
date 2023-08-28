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
exports.CarVanIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CarVanIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.833 16.667v-5h18.334v5h-2.751a2.292 2.292 0 00-4.084 0H8.833a2.292 2.292 0 00-4.083 0H2.833zm6.241.833a2.292 2.292 0 11-4.565 0H2.417A.417.417 0 012 17.083v-10C2 5.928 2.97 5 4.16 5h15.68C21.03 5 22 5.928 22 7.083v10c0 .23-.186.417-.417.417h-2.927a2.292 2.292 0 11-4.565 0H9.074zm6.26-6.667h-12.5v-3.75c0-.686.588-1.25 1.325-1.25h11.174v5zm.833 0v-5h3.674c.736 0 1.326.564 1.326 1.25v3.75h-5zm-9.375 8.333a1.458 1.458 0 100-2.916 1.458 1.458 0 000 2.916zm11.04-1.458a1.458 1.458 0 11-2.917 0 1.458 1.458 0 012.917 0z", fill: props.iconColor }))); };
exports.CarVanIcon = CarVanIcon;
exports.CarVanIcon.defaultProps = icon_1.BaseIconDefaultProps;
