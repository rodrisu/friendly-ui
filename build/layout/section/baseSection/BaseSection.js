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
exports.BaseSection = exports.SectionContentSize = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var BaseSection_style_1 = require("./BaseSection.style");
var SectionContentSize;
(function (SectionContentSize) {
    SectionContentSize["SMALL"] = "small";
    SectionContentSize["LARGE"] = "large";
})(SectionContentSize || (exports.SectionContentSize = SectionContentSize = {}));
/**
 * The core section: It sections horizontally a page while fitting its
 * content in width-constrained and centered column.
 */
var BaseSection = function (props) {
    var className = props.className, contentClassName = props.contentClassName, backgroundStyle = props.backgroundStyle, _a = props.tagName, ContentElement = _a === void 0 ? 'div' : _a, children = props.children, role = props.role, _b = props.contentSize, contentSize = _b === void 0 ? SectionContentSize.SMALL : _b, noHorizontalSpacing = props.noHorizontalSpacing;
    var contentClassNames = (0, classcat_1.default)([
        'section-content',
        contentClassName,
        {
            'section-content--large': contentSize === SectionContentSize.LARGE,
            'section-content--noHorizontalSpacing': noHorizontalSpacing,
        },
    ]);
    var contentProps = {
        className: contentClassNames,
    };
    if (role) {
        contentProps.role = role;
    }
    return (react_1.default.createElement(BaseSection_style_1.StyledBaseSection, { role: "presentation", className: (0, classcat_1.default)([className]), style: backgroundStyle },
        react_1.default.createElement(ContentElement, __assign({}, contentProps), children)));
};
exports.BaseSection = BaseSection;
