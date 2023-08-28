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
exports.SmokeIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var SmokeIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M22.558,17.817L8.371,9.626C7.908,9.359,7.27,9.532,7.004,9.992l-1.518,2.629c-0.275,0.477-0.111,1.09,0.366,1.366l14.188,8.191c0.151,0.087,0.324,0.133,0.498,0.133c0.356,0,0.688-0.19,0.867-0.499l1.518-2.629C23.198,18.706,23.035,18.094,22.558,17.817z M20.54,21.312C20.54,21.312,20.539,21.312,20.54,21.312l-14.188-8.19l1.518-2.629l14.187,8.191L20.54,21.312z" }),
        react_1.default.createElement("path", { d: "M4.237,5.03C4.471,5.175,4.78,5.103,4.925,4.868l1.14-1.843c1.002-1.619,3.079-2.142,4.727-1.19l5.47,3.158c0.693,0.4,1.463,0.605,2.242,0.605c0.391,0,0.784-0.052,1.172-0.155c1.161-0.312,2.132-1.056,2.731-2.097l0.234-0.406c0.139-0.239,0.057-0.545-0.183-0.683c-0.238-0.136-0.545-0.057-0.683,0.183l-0.235,0.406c-0.467,0.81-1.221,1.389-2.124,1.63c-0.904,0.243-1.846,0.118-2.655-0.35l-5.47-3.158c-2.121-1.225-4.79-0.552-6.078,1.53l-1.14,1.843C3.93,4.576,4.002,4.884,4.237,5.03z" }),
        react_1.default.createElement("path", { d: "M10.52,3.568C9.325,2.878,7.794,3.289,7.105,4.483L6.611,5.338C6.473,5.577,6.555,5.883,6.794,6.021c0.237,0.138,0.544,0.056,0.683-0.183l0.494-0.854c0.2-0.347,0.524-0.595,0.911-0.699c0.388-0.104,0.791-0.05,1.138,0.15l5.152,2.975c0.079,0.045,0.165,0.067,0.25,0.067c0.172,0,0.341-0.089,0.433-0.25c0.139-0.239,0.057-0.545-0.183-0.683L10.52,3.568z" }),
        react_1.default.createElement("path", { d: "M3.183,6.727C2.944,6.588,2.638,6.67,2.5,6.91l-2,3.464c-0.138,0.239-0.056,0.545,0.183,0.683c0.079,0.045,0.165,0.067,0.25,0.067c0.173,0,0.341-0.089,0.434-0.25l2-3.464C3.504,7.171,3.422,6.865,3.183,6.727z" }),
        react_1.default.createElement("path", { d: "M5.183,8.067C4.944,7.929,4.638,8.01,4.5,8.25l-2,3.464c-0.138,0.239-0.056,0.545,0.183,0.683c0.079,0.046,0.165,0.067,0.25,0.067c0.173,0,0.341-0.09,0.434-0.25l2-3.464C5.504,8.511,5.422,8.205,5.183,8.067z" })))); };
exports.SmokeIcon = SmokeIcon;
exports.SmokeIcon.defaultProps = status_1.StatusIcon.defaultProps;
