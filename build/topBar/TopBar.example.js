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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedInTopBar = exports.LoggedOutTopBar = exports.SimpleTopBar = void 0;
var react_1 = __importStar(require("react"));
var addon_knobs_1 = require("@storybook/addon-knobs");
var branding_1 = require("../_utils/branding");
var avatar_1 = require("../avatar");
var button_1 = require("../button");
var arrowIcon_1 = require("../icon/arrowIcon");
var bankIcon_1 = require("../icon/bankIcon");
var bubbleIcon_1 = require("../icon/bubbleIcon");
var coinIcon_1 = require("../icon/coinIcon");
var crossDiscIcon_1 = require("../icon/crossDiscIcon");
var homeIcon_1 = require("../icon/homeIcon");
var myRides_1 = require("../icon/myRides");
var profileIcon_1 = require("../icon/profileIcon");
var itemChoice_1 = require("../itemChoice");
var index_1 = require("./index");
var leftAction = (react_1.default.createElement(button_1.Button, { isBubble: true, status: button_1.ButtonStatus.UNSTYLED, onClick: function () { }, "aria-label": "back" },
    react_1.default.createElement(arrowIcon_1.ArrowIcon, { iconColor: branding_1.color.blue })));
var rightAction = (react_1.default.createElement("span", { style: __assign(__assign({}, branding_1.font.m), { padding: '12px', color: branding_1.color.blue }) }, "Need help?"));
var centerContent = (react_1.default.createElement("div", null,
    react_1.default.createElement("span", { style: __assign(__assign({}, branding_1.font.m), { color: branding_1.color.midnightGreen }) }, "Trip"),
    react_1.default.createElement("span", { style: __assign(__assign({}, branding_1.font.s), { display: 'block', color: branding_1.color.lightMidnightGreen }) }, "Paris \u2192 Lyon")));
var SimpleTopBar = function () { return (react_1.default.createElement(index_1.TopBar, { zIndex: 50, leftItem: (0, addon_knobs_1.boolean)('With leftItem', true) && leftAction, centerItem: (0, addon_knobs_1.boolean)('With centerItem', true) && centerContent, rightItem: (0, addon_knobs_1.boolean)('With rightItem', true) && rightAction })); };
exports.SimpleTopBar = SimpleTopBar;
var LoggedOutTopBar = function () {
    var _a = (0, react_1.useState)(false), drawerOpened = _a[0], setDrawerOpened = _a[1];
    var dropdownButton = (react_1.default.createElement(index_1.DropdownButton, { onClick: function () { return setDrawerOpened(!drawerOpened); } },
        react_1.default.createElement(avatar_1.Avatar, { isSmall: true, image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQ6I2RkZCI+PHBhdGggZmlsbD0iI0RERCIgZD0iTTAgMGg0OHY0OEgweiIvPjxwYXRoIGQ9Ik0yNCAyOWMyLjM3IDAgNS4yNC4yNDggNy42MTEuNzQ1IDMuODk5LjU0NCA2LjU4IDMuMTQzIDcuNzQgNy4wNzNDMzUuNjg1IDQxLjIwOCAzMC4xNjkgNDQgMjQgNDRjLTYuMTggMC0xMS43MDYtMi44MDMtMTUuMzc1LTcuMjA4IDEuMTA2LTMuNzk0IDMuNjgtNi4yMzcgNy43NjQtNy4wNDdDMTguNzU5IDI5LjI0OCAyMS42MjkgMjkgMjQgMjl6bTAtMjFhOCA4IDAgMDE4IDh2MmE4IDggMCAxMS0xNiAwdi0yYTggOCAwIDAxOC04eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==" })));
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(index_1.TopBar, { zIndex: 50, leftItem: dropdownButton }),
        react_1.default.createElement(index_1.Drawer, { zIndex: 40, open: drawerOpened, onClose: function () { return setDrawerOpened(false); } },
            react_1.default.createElement(index_1.Menu, null,
                react_1.default.createElement(itemChoice_1.ItemChoice, { label: "Log in" }),
                react_1.default.createElement(itemChoice_1.ItemChoice, { label: "Sign up" })))));
};
exports.LoggedOutTopBar = LoggedOutTopBar;
var LoggedInTopBar = function () {
    var _a = (0, react_1.useState)(false), drawerOpened = _a[0], setDrawerOpened = _a[1];
    var dropdownButton = (react_1.default.createElement(index_1.DropdownButton, { onClick: function () { return setDrawerOpened(!drawerOpened); } },
        react_1.default.createElement(avatar_1.Avatar, { isSmall: true, image: "https://cdn.blablacar.com/kairos/assets/build/images/default-db7a681a76da6d17918951bc2df77a25.png" })));
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(index_1.TopBar, { zIndex: 50, leftItem: dropdownButton }),
        react_1.default.createElement(index_1.Drawer, { zIndex: 40, open: drawerOpened, onClose: function () { return setDrawerOpened(false); } },
            react_1.default.createElement(index_1.Menu, null,
                react_1.default.createElement(itemChoice_1.ItemChoice, { label: "Dashboard", leftAddon: react_1.default.createElement(homeIcon_1.HomeIcon, null) }),
                react_1.default.createElement(itemChoice_1.ItemChoice, { label: "Your rides", leftAddon: react_1.default.createElement(myRides_1.MyRidesIcon, null) }),
                react_1.default.createElement(index_1.Menu.Divider, null),
                react_1.default.createElement(itemChoice_1.ItemChoice, { label: "Inbox", leftAddon: react_1.default.createElement(bubbleIcon_1.BubbleIcon, null) }),
                react_1.default.createElement(index_1.Menu.Divider, null),
                react_1.default.createElement(itemChoice_1.ItemChoice, { label: "Profile", leftAddon: react_1.default.createElement(profileIcon_1.ProfileIcon, null) }),
                react_1.default.createElement(index_1.Menu.Divider, null),
                react_1.default.createElement(itemChoice_1.ItemChoice, { label: "Transfers", leftAddon: react_1.default.createElement(coinIcon_1.CoinIcon, null) }),
                react_1.default.createElement(itemChoice_1.ItemChoice, { label: "Payments & refunds", leftAddon: react_1.default.createElement(bankIcon_1.BankIcon, null) }),
                react_1.default.createElement(index_1.Menu.Divider, null),
                react_1.default.createElement(itemChoice_1.ItemChoice, { label: "Log out", leftAddon: react_1.default.createElement(crossDiscIcon_1.CrossDiscIcon, null) })))));
};
exports.LoggedInTopBar = LoggedInTopBar;
