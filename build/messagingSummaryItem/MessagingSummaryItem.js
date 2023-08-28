"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingSummaryItem = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var branding_1 = require("../_utils/branding");
var avatar_1 = require("../avatar");
var text_1 = require("../text");
var MessagingSummaryItem_style_1 = require("./MessagingSummaryItem.style");
var UNREAD_COLOR = branding_1.color.midnightGreen;
var READ_COLOR = branding_1.color.lightMidnightGreen;
var generateSubLabel = function (subLabel) { return (react_1.default.createElement("span", { className: "kirk-messaging-summary-item-sub-label" }, subLabel)); };
var MessagingSummaryItem = function (_a) {
    var className = _a.className, url = _a.url, pictureUrl = _a.pictureUrl, label = _a.label, subLabel = _a.subLabel, timeLabel = _a.timeLabel, hasUnreadMessages = _a.hasUnreadMessages, _b = _a.hasHorizontalSpacing, hasHorizontalSpacing = _b === void 0 ? false : _b;
    return (react_1.default.createElement(MessagingSummaryItem_style_1.StyledMessagingSummaryItem, { className: (0, classcat_1.default)(['kirk-messaging-summary-item', className]), leftTitle: label, leftTitleDisplay: text_1.TextDisplayType.TITLESTRONG, leftTitleColor: hasUnreadMessages ? UNREAD_COLOR : READ_COLOR, leftBody: generateSubLabel(subLabel), leftBodyDisplay: text_1.TextDisplayType.BODYSTRONG, leftBodyColor: hasUnreadMessages ? UNREAD_COLOR : READ_COLOR, leftBodyAnnotation: timeLabel, leftBodyAnnotationDisplay: text_1.TextDisplayType.CAPTION, rightAddon: react_1.default.createElement(avatar_1.Avatar, { image: pictureUrl }), chevron: true, href: url, isClickable: true, hasHorizontalSpacing: hasHorizontalSpacing }));
};
exports.MessagingSummaryItem = MessagingSummaryItem;
