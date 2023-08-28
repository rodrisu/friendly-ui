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
exports.CheckIcon = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var defaultBackgroundColor = 'transparent';
var CheckIcon = function (_a) {
    var absolute = _a.absolute, validate = _a.validate, backgroundColor = _a.backgroundColor, thin = _a.thin, props = __rest(_a, ["absolute", "validate", "backgroundColor", "thin"]);
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { iconClassName: (0, classcat_1.default)([
            'kirk-icon-check',
            props.iconClassName,
            {
                validate: validate,
                absolute: absolute,
            },
        ]) }),
        react_1.default.createElement("path", { d: "M6.5 12.5l4 4 8-8", fill: "none", strokeWidth: thin ? '1' : '2', strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10" })));
};
var StyledCheckIcon = (0, styled_components_1.default)(CheckIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    background-color: ", ";\n    border-radius: 100%;\n  }\n\n  & path {\n    stroke: ", ";\n  }\n\n  &.absolute {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n\n  &.validate path {\n    stroke-dasharray: 24;\n    stroke-dashoffset: 24;\n    stroke-linecap: round;\n    animation: dash 0.5s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n  }\n\n  @keyframes dash {\n    from {\n      stroke-dashoffset: 24;\n    }\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n"], ["\n  & {\n    background-color: ", ";\n    border-radius: 100%;\n  }\n\n  & path {\n    stroke: ", ";\n  }\n\n  &.absolute {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n\n  &.validate path {\n    stroke-dasharray: 24;\n    stroke-dashoffset: 24;\n    stroke-linecap: round;\n    animation: dash 0.5s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n  }\n\n  @keyframes dash {\n    from {\n      stroke-dashoffset: 24;\n    }\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n"])), function (props) {
    return props.isDisabled && props.backgroundColor !== defaultBackgroundColor
        ? branding_1.color.gray
        : props.backgroundColor;
}, function (props) {
    // If there's an outer background circle, filled,
    // then when disabled it's the background that turns gray and the check is white.
    // If not (transparent default background), we gray out the check (path) when disabled.
    if (props.isDisabled && props.backgroundColor !== defaultBackgroundColor) {
        return branding_1.color.white;
    }
    if (props.isDisabled) {
        return branding_1.color.gray;
    }
    return props.iconColor;
});
exports.CheckIcon = StyledCheckIcon;
StyledCheckIcon.defaultProps = __assign(__assign({}, icon_1.BaseIconDefaultProps), { absolute: false, validate: false, backgroundColor: defaultBackgroundColor, thin: false });
var templateObject_1;
