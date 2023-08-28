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
exports.ItemCheckbox = exports.ItemCheckboxStatus = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var checkboxIcon_1 = require("../_internals/checkboxIcon");
var ItemRadioCheckbox_style_1 = require("../_internals/item/ItemRadioCheckbox.style");
var useFocusVisible_1 = require("../_utils/focusVisibleProvider/useFocusVisible");
var interfaces_1 = require("../_utils/interfaces");
var text_1 = require("../text");
var ItemCheckboxStatus;
(function (ItemCheckboxStatus) {
    ItemCheckboxStatus["DEFAULT"] = "default";
    ItemCheckboxStatus["LOADING"] = "loading";
})(ItemCheckboxStatus || (exports.ItemCheckboxStatus = ItemCheckboxStatus = {}));
var ItemCheckbox = function (props) {
    var label = props.label, name = props.name, data = props.data, className = props.className, labelTitle = props.labelTitle, leftAddon = props.leftAddon, dataInfo = props.dataInfo, _a = props.checked, checked = _a === void 0 ? false : _a, disabled = props.disabled, status = props.status, _b = props.hasHorizontalSpacing, hasHorizontalSpacing = _b === void 0 ? false : _b;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    var isLoading = status === ItemCheckboxStatus.LOADING;
    var _c = (0, useFocusVisible_1.useFocusVisible)(), focusVisible = _c.focusVisible, onFocus = _c.onFocus, onBlur = _c.onBlur;
    var checkbox = (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("input", { type: "checkbox", name: name, checked: checked, onChange: function () {
                props.onChange({ name: name, value: !checked });
            }, onFocus: onFocus, onBlur: onBlur, disabled: disabled || isLoading }),
        react_1.default.createElement(checkboxIcon_1.CheckboxIcon, { isChecked: checked, isLoading: isLoading, isDisabled: disabled })));
    return (react_1.default.createElement(ItemRadioCheckbox_style_1.ItemRadioCheckbox, __assign({ className: (0, classcat_1.default)(['kirk-item-checkbox', className, { 'focus-visible': focusVisible }]), leftTitle: labelTitle, leftBody: label, leftAddon: leftAddon, rightTitle: data, rightTitleDisplay: text_1.TextDisplayType.SUBHEADERSTRONG, rightBody: dataInfo, 
        /* No a11y issue here
          - The input is well wrapped with the label
          - The linter can't access the complex components implementation
        */
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        tag: react_1.default.createElement("label", null), rightAddon: checkbox, isClickable: !disabled, disabled: disabled, hasHorizontalSpacing: hasHorizontalSpacing }, a11yAttrs)));
};
exports.ItemCheckbox = ItemCheckbox;
