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
exports.BlanketIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var BlanketIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M18.374 2c1.394 0 2.535 1.104 2.62 2.498l.006.168V22H5.55v-3.607h1.003v2.588h13.443V4.666c0-.859-.648-1.564-1.475-1.64l-.124-.006c-.859.11-1.646.587-1.646 1.646v12.157H3V4.666C3 3.194 4.176 2 5.626 2h12.748zm-2.055 1.02H5.626c-.896 0-1.622.737-1.622 1.646l-.001 11.137h11.744V4.666c0-.61.172-1.12.478-1.529l.094-.118z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.BlanketIcon = BlanketIcon;
exports.BlanketIcon.defaultProps = status_1.StatusIcon.defaultProps;
