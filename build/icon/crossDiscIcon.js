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
exports.CrossDiscIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CrossDiscIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M16.854,8.146c-0.195-0.195-0.512-0.195-0.707,0L12.5,11.793L8.854,8.146c-0.195-0.195-0.512-0.195-0.707,0 s-0.195,0.512,0,0.707l3.646,3.646l-3.646,3.646c-0.195,0.195-0.195,0.512,0,0.707s0.512,0.195,0.707,0l3.646-3.646l3.646,3.646 C16.244,16.951,16.372,17,16.5,17s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L13.207,12.5l3.646-3.646 C17.049,8.658,17.049,8.342,16.854,8.146z" }),
        react_1.default.createElement("path", { d: "M12.5,1C6.159,1,1,6.159,1,12.5C1,18.841,6.159,24,12.5,24C18.841,24,24,18.841,24,12.5 C24,6.159,18.841,1,12.5,1z M12.5,23C6.71,23,2,18.29,2,12.5C2,6.71,6.71,2,12.5,2C18.29,2,23,6.71,23,12.5 C23,18.29,18.29,23,12.5,23z" })))); };
exports.CrossDiscIcon = CrossDiscIcon;
exports.CrossDiscIcon.defaultProps = icon_1.BaseIconDefaultProps;
