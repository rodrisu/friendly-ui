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
exports.BankIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var BankIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M23.739,8.061l-11-6c-0.149-0.082-0.331-0.081-0.479,0l-11,6C1.1,8.148,1,8.317,1,8.5v3C1,11.776,1.224,12,1.5,12h22 c0.276,0,0.5-0.224,0.5-0.5v-3C24,8.317,23.9,8.148,23.739,8.061z M23,11H2V8.797l10.5-5.728L23,8.797V11z" }),
        react_1.default.createElement("path", { d: "M16,20.5v-6c0-0.276-0.224-0.5-0.5-0.5S15,14.224,15,14.5v6c0,0.276,0.224,0.5,0.5,0.5S16,20.776,16,20.5z" }),
        react_1.default.createElement("path", { d: "M4,20.5v-6C4,14.224,3.776,14,3.5,14S3,14.224,3,14.5v6C3,20.776,3.224,21,3.5,21S4,20.776,4,20.5z" }),
        react_1.default.createElement("path", { d: "M10,20.5v-6c0-0.276-0.224-0.5-0.5-0.5S9,14.224,9,14.5v6C9,20.776,9.224,21,9.5,21S10,20.776,10,20.5z" }),
        react_1.default.createElement("path", { d: "M22,20.5v-6c0-0.276-0.224-0.5-0.5-0.5S21,14.224,21,14.5v6c0,0.276,0.224,0.5,0.5,0.5S22,20.776,22,20.5z" }),
        react_1.default.createElement("path", { d: "M23.5,23h-22C1.224,23,1,23.224,1,23.5S1.224,24,1.5,24h22c0.276,0,0.5-0.224,0.5-0.5S23.776,23,23.5,23z" }),
        react_1.default.createElement("circle", { cx: "12.5", cy: "7.5", r: "1" })))); };
exports.BankIcon = BankIcon;
exports.BankIcon.defaultProps = icon_1.BaseIconDefaultProps;
