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
exports.CarMinivanIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CarMinivanIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.75 16.667H2.833v-5h18.334v5h-2.751a2.292 2.292 0 00-4.084 0H8.833a2.292 2.292 0 00-4.083 0zM22 11.25v5.417c0 .46-.373.833-.833.833h-2.511a2.292 2.292 0 11-4.565 0H9.074a2.292 2.292 0 11-4.565 0H2.833A.833.833 0 012 16.667V7.083C2 5.928 2.97 5 4.16 5h13.067C19.782 5 22 7.184 22 10v1.25zm-6.667-5.417h1.894c2.098 0 3.94 1.814 3.94 4.167v.833h-5.834v-5zm-.833 0H8.667v5H14.5v-5zm-6.667 5h-5v-3.75c0-.686.59-1.25 1.326-1.25h3.674v5zm-2.436 6.45a.414.414 0 00.043-.123 1.459 1.459 0 11-.043.122zm10.977 1.883a1.458 1.458 0 100-2.916 1.458 1.458 0 000 2.916z", fill: props.iconColor }))); };
exports.CarMinivanIcon = CarMinivanIcon;
exports.CarMinivanIcon.defaultProps = icon_1.BaseIconDefaultProps;
