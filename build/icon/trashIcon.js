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
exports.TrashIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var TrashIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fillRule: "evenodd" },
        react_1.default.createElement("path", { d: "M18.5 21V9.5a.5.5 0 1 1 1 0v12a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 1 0V21h13z" }),
        react_1.default.createElement("path", { d: "M2.5 6.5a.5.5 0 0 1 0-1h19a.5.5 0 1 1 0 1h-19z" }),
        react_1.default.createElement("path", { d: "M9 3v3a.5.5 0 0 1-1 0V2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V6a.5.5 0 1 1-1 0V3H9z" }),
        react_1.default.createElement("path", { d: "M11.5 12a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5zM8 12a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5zM15 12a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5z" })))); };
exports.TrashIcon = TrashIcon;
exports.TrashIcon.defaultProps = icon_1.BaseIconDefaultProps;
