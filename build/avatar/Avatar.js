"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var _utils_1 = require("../_utils");
var branding_1 = require("../_utils/branding");
var badge_1 = require("../badge");
var checkIcon_1 = require("../icon/checkIcon");
var Avatar_style_1 = require("./Avatar.style");
var IdCheckBadge = (react_1.default.createElement(badge_1.Badge, { className: "kirk-avatar-badge--idCheck" },
    react_1.default.createElement(checkIcon_1.CheckIcon, { size: "100%", iconColor: branding_1.color.white })));
var unreadNotificationsBadge = function (unreadNotificationsCount, unreadNotificationsCountAriaLabel) { return (react_1.default.createElement(badge_1.Badge, { className: "kirk-avatar-badge--unreadNotifications", "aria-label": unreadNotificationsCountAriaLabel }, unreadNotificationsCount)); };
var Avatar = function (_a) {
    var isSmall = _a.isSmall, isMedium = _a.isMedium, isLarge = _a.isLarge, className = _a.className, image = _a.image, _b = _a.alt, alt = _b === void 0 ? '' : _b, isIdChecked = _a.isIdChecked, unreadNotificationsCount = _a.unreadNotificationsCount, unreadNotificationsCountAriaLabel = _a.unreadNotificationsCountAriaLabel;
    return (react_1.default.createElement(Avatar_style_1.StyledAvatar, { className: (0, classcat_1.default)([
            (0, _utils_1.prefix)({ small: isSmall, medium: isMedium, large: isLarge, image: !!image }, 'avatar-'),
            className,
            'kirk-avatar',
        ]) },
        image && react_1.default.createElement("img", { src: image, alt: alt }),
        unreadNotificationsCount &&
            unreadNotificationsBadge(unreadNotificationsCount, unreadNotificationsCountAriaLabel),
        isIdChecked && IdCheckBadge));
};
exports.Avatar = Avatar;
