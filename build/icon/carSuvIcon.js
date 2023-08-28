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
exports.CarSuvIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CarSuvIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.087 11.217H3.741v4.348h1.563a2.391 2.391 0 014.26 0h4.873a2.391 2.391 0 014.26 0h2v-4.348h-2.61zm-15.215-.389v4.738c0 .48.388.869.869.869h1.312a2.391 2.391 0 104.763 0h4.37a2.391 2.391 0 104.763 0h1.748c.48 0 .87-.39.87-.87v-4.348a.87.87 0 00-.87-.87h-2.362l-1.976-3.292A2.174 2.174 0 0014.495 6H6.222c-.888 0-1.688.541-2.018 1.367l-1.27 3.176a.86.86 0 00-.014.037.433.433 0 00-.048.248zm1.076-.48h6.313V6.87H6.222c-.533 0-1.013.324-1.21.82l-1.064 2.658zM11.13 6.87v3.478h6.19l-1.706-2.845a1.304 1.304 0 00-1.119-.633H11.13zM2 15.13v-3.478a.435.435 0 01.87 0v3.478a.435.435 0 11-.87 0zm6.956 1.522a1.522 1.522 0 11-3.043 0 1.522 1.522 0 013.043 0zm7.611 1.522a1.522 1.522 0 100-3.044 1.522 1.522 0 000 3.044z", fill: props.iconColor }))); };
exports.CarSuvIcon = CarSuvIcon;
exports.CarSuvIcon.defaultProps = icon_1.BaseIconDefaultProps;
