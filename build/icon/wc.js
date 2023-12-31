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
exports.WcIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var WcIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M7.927 9.303a2.301 2.301 0 012.308 2.297v5.402a.496.496 0 01-.498.496l-1.312-.001v4.008a.496.496 0 01-.408.487l-.09.008h-3.62a.496.496 0 01-.497-.495v-4.008H2.497a.497.497 0 01-.49-.406L2 17.002V11.6a2.301 2.301 0 012.308-2.297zm10.86 0c.214 0 .404.137.472.339l2.715 8.104a.496.496 0 01-.472.652h-2.217v3.107a.496.496 0 01-.409.487l-.089.008h-3.62a.496.496 0 01-.498-.495v-3.107h-2.217a.496.496 0 01-.492-.572l.02-.08 2.715-8.104a.498.498 0 01.472-.339zm-10.86.99h-3.62c-.724 0-1.312.585-1.312 1.307v4.906l1.313.001c.244 0 .447.175.49.406l.007.09v4.006H7.43v-4.007c0-.243.176-.445.408-.487l.09-.008h1.311V11.6c0-.677-.515-1.233-1.177-1.3l-.135-.006zm10.5 0h-2.901l-2.384 7.115h2.025c.245 0 .448.175.49.406l.008.089v3.106h2.624v-3.106c0-.243.176-.446.409-.487l.089-.008h2.025l-2.385-7.114zM6.117 3c1.205 0 2.204.92 2.302 2.128l.006.168a2.305 2.305 0 01-2.139 2.29l-.168.006a2.307 2.307 0 01-2.302-2.128l-.006-.168c0-1.198.925-2.192 2.139-2.29zm10.86 0c1.205 0 2.203.92 2.301 2.128l.007.168a2.305 2.305 0 01-2.14 2.29l-.168.006a2.307 2.307 0 01-2.301-2.128l-.007-.168c0-1.198.926-2.192 2.14-2.29zm-10.852.99l-.116.005a1.304 1.304 0 00-1.204 1.281l.005.128a1.305 1.305 0 001.287 1.198l.129-.004A1.304 1.304 0 007.43 5.316l-.005-.128a1.308 1.308 0 00-1.3-1.198zm10.86 0l-.116.005a1.304 1.304 0 00-1.205 1.281l.005.128a1.305 1.305 0 001.288 1.198l.128-.004a1.304 1.304 0 001.205-1.282l-.005-.128a1.308 1.308 0 00-1.3-1.198z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.WcIcon = WcIcon;
exports.WcIcon.defaultProps = status_1.StatusIcon.defaultProps;
