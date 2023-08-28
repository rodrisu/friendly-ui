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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.CircleIcon = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var styled_components_1 = __importStar(require("styled-components"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var offset = 187;
var duration = '1.4s';
var CircleIcon = function (_a) {
    var absolute = _a.absolute, spinning = _a.spinning, thin = _a.thin, innerDisc = _a.innerDisc, props = __rest(_a, ["absolute", "spinning", "thin", "innerDisc"]);
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 66 66", iconClassName: (0, classcat_1.default)([
            'kirk-icon-circle',
            props.iconClassName,
            {
                spinning: spinning,
                absolute: absolute,
                thin: thin,
            },
        ]) }),
        react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("circle", { className: "outer", cx: "33", cy: "33", r: "30", fill: "none" }),
            innerDisc && react_1.default.createElement("circle", { className: "inner", cx: "33", cy: "33", r: "18" }))));
};
var dashKeyframes = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n      stroke-dashoffset: ", ";\n    }\n    50% {\n      stroke-dashoffset: ", ";\n      transform: rotate(135deg);\n    }\n    100% {\n      stroke-dashoffset: ", ";\n      transform: rotate(450deg);\n    }\n  "], ["\n    0% {\n      stroke-dashoffset: ", ";\n    }\n    50% {\n      stroke-dashoffset: ", ";\n      transform: rotate(135deg);\n    }\n    100% {\n      stroke-dashoffset: ", ";\n      transform: rotate(450deg);\n    }\n  "])), offset, offset / 4, offset);
var rotatorKeyframes = (0, styled_components_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(270deg);\n    }\n  "], ["\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(270deg);\n    }\n  "])));
var StyledCircleIcon = (0, styled_components_1.default)(CircleIcon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &.spinning {\n    animation: ", " ", " linear infinite;\n  }\n\n  & circle {\n    stroke-width: 6;\n    stroke-linecap: round;\n  }\n\n  &.spinning circle {\n    stroke-dasharray: ", ";\n    stroke-dashoffset: 0;\n    transform-origin: center;\n    animation: ", " ", " ease-in-out infinite;\n  }\n\n  & circle.outer {\n    stroke: ", ";\n  }\n\n  & circle.inner {\n    stroke-width: 0;\n    fill: ", ";\n  }\n\n  &.thin circle {\n    stroke-width: 3;\n  }\n\n  &.absolute {\n    position: absolute;\n  }\n"], ["\n  &.spinning {\n    animation: ", " ", " linear infinite;\n  }\n\n  & circle {\n    stroke-width: 6;\n    stroke-linecap: round;\n  }\n\n  &.spinning circle {\n    stroke-dasharray: ", ";\n    stroke-dashoffset: 0;\n    transform-origin: center;\n    animation: ", " ", " ease-in-out infinite;\n  }\n\n  & circle.outer {\n    stroke: ", ";\n  }\n\n  & circle.inner {\n    stroke-width: 0;\n    fill: ", ";\n  }\n\n  &.thin circle {\n    stroke-width: 3;\n  }\n\n  &.absolute {\n    position: absolute;\n  }\n"])), rotatorKeyframes, duration, offset, dashKeyframes, duration, function (props) { return (props.isDisabled ? branding_1.color.gray : props.iconColor); }, function (props) { return (props.isDisabled ? branding_1.color.gray : props.iconColor); });
exports.CircleIcon = StyledCircleIcon;
StyledCircleIcon.defaultProps = __assign(__assign({}, icon_1.BaseIconDefaultProps), { absolute: false, spinning: false, thin: false, innerDisc: false });
var templateObject_1, templateObject_2, templateObject_3;
