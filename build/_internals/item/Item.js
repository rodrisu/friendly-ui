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
exports.Item = exports.ItemStatus = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var tag_1 = require("../../_internals/tag");
var branding_1 = require("../../_utils/branding");
var interfaces_1 = require("../../_utils/interfaces");
var chevronIcon_1 = require("../../icon/chevronIcon");
var text_1 = require("../../text");
var ItemStatus;
(function (ItemStatus) {
    ItemStatus["DEFAULT"] = "default";
    ItemStatus["LOADING"] = "loading";
    ItemStatus["CHECKED"] = "checked";
})(ItemStatus || (exports.ItemStatus = ItemStatus = {}));
var Item = function (props) {
    var chevron = props.chevron, className = props.className, href = props.href, onClick = props.onClick, onBlur = props.onBlur, onFocus = props.onFocus, onMouseDown = props.onMouseDown, highlighted = props.highlighted, isClickable = props.isClickable, _a = props.hasClickableColorRules, hasClickableColorRules = _a === void 0 ? false : _a, isWrappable = props.isWrappable, leftTitle = props.leftTitle, leftTitleButtonAddon = props.leftTitleButtonAddon, rightTitleStrikeThrough = props.rightTitleStrikeThrough, rightTitleAriaProps = props.rightTitleAriaProps, _b = props.leftTitleDisplay, leftTitleDisplay = _b === void 0 ? text_1.TextDisplayType.TITLE : _b, leftTitleColor = props.leftTitleColor, leftBody = props.leftBody, _c = props.leftBodyDisplay, leftBodyDisplay = _c === void 0 ? text_1.TextDisplayType.BODY : _c, leftBodyColor = props.leftBodyColor, leftBodyAnnotation = props.leftBodyAnnotation, leftBodyAnnotationDisplay = props.leftBodyAnnotationDisplay, leftBodyAnnotationColor = props.leftBodyAnnotationColor, leftAddon = props.leftAddon, rightTitle = props.rightTitle, _d = props.rightTitleDisplay, rightTitleDisplay = _d === void 0 ? text_1.TextDisplayType.TITLE : _d, rightTitleColor = props.rightTitleColor, rightTitleAddon = props.rightTitleAddon, rightBody = props.rightBody, rightBodyStrikeThrough = props.rightBodyStrikeThrough, rightBodyAriaProps = props.rightBodyAriaProps, _e = props.rightBodyDisplay, rightBodyDisplay = _e === void 0 ? text_1.TextDisplayType.BODY : _e, rightBodyColor = props.rightBodyColor, rightAddon = props.rightAddon, _f = props.tag, tag = _f === void 0 ? react_1.default.createElement("div", null) : _f, _g = props.hideHoverBackground, hideHoverBackground = _g === void 0 ? false : _g, _h = props.disabled, disabled = _h === void 0 ? false : _h, _j = props.tagLabel, tagLabel = _j === void 0 ? '' : _j;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    var Tag = tag.type;
    var tagProps = tag.props;
    if (href) {
        if (typeof href !== 'string') {
            Tag = href.type;
            tagProps = __assign(__assign({}, tagProps), href.props);
        }
        else {
            Tag = 'a';
            tagProps = { href: href };
        }
    }
    if (Tag === 'button') {
        // The code below make sure that if we use a HTML button, a proper type='button' or
        // type='submit' is added. type='button' is the default.
        // This type=button is needed to make sure non-submit buttons are not activated when
        // submitting forms.
        // See: https://stackoverflow.com/questions/4763638/enter-triggers-button-click
        var buttonType = tag.props.type || 'button';
        tagProps = __assign(__assign({}, tagProps), { type: buttonType });
    }
    var hasRightText = rightTitle || rightBody;
    var getTextColor = function (textColor) { return (disabled ? branding_1.color.gray : textColor); };
    var getLeftTitle = function (value) {
        if (react_1.default.isValidElement(value)) {
            return leftTitle;
        }
        var computeLeftTitleColor = function () {
            var colorValue = leftTitleColor;
            // Item clickable (ItemAction, ItemActionLAbel, ItemChoice, ...): 1 line => midnightGreen, 2 lines => midnightGreen + lightMidnightGreen
            // Item non clickable (ItemInfo, ItemData ...): 1 line => lightMidnightGreen, 2 lines => midnightGreen + lightMidnightGreen
            // Item (non-)editable info:  2 lines => lightMidnightGreen + midnightGreen/blue
            if (!leftBody && !highlighted && !isClickable && !hasClickableColorRules) {
                colorValue = branding_1.color.lightMidnightGreen;
            }
            return getTextColor(colorValue);
        };
        return (react_1.default.createElement(text_1.Text, { className: leftTitleButtonAddon ? 'kirk-item-title--withButtonAddon' : null, display: leftTitleDisplay, textColor: computeLeftTitleColor(), tag: text_1.TextTagType.SPAN },
            leftTitle,
            !href && leftTitleButtonAddon));
    };
    return (react_1.default.createElement(Tag, __assign({}, tagProps, { onClick: onClick, onFocus: onFocus, onBlur: onBlur, onMouseDown: onMouseDown, className: (0, classcat_1.default)([
            'kirk-item',
            {
                'kirk-item--highlighted': highlighted,
                'kirk-item--clickable': isClickable,
                'kirk-item--wrappable': isWrappable,
                'kirk-item--hideHoverBackground': hideHoverBackground,
            },
            className,
        ]) }, a11yAttrs),
        react_1.default.createElement("span", { className: "kirk-item-leftWrapper" },
            leftAddon && react_1.default.createElement("span", { className: "kirk-item-leftAddon" }, leftAddon),
            react_1.default.createElement("span", { className: "kirk-item-leftText" },
                tagLabel && (react_1.default.createElement("span", { className: "kirk-item-tagToken" },
                    react_1.default.createElement(tag_1.Tag, { label: tagLabel }))),
                leftTitle && getLeftTitle(leftTitle),
                leftBody && (react_1.default.createElement(text_1.Text, { className: "kirk-item-body", display: leftBodyDisplay, textColor: getTextColor(leftBodyColor), tag: text_1.TextTagType.SPAN }, leftBody)),
                leftBodyAnnotation && (react_1.default.createElement(text_1.Text, { className: "kirk-item-body-annotation", display: leftBodyAnnotationDisplay, textColor: getTextColor(leftBodyAnnotationColor), tag: text_1.TextTagType.SPAN }, leftBodyAnnotation)))),
        hasRightText && (react_1.default.createElement("span", { className: "kirk-item-rightText" },
            rightTitle && (react_1.default.createElement(text_1.Text, __assign({ className: (0, classcat_1.default)([
                    'kirk-item-title',
                    {
                        'kirk-item--strikethrough': rightTitleStrikeThrough,
                        'kirk-item-rightText--withAddon': Boolean(rightTitleAddon),
                    },
                ]), display: rightTitleDisplay, textColor: getTextColor(rightTitleColor), tag: text_1.TextTagType.DIV }, rightTitleAriaProps),
                rightTitleAddon,
                rightTitle)),
            rightBody && (react_1.default.createElement(text_1.Text, __assign({ className: (0, classcat_1.default)([
                    'kirk-item-body',
                    {
                        'kirk-item--strikethrough': rightBodyStrikeThrough,
                    },
                ]), display: rightBodyDisplay, textColor: getTextColor(rightBodyColor), tag: text_1.TextTagType.DIV }, rightBodyAriaProps), rightBody)))),
        rightAddon && react_1.default.createElement("span", { className: "kirk-item-rightAddon" }, rightAddon),
        chevron && (react_1.default.createElement("span", { className: "kirk-item-rightAddon" },
            react_1.default.createElement(chevronIcon_1.ChevronIcon, { iconColor: !isClickable ? branding_1.color.gray : branding_1.color.lightMidnightGreen })))));
};
exports.Item = Item;
