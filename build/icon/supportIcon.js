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
exports.SupportIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var SupportIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.9997 2C7.9389 2 4.5584 4.96605 3.90933 8.84534C4.30569 8.71287 4.72189 8.64099 5.14536 8.63224C5.86101 5.50895 8.66247 3.17197 11.9997 3.17197C15.3369 3.17197 18.1384 5.50895 18.854 8.63228C19.2774 8.64103 19.6936 8.71291 20.09 8.84538C19.441 4.96605 16.0605 2 11.9997 2ZM18.8974 9.79175C19.4951 9.79175 20.0753 9.96211 20.5755 10.2844C21.4674 10.8586 22 11.8343 22 12.8943V14.0862C22 15.797 20.6082 17.1888 18.8974 17.1888H18.0657C17.7421 17.1888 17.4797 16.9264 17.4797 16.6028V10.3777C17.4797 10.0541 17.7421 9.79175 18.0657 9.79175H18.8974ZM18.6226 18.35H18.7703C19.1828 18.35 19.5814 18.2895 19.9581 18.1774C19.2986 20.1943 17.3994 21.6555 15.1651 21.6555C14.8415 21.6555 14.5791 21.3932 14.5791 21.0696C14.5791 20.7459 14.8415 20.4836 15.1651 20.4836C16.6749 20.4836 17.9853 19.6142 18.6226 18.35ZM5.10259 9.79175H5.93429C6.25791 9.79175 6.52028 10.0541 6.52028 10.3777V16.6028C6.52028 16.9264 6.25791 17.1888 5.93429 17.1888H5.10259C3.39183 17.1888 2 15.797 2 14.0862V12.8943C2 11.8344 2.53262 10.8586 3.42476 10.2842C3.92468 9.96207 4.50492 9.79175 5.10259 9.79175Z", fill: props.isDisabled ? branding_1.color.gray : props.iconColor })))); };
exports.SupportIcon = SupportIcon;
exports.SupportIcon.defaultProps = icon_1.BaseIconDefaultProps;
