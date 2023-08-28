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
exports.ItemEditableInfo = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var item_1 = require("../_internals/item");
var branding_1 = require("../_utils/branding");
var useFocusVisible_1 = require("../_utils/focusVisibleProvider/useFocusVisible");
var interfaces_1 = require("../_utils/interfaces");
var text_1 = require("../text");
var ItemEditableInfo = function (props) {
    var className = props.className, label = props.label, value = props.value, _a = props.href, href = _a === void 0 ? null : _a, tag = props.tag, _b = props.readonly, readonly = _b === void 0 ? false : _b, onClick = props.onClick;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    var _c = (0, useFocusVisible_1.useFocusVisible)(), focusVisible = _c.focusVisible, onFocus = _c.onFocus, onBlur = _c.onBlur;
    var extraProps = {
        isClickable: true,
        href: href,
        tag: tag,
        // For the ItemEditableInfo, the value (entered previously by the user)
        // is the most important info and is visually bigger than the
        // label for it.
        leftTitleDisplay: text_1.TextDisplayType.BODY,
        leftBodyDisplay: text_1.TextDisplayType.TITLE,
        // The value is modifiable and get the primary color (i.e. the action
        // bright blue color).
        leftTitleColor: branding_1.color.lightMidnightGreen,
        leftBodyColor: branding_1.color.blue,
    };
    if (readonly) {
        delete extraProps.href;
        extraProps.isClickable = false;
        // Override the primary color from the non modifiable value.
        extraProps.leftBodyColor = branding_1.color.midnightGreen;
    }
    if (onClick && !href) {
        // eslint-disable-next-line react/button-has-type
        extraProps.tag = react_1.default.createElement("button", null);
    }
    return (react_1.default.createElement(item_1.Item, __assign({ onClick: onClick, onFocus: onFocus, onBlur: onBlur, className: (0, classcat_1.default)([
            className,
            {
                'focus-visible': focusVisible,
            },
        ]), leftTitle: label, leftBody: value }, extraProps, a11yAttrs)));
};
exports.ItemEditableInfo = ItemEditableInfo;
