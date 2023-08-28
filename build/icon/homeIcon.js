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
exports.HomeIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var HomeIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M19.5,13c-0.276,0-0.5,0.224-0.5,0.5V23h-4v-4.5c0-0.276-0.224-0.5-0.5-0.5h-4c-0.276,0-0.5,0.224-0.5,0.5 V23H6v-9.5C6,13.224,5.776,13,5.5,13S5,13.224,5,13.5v10C5,23.776,5.224,24,5.5,24h5c0.276,0,0.5-0.224,0.5-0.5V19h3v4.5 c0,0.276,0.224,0.5,0.5,0.5h5c0.276,0,0.5-0.224,0.5-0.5v-10C20,13.224,19.776,13,19.5,13z" }),
        react_1.default.createElement("path", { d: "M23.836,12.13L12.5,1.824L1.164,12.13c-0.204,0.186-0.219,0.502-0.034,0.706 c0.187,0.206,0.503,0.22,0.707,0.034L12.5,3.176l10.664,9.694C23.26,12.957,23.38,13,23.5,13c0.136,0,0.271-0.055,0.37-0.164 C24.056,12.632,24.041,12.316,23.836,12.13z" })))); };
exports.HomeIcon = HomeIcon;
exports.HomeIcon.defaultProps = icon_1.BaseIconDefaultProps;
