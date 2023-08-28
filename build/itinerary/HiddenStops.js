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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiddenStops = void 0;
var react_1 = __importStar(require("react"));
var interfaces_1 = require("../_utils/interfaces");
var bullet_1 = require("../bullet");
var HiddenStops_style_1 = require("./HiddenStops.style");
var Line_1 = require("./internals/Line");
var HiddenStops = function (_a) {
    var prevLine = _a.prevLine, nextLine = _a.nextLine, children = _a.children, label = _a.label, props = __rest(_a, ["prevLine", "nextLine", "children", "label"]);
    var stops = Array.isArray(children) ? children.length : 1;
    var _b = (0, react_1.useState)(stops > 1), hidden = _b[0], setHidden = _b[1];
    return (react_1.default.createElement(HiddenStops_style_1.StyledHiddenStops, __assign({ onClick: function () { return stops > 1 && setHidden(!hidden); }, role: "button", "aria-expanded": !hidden, stops: stops }, (0, interfaces_1.pickA11yProps)(props)),
        react_1.default.createElement(HiddenStops_style_1.StyledWrapper, null,
            react_1.default.createElement("time", { "aria-hidden": "true" }),
            react_1.default.createElement(Line_1.Line, { prevLine: prevLine, nextLine: nextLine, bullet: react_1.default.createElement(bullet_1.Bullet, { type: bullet_1.BulletTypes.DEFAULT }) }),
            stops > 1 && react_1.default.createElement(HiddenStops_style_1.StyledStopsCount, { as: "button" }, label)),
        react_1.default.createElement("ul", { "aria-hidden": hidden }, children)));
};
exports.HiddenStops = HiddenStops;
