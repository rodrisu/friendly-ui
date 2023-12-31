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
exports.LightIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var LightIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M12.5 18.47c.248 0 .455.176.497.408l.009.09V21.5A.502.502 0 0112.5 22a.504.504 0 01-.498-.409l-.008-.09v-2.533c0-.276.227-.499.506-.499zm6.648-2.51l.07.058 1.817 1.792a.494.494 0 010 .705.511.511 0 01-.645.057l-.07-.057-1.817-1.792a.494.494 0 010-.705.511.511 0 01.645-.058zm-12.65.058a.493.493 0 01.058.636l-.059.07-1.817 1.79a.51.51 0 01-.715 0 .493.493 0 01-.058-.635l.058-.07 1.817-1.79a.51.51 0 01.715 0zm10.744-3.9a.495.495 0 01.198.678 5.659 5.659 0 01-4.94 2.872 5.659 5.659 0 01-4.94-2.872.495.495 0 01.198-.677.51.51 0 01.687.195A4.645 4.645 0 0012.5 14.67a4.645 4.645 0 004.055-2.357.51.51 0 01.687-.195zM13.785 2c4.438 0 8.07 3.476 8.21 7.846l.005.246a.502.502 0 01-.506.506H3.506A.502.502 0 013 10.1C3 5.626 6.678 2 11.215 2zm0 .997h-2.57C7.48 2.997 4.41 5.8 4.047 9.388l-.019.213H20.97l-.016-.205C20.603 5.874 17.647 3.119 14.027 3l-.242-.004z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.LightIcon = LightIcon;
exports.LightIcon.defaultProps = status_1.StatusIcon.defaultProps;
