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
exports.PinterestIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var PinterestIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fill: props.isDisabled ? branding_1.color.gray : props.iconColor, d: "M11 0C4.925 0 0 4.924 0 11c0 4.66 2.9 8.64 6.991 10.243-.096-.87-.183-2.205.039-3.154.2-.86 1.29-5.468 1.29-5.468s-.33-.66-.33-1.634c0-1.529.887-2.671 1.99-2.671.938 0 1.392.705 1.392 1.55 0 .942-.6 2.353-.911 3.661-.26 1.095.55 1.989 1.629 1.989 1.955 0 3.458-2.062 3.458-5.038 0-2.633-1.892-4.475-4.595-4.475-3.13 0-4.966 2.348-4.966 4.773 0 .945.364 1.96.818 2.51a.33.33 0 0 1 .076.316l-.305 1.247c-.048.202-.16.245-.368.148-1.374-.64-2.233-2.649-2.233-4.262 0-3.47 2.52-6.657 7.268-6.657 3.816 0 6.781 2.72 6.781 6.354 0 3.791-2.39 6.842-5.708 6.842-1.114 0-2.162-.579-2.52-1.263l-.686 2.615c-.249.956-.919 2.154-1.368 2.884 1.03.318 2.124.49 3.258.49 6.075 0 11-4.925 11-11 0-6.076-4.925-11-11-11z" }))); };
exports.PinterestIcon = PinterestIcon;
exports.PinterestIcon.defaultProps = icon_1.BaseIconDefaultProps;
