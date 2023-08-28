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
exports.ItineraryItem = void 0;
var react_1 = __importDefault(require("react"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var interfaces_1 = require("../../_utils/interfaces");
var bullet_1 = require("../../bullet");
var titleStrong_1 = require("../../typography/titleStrong");
var ItineraryItem_style_1 = require("./ItineraryItem.style");
var Line_1 = require("./Line");
var ItineraryItem = function (_a) {
    var _b = _a.time, time = _b === void 0 ? null : _b, prevLine = _a.prevLine, nextLine = _a.nextLine, children = _a.children, _c = _a.bullet, bullet = _c === void 0 ? react_1.default.createElement(bullet_1.Bullet, null) : _c, _d = _a.href, href = _d === void 0 ? null : _d, props = __rest(_a, ["time", "prevLine", "nextLine", "children", "bullet", "href"]);
    // Renders <a>, custom component (SlugLink) or div based on href
    var Wrapper;
    var wrapperProps = {};
    if (!(0, lodash_isempty_1.default)(href) && typeof href !== 'string') {
        Wrapper = href.type;
        wrapperProps = href.props;
    }
    else if (typeof href === 'string') {
        Wrapper = 'a';
        wrapperProps = { href: href };
    }
    else {
        Wrapper = 'div';
    }
    return (react_1.default.createElement(ItineraryItem_style_1.StyledItineraryItem, __assign({}, (0, interfaces_1.pickA11yProps)(props), { hasLink: !!href }),
        react_1.default.createElement(Wrapper, __assign({}, wrapperProps),
            react_1.default.createElement(titleStrong_1.TextTitleStrong, { as: "time", "aria-hidden": (0, lodash_isempty_1.default)(time) }, time),
            react_1.default.createElement(Line_1.Line, { prevLine: prevLine, nextLine: nextLine, bullet: bullet }),
            children)));
};
exports.ItineraryItem = ItineraryItem;
