"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterBar = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var button_1 = require("../button");
var loader_1 = require("../loader");
var title_1 = require("../typography/title");
var FilterBar_style_1 = require("./FilterBar.style");
var FilterBar = function (_a) {
    var supplyInfo = _a.supplyInfo, _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, onClick = _a.onClick, ctaText = _a.ctaText;
    return (react_1.default.createElement(FilterBar_style_1.StyledFilterBar, null,
        isLoading ? (react_1.default.createElement(loader_1.Loader, { inline: true, size: 32 })) : (react_1.default.createElement(FilterBar_style_1.StyledSupplyInfo, null, supplyInfo.map(function (supply) { return (react_1.default.createElement(FilterBar_style_1.StyledSupplyInfoItem, { key: supply.ariaLabel, "aria-label": supply.ariaLabel },
            react_1.default.createElement(supply.icon, { iconColor: branding_1.color.midnightGreen, size: "32", isDisabled: supply.isDisabled, title: supply.iconTitle }),
            react_1.default.createElement(title_1.TextTitle, { isDisabled: supply.isDisabled }, supply.liquidity))); }))),
        react_1.default.createElement(FilterBar_style_1.StyledCta, null,
            react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.PRIMARY, onClick: function (evt) {
                    if (!isLoading) {
                        onClick(evt);
                    }
                } }, ctaText))));
};
exports.FilterBar = FilterBar;
