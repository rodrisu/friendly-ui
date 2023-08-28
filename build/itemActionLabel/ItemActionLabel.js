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
exports.ItemActionLabel = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var item_1 = require("../_internals/item");
var branding_1 = require("../_utils/branding");
var useFocusVisible_1 = require("../_utils/focusVisibleProvider/useFocusVisible");
var interfaces_1 = require("../_utils/interfaces");
var ItemActionLabel = function (props) {
    var className = props.className, labelTitle = props.labelTitle, subLabel = props.subLabel, action = props.action, leftAddon = props.leftAddon, href = props.href, onClick = props.onClick, onMouseDown = props.onMouseDown, _a = props.hasHorizontalSpacing, hasHorizontalSpacing = _a === void 0 ? false : _a;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    var _b = (0, useFocusVisible_1.useFocusVisible)(), focusVisible = _b.focusVisible, onFocus = _b.onFocus, onBlur = _b.onBlur;
    return (react_1.default.createElement(item_1.Item, __assign({ className: (0, classcat_1.default)([
            {
                'focus-visible': focusVisible,
            },
            className,
        ]), leftAddon: leftAddon, leftTitle: labelTitle, leftBody: subLabel, rightBody: action, rightBodyColor: branding_1.color.blue, href: href, tag: !href ? react_1.default.createElement("button", { type: "button" }) : undefined, onClick: onClick, onBlur: onBlur, onFocus: onFocus, onMouseDown: onMouseDown, isClickable: true, isWrappable: true, hasHorizontalSpacing: hasHorizontalSpacing }, a11yAttrs)));
};
exports.ItemActionLabel = ItemActionLabel;
