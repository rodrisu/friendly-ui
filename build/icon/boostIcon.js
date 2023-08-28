"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoostIcon = exports.BaseBoostIcon = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var BaseBoostIcon = function (_a) {
    var noBackground = _a.noBackground, props = __rest(_a, ["noBackground"]);
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.105 5.407a.402.402 0 01.367.12.392.392 0 01.121.367 13.196 13.196 0 01-2.896 7.59 3.019 3.019 0 01-.427 3.777L12.832 19.7l-2.122-2.102H6.83a.417.417 0 01-.428-.428v-3.898l-2.101-2.107 2.438-2.419a2.97 2.97 0 013.75-.397 12.72 12.72 0 017.616-2.942zm-4.936 5.421a1.734 1.734 0 00-2.438 0L9.514 12.05a1.726 1.726 0 002.433 2.44l1.222-1.217a1.736 1.736 0 000-2.445z", fill: branding_1.color.white })));
};
exports.BaseBoostIcon = BaseBoostIcon;
exports.BaseBoostIcon.defaultProps = icon_1.BaseIconDefaultProps;
exports.BoostIcon = (0, styled_components_1.default)(exports.BaseBoostIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 50%;\n"], ["\n  background: ", ";\n  border-radius: 50%;\n"])), function (props) { return (props.noBackground ? '' : branding_1.gradientColors.blueGradient); });
var templateObject_1;
