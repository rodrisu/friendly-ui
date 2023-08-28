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
exports.BrandedVoice = void 0;
var react_1 = __importDefault(require("react"));
var brand_1 = require("../typography/brand");
var subHeader_1 = require("../typography/subHeader");
var BrandedVoice_style_1 = require("./BrandedVoice.style");
// Should we consider having icon sizes in branding?
var BRANDED_VOICE_ICON_SIZE = 40;
var BrandedVoice = function (_a) {
    var label = _a.label, subLabel = _a.subLabel, icon = _a.icon;
    return (react_1.default.createElement(BrandedVoice_style_1.StyledBrandedVoice, null,
        react_1.default.createElement(BrandedVoice_style_1.StyledWrapper, null,
            react_1.default.createElement(BrandedVoice_style_1.StyledIcon, null, react_1.default.cloneElement(icon, __assign(__assign({}, icon.props), { size: BRANDED_VOICE_ICON_SIZE }))),
            react_1.default.createElement(BrandedVoice_style_1.StyledContent, null,
                react_1.default.createElement(brand_1.TextBrand, { isInverted: true }, label),
                react_1.default.createElement(subHeader_1.TextSubHeader, null, subLabel)))));
};
exports.BrandedVoice = BrandedVoice;
