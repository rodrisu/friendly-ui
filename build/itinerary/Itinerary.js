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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Itinerary = void 0;
var react_1 = __importStar(require("react"));
var interfaces_1 = require("../_utils/interfaces");
var Addon_1 = require("./Addon");
var Address_1 = require("./Address");
var Connection_1 = require("./Connection");
var HiddenStop_1 = require("./HiddenStop");
var HiddenStops_1 = require("./HiddenStops");
var Itinerary_style_1 = require("./Itinerary.style");
var Lines_1 = require("./Lines");
// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
var AddonType = (react_1.default.createElement(Addon_1.Addon, { label: "" })).type;
var ConnectionType = (react_1.default.createElement(Connection_1.Connection, { label: "" })).type;
var HiddenStopsType = (react_1.default.createElement(HiddenStops_1.HiddenStops, { label: "" },
    react_1.default.createElement(HiddenStop_1.HiddenStop, { label: "" }),
    react_1.default.createElement(HiddenStop_1.HiddenStop, { label: "" }))).type;
var AddressType = (react_1.default.createElement(Address_1.Address, { label: "" })).type;
// Magic to avoid having to define lines manually
var createChildrenWithLines = function (child, index, children) {
    var _a, _b;
    var prevLine = Lines_1.Lines.NONE;
    var nextLine = Lines_1.Lines.NONE;
    if (child.type === AddonType) {
        if (index === 0) {
            nextLine = Lines_1.Lines.INACTIVE;
        }
        if (index === children.length - 1) {
            prevLine = Lines_1.Lines.INACTIVE;
        }
    }
    if (child.type === ConnectionType) {
        prevLine = Lines_1.Lines.CONNECTION;
        nextLine = Lines_1.Lines.CONNECTION;
    }
    if (child.type === HiddenStopsType) {
        prevLine = Lines_1.Lines.HIDDEN_STOPS;
        nextLine = Lines_1.Lines.HIDDEN_STOPS;
    }
    // Prev line for Address
    if (child.type === AddressType && index > 0) {
        // eslint-disable-next-line default-case
        switch (children[index - 1].type) {
            case AddonType:
                prevLine = Lines_1.Lines.INACTIVE;
                break;
            case AddressType:
            case HiddenStopsType:
                prevLine = Lines_1.Lines.ACTIVE;
                break;
            case ConnectionType:
                prevLine = Lines_1.Lines.CONNECTION;
                break;
        }
    }
    // Next line for Address
    if (child.type === AddressType && index + 1 < children.length) {
        // eslint-disable-next-line default-case
        switch (children[index + 1].type) {
            case AddonType:
                nextLine = Lines_1.Lines.INACTIVE;
                break;
            case AddressType:
            case HiddenStopsType:
                nextLine = Lines_1.Lines.ACTIVE;
                break;
            case ConnectionType:
                nextLine = Lines_1.Lines.CONNECTION;
                break;
        }
    }
    return (0, react_1.cloneElement)(child, __assign(__assign({}, child.props), { nextLine: (_a = child.props.nextLine) !== null && _a !== void 0 ? _a : nextLine, prevLine: (_b = child.props.prevLine) !== null && _b !== void 0 ? _b : prevLine }));
};
var Itinerary = function (_a) {
    var children = _a.children, _b = _a.small, small = _b === void 0 ? false : _b, props = __rest(_a, ["children", "small"]);
    var childs = Array.isArray(children) ? children.filter(Boolean) : [children];
    return (react_1.default.createElement(Itinerary_style_1.StyledItinerary, __assign({ small: small }, (0, interfaces_1.pickA11yProps)(props)), childs.map(createChildrenWithLines)));
};
exports.Itinerary = Itinerary;
