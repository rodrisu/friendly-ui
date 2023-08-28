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
exports.ProfileLeft = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var interfaces_1 = require("../_utils/interfaces");
var avatar_1 = require("../avatar");
var icon_1 = require("../icon");
var body_1 = require("../typography/body");
var ProfileLeft_style_1 = require("./ProfileLeft.style");
var renderSubInfo = function (additionalInfo, averageRating) {
    if (!additionalInfo && !averageRating) {
        return null;
    }
    if (additionalInfo) {
        return (react_1.default.createElement(ProfileLeft_style_1.StyledSubInfo, null,
            react_1.default.createElement(body_1.TextBody, null, additionalInfo)));
    }
    if (averageRating) {
        return (react_1.default.createElement(ProfileLeft_style_1.StyledSubInfo, null,
            react_1.default.createElement(icon_1.StarIcon, { fill: 1, size: 16 }),
            react_1.default.createElement(ProfileLeft_style_1.StyledRatingLabel, null,
                react_1.default.createElement(body_1.TextBody, null, averageRating))));
    }
    return null;
};
var renderOptionList = function (options) {
    if (!options.length) {
        return null;
    }
    return (react_1.default.createElement(ProfileLeft_style_1.StyledOptionList, null, options.map(function (option) {
        return (react_1.default.createElement(ProfileLeft_style_1.StyledOption, { key: option.label, title: option.label }, option.icon));
    })));
};
function ProfileLeft(props) {
    var className = props.className, displayName = props.displayName, pictureUrl = props.pictureUrl, additionalInfo = props.additionalInfo, averageRating = props.averageRating, _a = props.isIdChecked, isIdChecked = _a === void 0 ? false : _a, _b = props.options, options = _b === void 0 ? [] : _b, _c = props.noHorizontalSpacing, noHorizontalSpacing = _c === void 0 ? false : _c;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    var subInfo = renderSubInfo(additionalInfo, averageRating);
    var optionList = renderOptionList(options);
    return (react_1.default.createElement(ProfileLeft_style_1.StyledProfileLeft, __assign({ className: (0, classcat_1.default)(className), leftTitle: displayName, leftBody: subInfo, leftAddon: react_1.default.createElement(avatar_1.Avatar, { alt: displayName, image: pictureUrl, isIdChecked: isIdChecked }), rightAddon: optionList, hasClickableColorRules: true, noHorizontalSpacing: noHorizontalSpacing }, a11yAttrs)));
}
exports.ProfileLeft = ProfileLeft;
