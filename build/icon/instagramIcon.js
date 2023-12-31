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
exports.InstagramIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var InstagramIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fillRule: "nonzero" },
        react_1.default.createElement("path", { fill: props.isDisabled ? branding_1.color.gray : props.iconColor, d: "M12 3.802c2.67 0 2.987.01 4.042.058 1.137.052 2.193.28 3.005 1.092.813.813 1.042 1.869 1.092 3.008.05 1.053.059 1.37.059 4.04s-.009 2.987-.059 4.042c-.05 1.137-.279 2.193-1.091 3.005s-1.869 1.042-3.007 1.092c-1.055.05-1.372.059-4.042.059s-2.987-.009-4.042-.059c-1.137-.05-2.193-.279-3.005-1.091S3.91 17.178 3.86 16.04c-.05-1.055-.058-1.372-.058-4.042s.008-2.987.058-4.042c.05-1.137.28-2.193 1.092-3.005S6.82 3.91 7.958 3.86C9.013 3.81 9.33 3.802 12 3.802zM12 2c-2.717 0-3.057.012-4.123.06-1.625.075-3.052.473-4.199 1.618C2.533 4.825 2.133 6.252 2.06 7.877 2.012 8.943 2 9.285 2 12c0 2.717.012 3.057.06 4.123.075 1.625.472 3.053 1.618 4.199 1.146 1.146 2.574 1.544 4.199 1.618 1.066.048 1.408.06 4.123.06s3.057-.012 4.123-.06c1.625-.075 3.053-.472 4.199-1.618 1.146-1.146 1.544-2.574 1.618-4.199.048-1.066.06-1.408.06-4.123s-.012-3.057-.06-4.123c-.075-1.625-.472-3.053-1.618-4.199-1.147-1.145-2.574-1.545-4.199-1.618C15.057 2.012 14.715 2 12 2z" }),
        react_1.default.createElement("path", { fill: props.isDisabled ? branding_1.color.gray : props.iconColor, d: "M12 6.865a5.136 5.136 0 1 0 .001 10.271A5.136 5.136 0 0 0 12 6.865zm0 8.468a3.332 3.332 0 1 1 0-6.666 3.332 3.332 0 1 1 0 6.666z" }),
        react_1.default.createElement("circle", { fill: props.isDisabled ? branding_1.color.gray : props.iconColor, fillRule: "nonzero", cx: "17.338", cy: "6.662", r: "1.2" })))); };
exports.InstagramIcon = InstagramIcon;
exports.InstagramIcon.defaultProps = icon_1.BaseIconDefaultProps;
