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
exports.SeatWithTableIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var SeatWithTableIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M5.526 3.037a1.327 1.327 0 011.485.677c.76 1.449 1.118 3.053 1.208 5.242.079 1.902.07 3.163-.082 5.559l-.076 1.12h5.609c.692 0 1.26.531 1.324 1.21l.006.129v2.686c0 .739-.594 1.34-1.33 1.34H7.644l-2.4-.004c-.464-.033-.916-.3-1.133-.716a1.376 1.376 0 01-.133-.417l-.95-14.887a1.34 1.34 0 01.994-1.578zM5.832 4l-.072.009-1.505.361c-.174.042-.285.22-.238.472l.95 14.888a.346.346 0 00.03.089c.053.1.213.185.401.181h8.272c.181 0 .33-.151.33-.34v-2.686c0-.19-.149-.34-.33-.34H6.987l.145-2.07c.157-2.434.166-3.672.088-5.566l-.02-.403c-.11-1.845-.437-3.2-1.074-4.416a.327.327 0 00-.366-.17zM20.5 11a.5.5 0 110 1h-8a.5.5 0 110-1h8z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.SeatWithTableIcon = SeatWithTableIcon;
exports.SeatWithTableIcon.defaultProps = icon_1.BaseIconDefaultProps;
