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
exports.Text = exports.TextTagType = exports.TextDisplayType = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var _utils_1 = require("../_utils");
var interfaces_1 = require("../_utils/interfaces");
var TextDisplayType;
(function (TextDisplayType) {
    TextDisplayType["BODY"] = "body";
    TextDisplayType["BODYSTRONG"] = "bodyStrong";
    TextDisplayType["BUTTON"] = "button";
    TextDisplayType["CAPTION"] = "caption";
    TextDisplayType["DISPLAY1"] = "display1";
    TextDisplayType["DISPLAY2"] = "display2";
    TextDisplayType["SUBHEADER"] = "subheader";
    TextDisplayType["SUBHEADERSTRONG"] = "subheaderStrong";
    TextDisplayType["TITLE"] = "title";
    TextDisplayType["TITLESTRONG"] = "titleStrong";
})(TextDisplayType || (exports.TextDisplayType = TextDisplayType = {}));
var TextTagType;
(function (TextTagType) {
    TextTagType["DIV"] = "div";
    TextTagType["PARAGRAPH"] = "p";
    TextTagType["SPAN"] = "span";
})(TextTagType || (exports.TextTagType = TextTagType = {}));
var baseClassName = 'kirk-text';
var cssColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
var Text = function (props) {
    var className = props.className, children = props.children, _a = props.display, display = _a === void 0 ? TextDisplayType.BODY : _a, _b = props.tag, tag = _b === void 0 ? TextTagType.SPAN : _b, textColor = props.textColor, _c = props.newlineToBr, newlineToBr = _c === void 0 ? true : _c, _d = props.itemProp, itemProp = _d === void 0 ? null : _d;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    var displayClassName = "".concat(baseClassName, "-").concat(display);
    var Tag = tag;
    var inlineStyle = cssColorRegex.test(textColor) ? { style: { color: textColor } } : null;
    return (react_1.default.createElement(Tag, __assign({ className: (0, classcat_1.default)([baseClassName, displayClassName, className]) }, inlineStyle, (itemProp && { itemProp: itemProp }), a11yAttrs), typeof children === 'string' && newlineToBr ? (0, _utils_1.replaceNewLineWithBR)(children) : children));
};
exports.Text = Text;
