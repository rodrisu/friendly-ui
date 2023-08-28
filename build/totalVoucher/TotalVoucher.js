"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalVoucher = void 0;
var react_1 = __importDefault(require("react"));
var contentDivider_1 = require("../divider/contentDivider");
var totalVoucher_1 = require("../illustration/totalVoucher");
var itemInfo_1 = require("../itemInfo");
var baseSection_1 = require("../layout/section/baseSection");
var TotalVoucher_style_1 = require("./TotalVoucher.style");
var TotalVoucher = function (_a) {
    var title = _a.title, subTitle = _a.subTitle, terms = _a.terms, stepsTitle = _a.stepsTitle, steps = _a.steps, button = _a.button;
    return (react_1.default.createElement(TotalVoucher_style_1.StyledTotalVoucher.Container, null,
        react_1.default.createElement(baseSection_1.BaseSection, { contentSize: baseSection_1.SectionContentSize.LARGE, noHorizontalSpacing: true },
            react_1.default.createElement(totalVoucher_1.TotalVoucherIllustration, null),
            react_1.default.createElement(TotalVoucher_style_1.StyledTotalVoucher.Card, { as: "div" },
                react_1.default.createElement(TotalVoucher_style_1.StyledTotalVoucher.Title, { as: "h2" }, title),
                react_1.default.createElement(TotalVoucher_style_1.StyledTotalVoucher.SubTitle, { as: "p" }, subTitle),
                react_1.default.createElement(TotalVoucher_style_1.StyledTotalVoucher.Terms, { action: terms.label, href: terms.href }),
                react_1.default.createElement(contentDivider_1.ContentDivider, null),
                react_1.default.createElement(TotalVoucher_style_1.StyledTotalVoucher.StepsTitle, { as: "p" }, stepsTitle),
                react_1.default.createElement(TotalVoucher_style_1.StyledTotalVoucher.Steps, null, steps.map(function (_a) {
                    var label = _a.label, description = _a.description;
                    return (react_1.default.createElement(itemInfo_1.ItemInfo, { tag: react_1.default.createElement("li", null), key: label, mainTitle: label, mainInfo: description }));
                })),
                react_1.default.createElement(TotalVoucher_style_1.StyledTotalVoucher.Button, null, button)))));
};
exports.TotalVoucher = TotalVoucher;
