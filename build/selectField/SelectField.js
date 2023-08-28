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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectField = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var branding_1 = require("../_utils/branding");
var interfaces_1 = require("../_utils/interfaces");
var chevronIcon_1 = require("../icon/chevronIcon");
var SelectField_style_1 = require("./SelectField.style");
exports.SelectField = react_1.default.forwardRef(function (props, ref) {
    var name = props.name, className = props.className, defaultValue = props.defaultValue, options = props.options, onChange = props.onChange, _a = props.onFocus, onFocus = _a === void 0 ? function () { } : _a, _b = props.onBlur, onBlur = _b === void 0 ? function () { } : _b, disabled = props.disabled, required = props.required, focus = props.focus, autoFocus = props.autoFocus, autoComplete = props.autoComplete, _c = props.focusBorder, focusBorder = _c === void 0 ? true : _c;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    var baseClassName = 'kirk-selectField';
    var _d = (0, react_1.useState)(false), hasFocus = _d[0], setFocus = _d[1];
    var _e = (0, react_1.useState)(defaultValue), previousDefaultValue = _e[0], setPreviousDefaultValue = _e[1];
    var _f = (0, react_1.useState)(defaultValue), currentValue = _f[0], setCurrentValue = _f[1];
    (0, react_1.useEffect)(function () {
        if (ref && !disabled && focus) {
            ref.current.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disabled, focus]);
    (0, react_1.useEffect)(function () {
        if (defaultValue !== previousDefaultValue) {
            setPreviousDefaultValue(defaultValue);
            setCurrentValue(defaultValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValue]);
    return (react_1.default.createElement(SelectField_style_1.StyledSelectField, { className: (0, classcat_1.default)([
            baseClassName,
            className,
            hasFocus && focusBorder && "".concat(baseClassName, "--hasFocus"),
        ]) },
        react_1.default.createElement("div", { className: "kirk-selectField-background" },
            react_1.default.createElement("select", __assign({ name: name, onChange: function (event) {
                    setCurrentValue(event.target.value);
                    onChange({ name: name, value: event.target.value });
                }, onFocus: function (event) {
                    setFocus(true);
                    onFocus(event);
                }, onBlur: function (event) {
                    setFocus(false);
                    onBlur(event);
                }, defaultValue: defaultValue, value: currentValue, disabled: disabled, required: required, 
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus: autoFocus, autoComplete: autoComplete, ref: ref }, a11yAttrs), options.map(function (_a) {
                var value = _a.value, label = _a.label, optionA11yAttrs = __rest(_a, ["value", "label"]);
                return (react_1.default.createElement("option", __assign({ key: "".concat(value).concat(label), value: value }, optionA11yAttrs), label));
            })),
            react_1.default.createElement(chevronIcon_1.ChevronIcon, { iconColor: branding_1.color.lightMidnightGreen, direction: chevronIcon_1.ChevronIconDirections.DOWN }))));
});
