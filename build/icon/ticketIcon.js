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
exports.TicketIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var TicketIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 24 15" }),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { fillRule: "nonzero", d: "M20.5 7.75c0 1.1 1.1 2.03 2.5 2.03.28 0 .5.23.5.5v4.22a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-4.22c0-.27.22-.5.5-.5 1.4 0 2.5-.93 2.5-2.03 0-1.1-1.1-2.03-2.5-2.03a.5.5 0 0 1-.5-.5V1C.5.72.72.5 1 .5h22c.28 0 .5.22.5.5v4.22a.5.5 0 0 1-.5.5c-1.4 0-2.5.93-2.5 2.03zm-1 0c0-1.54 1.32-2.8 3-3V1.5h-21v3.25c1.68.2 3 1.46 3 3s-1.32 2.8-3 3V14h21v-3.25c-1.68-.2-3-1.46-3-3z" }),
        react_1.default.createElement("path", { fill: props.isDisabled ? branding_1.color.gray : props.iconColor, d: "M12.04 10.18c.11.15.24.29.4.4a2.17 2.17 0 0 0 3.05-.32 2.22 2.22 0 0 0-2.08-3.6 131.79 131.79 0 0 1 .3-1.73.3.3 0 0 0-.24-.35l-.77-.14a.3.3 0 0 0-.32.18c-.36.86-.62 1.68-.76 2.46a2.24 2.24 0 0 0-1.72-.43 122.7 122.7 0 0 1 .3-1.72.3.3 0 0 0-.24-.35l-.76-.14a.3.3 0 0 0-.33.18 11.7 11.7 0 0 0-.77 2.53c-.18 1.05-.17 2.18.39 2.97a2.17 2.17 0 0 0 3.55.06z" })))); };
exports.TicketIcon = TicketIcon;
exports.TicketIcon.defaultProps = icon_1.BaseIconDefaultProps;
