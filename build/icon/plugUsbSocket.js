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
exports.PlugUsbSocketIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var PlugUsbSocketIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M16.375 2.125a.5.5 0 01.492.41l.008.09v4.5h4.5a.5.5 0 01.09.992l-.09.008h-2v2.625a7.375 7.375 0 01-4.858 6.928l-.142.048v3.649a.5.5 0 01-.41.492l-.09.008h-3.75a.5.5 0 01-.492-.41l-.008-.09v-3.649l-.142-.048a7.376 7.376 0 01-4.853-6.662l-.005-.266V8.125h-2a.5.5 0 01-.09-.992l.09-.008h4.5v-4.5a.5.5 0 01.992-.09l.008.09v4.5h7.75v-4.5a.5.5 0 01.5-.5zm2 6H5.625v2.625a6.375 6.375 0 004.636 6.129.5.5 0 01.357.399l.007.082v3.515h2.75V17.36a.5.5 0 01.286-.452l.078-.029a6.375 6.375 0 004.63-5.871l.006-.258V8.125z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.PlugUsbSocketIcon = PlugUsbSocketIcon;
exports.PlugUsbSocketIcon.defaultProps = status_1.StatusIcon.defaultProps;
