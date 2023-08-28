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
exports.GenericAmenityIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var GenericAmenityIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M17.7 3a.5.5 0 01.39.187l3.8 4.738c.14.174.147.419.017.6l-9.501 13.267a.5.5 0 01-.812 0L2.093 8.525a.496.496 0 01.016-.6l3.8-4.738A.5.5 0 016.3 3zm-.24.995H6.539L3.124 8.25 12 20.646l8.875-12.395-3.415-4.256zm-.71 3.743a.499.499 0 01.09.99l-.09.008h-9.5a.499.499 0 01-.09-.99l.09-.008h9.5z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.GenericAmenityIcon = GenericAmenityIcon;
exports.GenericAmenityIcon.defaultProps = status_1.StatusIcon.defaultProps;
