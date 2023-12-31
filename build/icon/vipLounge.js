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
exports.VipLoungeIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var VipLoungeIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M15.203 3.053c.24 0 .438.21.475.486l.006.095v9.7c0 1.852-1.107 3.416-2.586 3.75v3.754h2.105c.266 0 .481.26.481.58 0 .286-.17.523-.394.573l-.087.009H9.85c-.265 0-.48-.26-.48-.581 0-.285.17-.523.394-.572l.086-.01h2.195v-3.732c-1.455-.272-2.59-1.754-2.67-3.562l-.006-.208V3.634c0-.29.175-.529.403-.574l.078-.007h5.354zm-.482 7.629h-4.39v2.653c0 1.336.83 2.451 1.887 2.628l.146.018.148.007.148-.005c1.1-.081 1.982-1.151 2.057-2.467l.005-.181v-2.653zm5.595-1.945c0 .697.565 1.263 1.263 1.263.561 0 .561.842 0 .842-.698 0-1.263.566-1.263 1.263 0 .562-.842.562-.842 0 0-.697-.566-1.263-1.263-1.263a.421.421 0 01-.076-.835L18.21 10l.121-.006c.64-.061 1.142-.6 1.142-1.257 0-.562.842-.562.842 0zm-.421 1.261l-.065.084c-.083.1-.175.191-.274.274l-.084.064.084.066c.1.083.191.174.274.274l.065.083.065-.083c.082-.1.174-.191.274-.274l.083-.066-.083-.064a2.118 2.118 0 01-.274-.274l-.065-.084zm-5.173-5.784H10.33V9.52h4.391l.001-5.306zM5.61 2.45a2.256 2.256 0 002.256 2.256c.601 0 .601.902 0 .902a2.256 2.256 0 00-2.256 2.256c0 .601-.902.601-.902 0A2.256 2.256 0 002.45 5.609a.451.451 0 01-.081-.895l.081-.007.148-.005a2.256 2.256 0 002.108-2.25c0-.602.902-.602.902 0zm-.451 1.626l-.066.106a3.175 3.175 0 01-.909.91l-.106.065.106.066c.362.237.672.547.91.909l.065.105.066-.105c.237-.362.547-.672.909-.91l.105-.065-.105-.066a3.175 3.175 0 01-.91-.909l-.065-.106z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.VipLoungeIcon = VipLoungeIcon;
exports.VipLoungeIcon.defaultProps = status_1.StatusIcon.defaultProps;
