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
exports.AutoCompleteOverlay = void 0;
var react_1 = __importDefault(require("react"));
var bullet_1 = require("../../../bullet");
var AutoCompleteOverlay = function (_a) {
    var renderAutocompleteComponent = _a.renderAutocompleteComponent, props = __rest(_a, ["renderAutocompleteComponent"]);
    var icon = (react_1.default.createElement("div", { className: "kirk-autoComplete-icon" },
        react_1.default.createElement(bullet_1.Bullet, { type: bullet_1.BulletTypes.SEARCH })));
    return renderAutocompleteComponent(__assign(__assign({}, props), { autoFocus: true, inputAddon: icon, embeddedInSearchForm: true }));
};
exports.AutoCompleteOverlay = AutoCompleteOverlay;
