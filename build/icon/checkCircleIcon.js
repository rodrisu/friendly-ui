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
exports.CheckCircleIcon = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var CheckCircleIcon = function (_a) {
    var background = _a.background, props = __rest(_a, ["background"]);
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props), background ? (react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.57 8.168a.5.5 0 010 .708l-6.957 6.956a.5.5 0 01-.707 0l-3.478-3.478a.5.5 0 11.707-.707l3.124 3.124 6.604-6.603a.5.5 0 01.707 0z" }))) : (react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.93478 12C2.93478 6.99339 6.99342 2.93475 12 2.93475C17.0066 2.93475 21.0652 6.99339 21.0652 12C21.0652 17.0066 17.0066 21.0652 12 21.0652C6.99342 21.0652 2.93478 17.0066 2.93478 12ZM12 1.93475C6.44114 1.93475 1.93478 6.4411 1.93478 12C1.93478 17.5588 6.44114 22.0652 12 22.0652C17.5589 22.0652 22.0652 17.5588 22.0652 12C22.0652 6.4411 17.5589 1.93475 12 1.93475ZM17.5708 8.87522C17.766 8.67996 17.766 8.36338 17.5708 8.16811C17.3755 7.97285 17.0589 7.97285 16.8637 8.16811L10.2607 14.7711L7.13599 11.6464C6.94073 11.4511 6.62415 11.4511 6.42889 11.6464C6.23362 11.8416 6.23362 12.1582 6.42889 12.3535L9.90715 15.8317C10.1024 16.027 10.419 16.027 10.6143 15.8317L17.5708 8.87522Z" }))));
};
var StyledCheckCircleIcon = (0, styled_components_1.default)(CheckCircleIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  path {\n    fill: ", ";\n  }\n\n  path + path {\n    fill: ", ";\n  }\n"], ["\n  path {\n    fill: ", ";\n  }\n\n  path + path {\n    fill: ", ";\n  }\n"])), function (props) { return (props.iconColor ? props.iconColor : branding_1.color.green); }, branding_1.color.white);
exports.CheckCircleIcon = StyledCheckCircleIcon;
StyledCheckCircleIcon.defaultProps = __assign(__assign({}, icon_1.BaseIconDefaultProps), { iconColor: branding_1.color.green, background: false });
var templateObject_1;
