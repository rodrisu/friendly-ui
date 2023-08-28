"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.ItemChoice = exports.ItemChoiceStatus = exports.ItemChoiceStyle = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var item_1 = require("../_internals/item");
var branding_1 = require("../_utils/branding");
var focusVisibleProvider_1 = require("../_utils/focusVisibleProvider");
var interfaces_1 = require("../_utils/interfaces");
var loader_1 = require("../loader");
var text_1 = require("../text");
var ItemChoiceStyle;
(function (ItemChoiceStyle) {
    ItemChoiceStyle["PRIMARY"] = "primary";
    ItemChoiceStyle["SECONDARY"] = "secondary";
    ItemChoiceStyle["RECOMMENDED"] = "recommended";
})(ItemChoiceStyle || (exports.ItemChoiceStyle = ItemChoiceStyle = {}));
exports.ItemChoiceStatus = item_1.ItemStatus;
var ItemChoice = /** @class */ (function (_super) {
    __extends(ItemChoice, _super);
    function ItemChoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ItemChoice.prototype, "rightAddon", {
        get: function () {
            var _a = this.props, status = _a.status, rightAddon = _a.rightAddon, onDoneAnimationEnd = _a.onDoneAnimationEnd;
            if (status === item_1.ItemStatus.LOADING) {
                return react_1.default.createElement(loader_1.Loader, { inline: true, size: 24 });
            }
            if (status === item_1.ItemStatus.CHECKED) {
                return react_1.default.createElement(loader_1.Loader, { inline: true, size: 24, done: true, onDoneAnimationEnd: onDoneAnimationEnd });
            }
            return rightAddon;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemChoice.prototype, "labelColor", {
        get: function () {
            var _a = this.props, style = _a.style, disabled = _a.disabled;
            if (disabled) {
                return branding_1.color.gray;
            }
            if (style === ItemChoiceStyle.RECOMMENDED) {
                return branding_1.color.blue;
            }
            if (style === ItemChoiceStyle.SECONDARY) {
                return branding_1.color.lightMidnightGreen;
            }
            return branding_1.color.midnightGreen;
        },
        enumerable: false,
        configurable: true
    });
    ItemChoice.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, labelInfo = _a.labelInfo, data = _a.data, dataInfo = _a.dataInfo, _b = _a.dataAriaProps, dataAriaProps = _b === void 0 ? {} : _b, _c = _a.dataStrikeThrough, dataStrikeThrough = _c === void 0 ? false : _c, leftAddon = _a.leftAddon, href = _a.href, onClick = _a.onClick, onFocus = _a.onFocus, onBlur = _a.onBlur, onMouseDown = _a.onMouseDown, style = _a.style, status = _a.status, disabled = _a.disabled, className = _a.className, _d = _a.hasHorizontalSpacing, hasHorizontalSpacing = _d === void 0 ? false : _d, tabIndex = _a.tabIndex, _e = _a.tagLabel, tagLabel = _e === void 0 ? '' : _e;
        var a11yAttrs = (0, interfaces_1.pickA11yProps)(this.props);
        var isRecommended = style === ItemChoiceStyle.RECOMMENDED;
        return (react_1.default.createElement(focusVisibleProvider_1.FocusVisibleContext.Consumer, null, function (context) { return (react_1.default.createElement(item_1.Item, __assign({ className: (0, classcat_1.default)([
                'kirk-item-choice',
                {
                    'focus-visible': context,
                },
                className,
            ]), leftTitle: label, leftTitleDisplay: isRecommended ? text_1.TextDisplayType.SUBHEADER : text_1.TextDisplayType.TITLE, leftBody: labelInfo, leftBodyColor: disabled ? branding_1.color.gray : branding_1.color.lightMidnightGreen, leftTitleColor: _this.labelColor, rightTitle: data, rightTitleDisplay: text_1.TextDisplayType.SUBHEADERSTRONG, rightTitleColor: _this.labelColor, rightTitleStrikeThrough: dataStrikeThrough, rightTitleAriaProps: dataAriaProps, rightBody: dataInfo, rightBodyColor: disabled ? branding_1.color.gray : branding_1.color.lightMidnightGreen, leftAddon: leftAddon, rightAddon: _this.rightAddon, href: !disabled ? href : '', tag: react_1.default.createElement("button", { type: "button", disabled: disabled, tabIndex: tabIndex }), onClick: !disabled ? onClick : null, onFocus: !disabled ? onFocus : null, onBlur: !disabled ? onBlur : null, onMouseDown: !disabled ? onMouseDown : null, highlighted: isRecommended, chevron: status === item_1.ItemStatus.DEFAULT, isClickable: !disabled, hasHorizontalSpacing: hasHorizontalSpacing, tagLabel: tagLabel }, a11yAttrs))); }));
    };
    ItemChoice.defaultProps = {
        label: '',
        labelInfo: '',
        data: '',
        dataInfo: '',
        className: '',
        href: '',
        status: item_1.ItemStatus.DEFAULT,
        style: ItemChoiceStyle.PRIMARY,
        disabled: false,
        tabIndex: null,
    };
    return ItemChoice;
}(react_1.PureComponent));
exports.ItemChoice = ItemChoice;
