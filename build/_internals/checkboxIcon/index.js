"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../../_utils/branding");
var checkIcon_1 = require("../../icon/checkIcon");
var circleIcon_1 = require("../../icon/circleIcon");
var loader_1 = require("../../loader");
var CheckboxIcon = function (_a) {
    var _b = _a.isChecked, isChecked = _b === void 0 ? false : _b, _c = _a.isLoading, isLoading = _c === void 0 ? false : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d;
    if (isLoading) {
        return react_1.default.createElement(loader_1.Loader, { size: 24, inline: true });
    }
    if (isChecked) {
        return (react_1.default.createElement(checkIcon_1.CheckIcon, { backgroundColor: branding_1.color.blue, iconColor: branding_1.color.white, isDisabled: isDisabled, thin: true }));
    }
    return react_1.default.createElement(circleIcon_1.CircleIcon, { iconColor: branding_1.color.blue, isDisabled: isDisabled });
};
exports.CheckboxIcon = CheckboxIcon;
