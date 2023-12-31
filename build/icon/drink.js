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
exports.DrinkIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var DrinkIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M19.497 9.775a.5.5 0 01.501.535l-.812 10.434A1.37 1.37 0 0117.813 22h-5.375a1.37 1.37 0 01-1.378-1.256l-.81-10.434a.5.5 0 01.502-.535zM10.752 2c.247 0 .452.176.494.407l.009.09-.007 2.512c.14.851.381 1.684.719 2.48a.495.495 0 01-.27.65.505.505 0 01-.658-.267 11.583 11.583 0 01-.716-2.357l-.074-.426V2.994H7.755v2.095c0 .287-.068.622-.21 1.086l-.065.207c-.088.272-.476 1.378-.556 1.617-.518 1.546-.78 2.742-.78 3.937 0 1.078.05 1.906.153 2.801l.146 1.133c.037.279.06.493.079.702.021.25.032.484.032.72a5.64 5.64 0 01-.215 1.557l-.29 1.003a.985.985 0 00-.02.096l-.014.129a1.617 1.617 0 00-.01.171.733.733 0 00.57.746l.092.012h2.335a.5.5 0 01.502.497.499.499 0 01-.412.489l-.09.008-2.366-.001c-.949-.058-1.676-.855-1.635-1.772 0-.084.004-.17.014-.256.013-.12.034-.24.064-.371l.072-.274.144-.48c.174-.585.253-1.012.253-1.554 0-.207-.01-.413-.028-.637l-.03-.302-.075-.59-.068-.512a24.22 24.22 0 01-.21-3.315c0-1.213.238-2.396.7-3.847l.132-.403c.084-.249.47-1.349.553-1.607l.101-.33c.072-.25.112-.44.123-.581l.004-.08V2.498c0-.244.178-.447.412-.489L7.253 2h3.499zm8.202 8.769h-7.66l.769 9.899a.369.369 0 00.301.332l.072.006h5.377a.37.37 0 00.37-.338l.77-9.9z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.DrinkIcon = DrinkIcon;
exports.DrinkIcon.defaultProps = status_1.StatusIcon.defaultProps;
