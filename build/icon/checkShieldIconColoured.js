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
exports.CheckShieldIconColoured = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var CheckShieldIconColoured = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 49 48" }),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M37.239 21.028l-2.25 2.25L23.342 34.88a3.14 3.14 0 01-2.206.927c-.838 0-1.632-.309-2.206-.927L7.77 23.675c-.972-.97-.972-2.559 0-3.573l3.308-3.31a2.473 2.473 0 011.764-.75c.662 0 1.324.265 1.765.75l5.735 5.736c.22.22.486.309.794.309.31 0 .574-.133.794-.31l6.794-6.793 2.339-2.338 1.544-1.544c-.044-.045-.133-.045-.177-.089-4.367-1.676-7.544-3.882-11.823-8.117-5.735 5.78-9.617 7.897-18 10.014 0 16.588 5.736 26.78 18 32.029 10.588-4.544 16.235-12.617 17.647-25.323 0-.176.044-.309.044-.485l-1.06 1.147z", fill: branding_1.color.lightMidnightGreen }),
        react_1.default.createElement("path", { d: "M38.474 18.337l.044-.044-.044.044z", fill: branding_1.color.white }),
        react_1.default.createElement("path", { d: "M42.974 5.146a.56.56 0 00-.794 0l-1.72 1.72-5.692 5.691-11.426 11.426a3.14 3.14 0 01-2.206.927c-.838 0-1.632-.309-2.205-.927l-5.736-5.735c-.132-.132-.264-.132-.353-.132-.088 0-.22 0-.352.132l-3.31 3.309c-.22.22-.22.53 0 .706l11.162 11.161c.22.22.486.31.794.31.31 0 .574-.133.794-.31l13.28-13.279 5.426-5.426.044-.044.53-.53.352-.352.353-.353 4.28-4.28a.56.56 0 000-.794l-3.22-3.22z", fill: branding_1.color.boostBlue })))); };
exports.CheckShieldIconColoured = CheckShieldIconColoured;
CheckShieldIconColoured.defaultProps = __assign({}, icon_1.BaseIconDefaultProps);
