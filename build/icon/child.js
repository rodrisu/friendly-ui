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
exports.ChildIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var status_1 = require("../_utils/icon/status");
var ChildIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M16.289 2.001a.494.494 0 11.062.985c-1.488.092-2.59.671-3.231 1.662a8.267 8.267 0 016.373 4.674l.118.263.1.248.057.015a3.069 3.069 0 012.21 2.575l.017.185.005.179c0 1.32-.847 2.459-2.056 2.883l-.176.056-.056.014-.1.248a8.264 8.264 0 01-7.039 4.992l-.294.015L12 21a8.268 8.268 0 01-7.498-4.757l-.113-.255-.102-.248-.055-.014a3.069 3.069 0 01-2.21-2.575l-.017-.185-.005-.18c0-1.319.847-2.458 2.056-2.882l.176-.056.055-.015.102-.248a8.264 8.264 0 017.038-4.992l.294-.015.279-.005h.026c.745-1.518 2.228-2.446 4.263-2.572zm-4.623 3.566l-.213.013a7.267 7.267 0 00-6.323 4.838.496.496 0 01-.387.325 2.08 2.08 0 00-1.75 2.044 2.08 2.08 0 001.75 2.044c.179.03.328.154.387.324A7.27 7.27 0 0012 20.014a7.27 7.27 0 006.87-4.859.496.496 0 01.387-.324 2.08 2.08 0 001.75-2.044 2.08 2.08 0 00-1.75-2.044.496.496 0 01-.387-.325 7.267 7.267 0 00-6.182-4.826c-.179.585-.246 1.259-.192 2.014a.494.494 0 01-.461.526.496.496 0 01-.53-.458 6.731 6.731 0 01.16-2.107zm-2.71 7.303a1.304 1.304 0 110 2.608 1.304 1.304 0 010-2.608zm6.087 0a1.304 1.304 0 110 2.608 1.304 1.304 0 010-2.608z", fill: props.isDisabled ? branding_1.color.gray : props.iconColor, fillRule: "nonzero" }))); };
exports.ChildIcon = ChildIcon;
exports.ChildIcon.defaultProps = status_1.StatusIcon.defaultProps;
