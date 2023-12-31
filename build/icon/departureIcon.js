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
exports.DepartureIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var DepartureIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M9,23.5c-0.133,0-0.261-0.053-0.355-0.147C8.312,23.017,0.5,15.085,0.5,10c0-5.321,4.322-8.5,8.5-8.5 c4.178,0,8.5,3.179,8.5,8.5c0,1.083-0.353,2.37-1.049,3.825c-0.119,0.249-0.419,0.354-0.667,0.235 c-0.249-0.119-0.354-0.418-0.235-0.667C16.18,12.074,16.5,10.932,16.5,10c0-4.695-3.813-7.5-7.5-7.5S1.5,5.305,1.5,10 c0,4.098,5.967,10.661,7.5,12.279c0.462-0.487,1.327-1.424,2.303-2.599c0.177-0.213,0.492-0.241,0.704-0.065 c0.212,0.177,0.242,0.492,0.065,0.704c-1.475,1.776-2.667,2.982-2.718,3.032C9.261,23.446,9.133,23.5,9,23.5z" }),
        react_1.default.createElement("path", { d: "M9,13.5c-1.93,0-3.5-1.57-3.5-3.5S7.07,6.5,9,6.5s3.5,1.57,3.5,3.5S10.93,13.5,9,13.5z M9,7.5 c-1.378,0-2.5,1.122-2.5,2.5s1.122,2.5,2.5,2.5s2.5-1.122,2.5-2.5S10.378,7.5,9,7.5z" }),
        react_1.default.createElement("path", { d: "M20,20.5c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l2.146-2.146H14 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7.793l-2.146-2.146c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0 l2.999,2.999c0.004,0.004,0.008,0.008,0.011,0.012l0,0c0.001,0,0.001,0,0.001,0c0,0.001,0.001,0.001,0.001,0.001l0,0 c0.042,0.046,0.075,0.097,0.097,0.151c0.022,0.055,0.036,0.113,0.038,0.176l0,0c0,0,0,0,0,0.001c0,0,0,0,0,0.001l0,0 c0,0.009,0,0.017,0,0.025l0,0c0,0.001,0,0.001,0,0.001c0,0.001,0,0.001,0,0.001l0,0c-0.002,0.062-0.016,0.121-0.038,0.176 c-0.021,0.055-0.055,0.105-0.097,0.151l0,0c0,0-0.001,0-0.001,0.001c0,0,0,0-0.001,0l0,0c-0.003,0.004-0.007,0.008-0.011,0.012 l-2.999,2.999C20.256,20.451,20.128,20.5,20,20.5z" })))); };
exports.DepartureIcon = DepartureIcon;
exports.DepartureIcon.defaultProps = icon_1.BaseIconDefaultProps;
