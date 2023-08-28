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
exports.Address = void 0;
var react_1 = __importDefault(require("react"));
var interfaces_1 = require("../_utils/interfaces");
var bullet_1 = require("../bullet");
var Address_style_1 = require("./Address.style");
var ItineraryItem_1 = require("./internals/ItineraryItem");
var Address = function (_a) {
    var prevLine = _a.prevLine, nextLine = _a.nextLine, label = _a.label, subLabel = _a.subLabel, time = _a.time, _b = _a.bullet, bullet = _b === void 0 ? react_1.default.createElement(bullet_1.Bullet, { type: bullet_1.BulletTypes.DEFAULT }) : _b, href = _a.href, proximity = _a.proximity, _c = _a.highlighted, highlighted = _c === void 0 ? false : _c, props = __rest(_a, ["prevLine", "nextLine", "label", "subLabel", "time", "bullet", "href", "proximity", "highlighted"]);
    return (react_1.default.createElement(ItineraryItem_1.ItineraryItem, __assign({ prevLine: prevLine, nextLine: nextLine, time: time, bullet: bullet, href: href }, (0, interfaces_1.pickA11yProps)(props)),
        react_1.default.createElement(Address_style_1.StyledContent, { hasLink: !!href },
            react_1.default.createElement(Address_style_1.StyledLabel, { "$highlighted": highlighted }, label),
            subLabel && react_1.default.createElement(Address_style_1.StyledSubLabel, { "$highlighted": highlighted }, subLabel),
            proximity && react_1.default.createElement(Address_style_1.StyledProximity, null, proximity),
            href && react_1.default.createElement(Address_style_1.StyledChevronIcon, null))));
};
exports.Address = Address;
