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
exports.StandardSeatIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var StandardSeatIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M8.526 3.037l-1.504.361a1.34 1.34 0 00-.994 1.578l.95 14.887c.034.191.076.308.133.417.217.417.669.683 1.132.716l2.401.004h6.026c.736 0 1.33-.601 1.33-1.34v-2.686l-.006-.13a1.334 1.334 0 00-1.324-1.21H11.06l.076-1.12c.153-2.395.16-3.656.082-5.558-.09-2.19-.449-3.793-1.208-5.242a1.327 1.327 0 00-1.485-.677zm.234.972a.327.327 0 01.366.17c.637 1.215.964 2.571 1.074 4.416l.02.403c.078 1.894.07 3.132-.088 5.566l-.145 2.07h6.683c.181 0 .33.15.33.34v2.686c0 .189-.149.34-.33.34H8.398c-.188.004-.348-.08-.4-.181a.346.346 0 01-.032-.09L7.017 4.843c-.047-.252.064-.43.238-.472L8.76 4.01z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.StandardSeatIcon = StandardSeatIcon;
exports.StandardSeatIcon.defaultProps = status_1.StatusIcon.defaultProps;
