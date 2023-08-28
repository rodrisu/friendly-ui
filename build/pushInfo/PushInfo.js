"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushInfo = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var PushInfo_style_1 = require("./PushInfo.style");
var PushInfo = function (_a) {
    var className = _a.className, icon = _a.icon, headline = _a.headline, content = _a.content, onAnimationEnd = _a.onAnimationEnd;
    (0, react_1.useEffect)(function () {
        if (onAnimationEnd) {
            setTimeout(onAnimationEnd, PushInfo_style_1.animationDuration + PushInfo_style_1.animationDelay);
        }
    }, [onAnimationEnd]);
    return (react_1.default.createElement(PushInfo_style_1.StyledPushInfoWrapper, { className: (0, classcat_1.default)(['kirk-pushInfo', className]) },
        react_1.default.createElement(PushInfo_style_1.StyledPushInfo, null,
            icon && react_1.default.createElement("div", { className: "kirk-pushInfo-icon" }, icon),
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", { className: (0, classcat_1.default)([
                        'kirk-pushInfo-headline',
                        { 'kirk-pushInfo-headline--standalone': !content },
                    ]) }, headline),
                content && react_1.default.createElement("p", { className: "kirk-pushInfo-content" }, content)))));
};
exports.PushInfo = PushInfo;
