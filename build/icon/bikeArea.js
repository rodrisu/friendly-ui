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
exports.BikeAreaIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var BikeAreaIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M16.321 5c.209 0 .391.131.463.322l.023.085.87 4.797A4.39 4.39 0 0122 14.602 4.39 4.39 0 0117.617 19a4.39 4.39 0 01-4.382-4.398c0-2.11 1.48-3.872 3.454-4.3l-.153-.842H8.051l-.276.97a4.399 4.399 0 012.99 4.172A4.39 4.39 0 016.383 19 4.39 4.39 0 012 14.602a4.39 4.39 0 014.808-4.378l.396-1.396a.495.495 0 01.394-.352l.081-.007h8.678l-.448-2.478h-3.045a.494.494 0 01-.486-.406l-.008-.09c0-.243.175-.445.405-.487l.09-.008h3.456zm1.537 6.203l.677 3.744a.494.494 0 01-.948.264l-.023-.087-.697-3.846a3.406 3.406 0 00-2.645 3.324 3.401 3.401 0 003.395 3.407 3.401 3.401 0 003.395-3.407c0-1.8-1.391-3.275-3.154-3.399zm-11.475-.008a3.401 3.401 0 00-3.395 3.407 3.401 3.401 0 003.395 3.407 3.401 3.401 0 003.395-3.407c0-1.488-.95-2.753-2.275-3.217l-1.078 3.787a.494.494 0 01-.523.357l-.087-.017a.496.496 0 01-.356-.525l.017-.088 1.053-3.701zM9.407 5a.495.495 0 01.09.983l-.09.008H5.951a.495.495 0 01-.09-.983L5.952 5h3.456z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.BikeAreaIcon = BikeAreaIcon;
exports.BikeAreaIcon.defaultProps = status_1.StatusIcon.defaultProps;
