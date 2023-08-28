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
exports.QuestionIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var QuestionIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M12.5,1C6.159,1,1,6.159,1,12.5C1,18.841,6.159,24,12.5,24C18.841,24,24,18.841,24,12.5C24,6.159,18.841,1,12.5,1zM12.5,23C6.71,23,2,18.29,2,12.5C2,6.71,6.71,2,12.5,2C18.29,2,23,6.71,23,12.5C23,18.29,18.29,23,12.5,23z" }),
        react_1.default.createElement("path", { d: "M12.5,7c-1.319,0-2.686,0.933-3.25,2.219C9.139,9.472,9.254,9.767,9.507,9.878c0.254,0.111,0.547-0.005,0.659-0.257C10.571,8.697,11.574,8,12.5,8c1.332,0,2.5,1.168,2.5,2.5S13.832,13,12.5,13c-0.276,0-0.5,0.224-0.5,0.5v2c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-1.537c1.671-0.251,3-1.735,3-3.463C16,8.603,14.397,7,12.5,7z" }),
        react_1.default.createElement("circle", { cx: "12.5", cy: "18.5", r: "1" })))); };
exports.QuestionIcon = QuestionIcon;
exports.QuestionIcon.defaultProps = icon_1.BaseIconDefaultProps;
