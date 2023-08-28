"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllustratedSection = void 0;
var react_1 = __importDefault(require("react"));
var baseSection_1 = require("../../../layout/section/baseSection");
var IllustratedSection_style_1 = require("./IllustratedSection.style");
/**
 * A specialized section which show some content with an illustration.
 */
var IllustratedSection = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, illustration = _a.illustration;
    return (react_1.default.createElement(IllustratedSection_style_1.StyledIllustratedSection, null,
        react_1.default.createElement(baseSection_1.BaseSection, { tagName: "article", className: className, contentSize: baseSection_1.SectionContentSize.LARGE, noHorizontalSpacing: true },
            react_1.default.createElement("div", { className: "kirk-illustratedSection-illustration" }, illustration),
            react_1.default.createElement("div", { className: "kirk-illustratedSection-content" }, children))));
};
exports.IllustratedSection = IllustratedSection;
