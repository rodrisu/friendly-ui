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
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickA11yProps = void 0;
function pickA11yProps(source) {
    var initialValue = {};
    var keys = [
        'id',
        'role',
        'title',
        'tabIndex',
        'aria-label',
        'aria-labelledby',
        'aria-describedby',
        'aria-controls',
    ];
    return keys.reduce(function (acc, key) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[key] = source[key], _a)));
    }, initialValue);
}
exports.pickA11yProps = pickA11yProps;
