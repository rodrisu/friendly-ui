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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var interfaces_1 = require("../_utils/interfaces");
var avatar_1 = require("../avatar");
var text_1 = require("../text");
var body_1 = require("../typography/body");
var Profile_style_1 = require("./Profile.style");
var rating_1 = require("./rating");
var Profile = function (props) {
    var className = props.className, mainTitle = props.mainTitle, info = props.info, picture = props.picture, alt = props.alt, isIdChecked = props.isIdChecked, isMedium = props.isMedium, isLink = props.isLink, score = props.score, ratings = props.ratings, ratingsLabel = props.ratingsLabel, href = props.href, onClick = props.onClick, onBlur = props.onBlur, onFocus = props.onFocus, onMouseDown = props.onMouseDown;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    var showChevron = isLink || !!href || !!onClick;
    var getLeftBody = ratings > 0 ? (react_1.default.createElement(rating_1.Rating, { ratings: ratings, score: score }, ratingsLabel)) : (info && react_1.default.createElement(body_1.TextBody, null, info));
    return (react_1.default.createElement(Profile_style_1.StyledProfile, __assign({ className: (0, classcat_1.default)([className, { 'kirk-profile-size-medium': isMedium }]), leftTitle: mainTitle, leftTitleDisplay: isMedium ? text_1.TextDisplayType.DISPLAY1 : text_1.TextDisplayType.TITLE, leftBody: getLeftBody, rightAddon: picture && (react_1.default.createElement(avatar_1.Avatar, { image: picture, alt: alt, isIdChecked: isIdChecked, isMedium: isMedium })), chevron: showChevron, href: href, onClick: onClick, onBlur: onBlur, onFocus: onFocus, onMouseDown: onMouseDown, isClickable: showChevron, hasClickableColorRules: true }, a11yAttrs)));
};
exports.Profile = Profile;
