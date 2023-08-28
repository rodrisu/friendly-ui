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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
var react_1 = __importStar(require("react"));
var bullet_1 = require("../../bullet");
var Line_style_1 = require("./Line.style");
var CUSTOM_ICON_SIZE = 20;
// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
var BulletType = (react_1.default.createElement(bullet_1.Bullet, null)).type;
var Line = function (_a) {
    var prevLine = _a.prevLine, nextLine = _a.nextLine, bullet = _a.bullet;
    var isIcon = bullet && bullet.type !== BulletType;
    // For icons, let's force the size to 20px.
    var icon = isIcon ? (0, react_1.cloneElement)(bullet, __assign(__assign({}, bullet.props), { size: CUSTOM_ICON_SIZE })) : bullet;
    return (react_1.default.createElement(Line_style_1.StyledLineWrapper, { "aria-hidden": "true" },
        react_1.default.createElement(Line_style_1.StyledLine, { line: prevLine }),
        icon && react_1.default.createElement(Line_style_1.StyledBullet, { isIcon: isIcon }, icon),
        react_1.default.createElement(Line_style_1.StyledLine, { line: nextLine })));
};
exports.Line = Line;
