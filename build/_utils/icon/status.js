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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusIcon = exports.status = void 0;
var react_1 = __importStar(require("react"));
var branding_1 = require("../branding");
var icon_1 = require("../icon");
var BaseIcon_1 = require("../icon/BaseIcon");
var status;
(function (status) {
    status["ON"] = "on";
    status["OFF"] = "off";
    status["DEFAULT"] = "default";
})(status || (exports.status = status = {}));
var StatusIcon = function (props) {
    var finalProps = __assign(__assign({}, props), { iconColor: props.status === status.ON ? branding_1.color.midnightGreen : props.iconColor });
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, finalProps),
        react_1.default.createElement(react_1.Fragment, null,
            props.children,
            props.status === status.OFF && (react_1.default.createElement("g", { fillRule: "nonzero", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("path", { stroke: branding_1.color.white, d: "M1,24.5 L23.5,2" }),
                react_1.default.createElement("path", { stroke: branding_1.color.red, d: "M1,23.5 L23.5,1" }))))));
};
exports.StatusIcon = StatusIcon;
exports.StatusIcon.defaultProps = __assign(__assign({}, BaseIcon_1.BaseIconDefaultProps), { status: status.DEFAULT });
