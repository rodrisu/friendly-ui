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
exports.HiddenStop = void 0;
var react_1 = __importDefault(require("react"));
var interfaces_1 = require("../_utils/interfaces");
var bullet_1 = require("../bullet");
var HiddenStop_style_1 = require("./HiddenStop.style");
var ItineraryItem_1 = require("./internals/ItineraryItem");
var Lines_1 = require("./Lines");
var HiddenStop = function (_a) {
    var label = _a.label, props = __rest(_a, ["label"]);
    return (react_1.default.createElement(ItineraryItem_1.ItineraryItem, __assign({ prevLine: Lines_1.Lines.ACTIVE, nextLine: Lines_1.Lines.ACTIVE, bullet: react_1.default.createElement(bullet_1.Bullet, { type: bullet_1.BulletTypes.DEFAULT }) }, (0, interfaces_1.pickA11yProps)(props)),
        react_1.default.createElement(HiddenStop_style_1.StyledLabel, null, label)));
};
exports.HiddenStop = HiddenStop;
