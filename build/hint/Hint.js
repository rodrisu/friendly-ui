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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hint = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var lodash_uniqueid_1 = __importDefault(require("lodash.uniqueid"));
var interfaces_1 = require("../_utils/interfaces");
var Hint_style_1 = require("./Hint.style");
var HintBubble_1 = require("./HintBubble");
var Hint = function (props) {
    var mainTitle = props.mainTitle, children = props.children, _a = props.className, className = _a === void 0 ? '' : _a, _b = props.description, description = _b === void 0 ? '' : _b, _c = props.position, position = _c === void 0 ? HintBubble_1.HintBubblePosition.ABOVE : _c, _d = props.closeButtonTitle, closeButtonTitle = _d === void 0 ? '' : _d, _e = props.onClose, onClose = _e === void 0 ? function () { } : _e, _f = props.hidden, hidden = _f === void 0 ? false : _f;
    var _g = (0, react_1.useState)(hidden), hiddenBubble = _g[0], closeBubble = _g[1];
    var id = (0, lodash_uniqueid_1.default)('kirk-hint-');
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    return (react_1.default.createElement(Hint_style_1.StyledHint, __assign({ className: (0, classcat_1.default)([className, { 'hidden-bubble': hiddenBubble }]) }, a11yAttrs, { "aria-live": "polite" }),
        !hiddenBubble && (react_1.default.createElement(HintBubble_1.HintBubble, { mainTitle: mainTitle, description: description, closeButtonTitle: closeButtonTitle, position: position, onClose: function () {
                closeBubble(true);
                onClose();
            }, id: id })),
        children(hiddenBubble ? {} : { 'aria-describedby': id })));
};
exports.Hint = Hint;
