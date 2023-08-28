"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocusVisible = void 0;
var react_1 = require("react");
var focusVisibleProvider_1 = require("../focusVisibleProvider");
var useFocusVisible = function () {
    var _a = (0, react_1.useState)(false), isFocused = _a[0], setIsFocused = _a[1];
    var hadKeyboardEvent = (0, react_1.useContext)(focusVisibleProvider_1.FocusVisibleContext);
    var onFocus = (0, react_1.useCallback)(function () {
        setIsFocused(true);
    }, []);
    var onBlur = (0, react_1.useCallback)(function () {
        setIsFocused(false);
    }, []);
    return {
        focusVisible: hadKeyboardEvent && isFocused,
        onFocus: onFocus,
        onBlur: onBlur,
    };
};
exports.useFocusVisible = useFocusVisible;
