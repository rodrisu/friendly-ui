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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var button_1 = require("../button");
var body_1 = require("../typography/body");
var Paragraph_style_1 = require("./Paragraph.style");
var DEFAULT_MAX_CHAR_SIZE = 180;
var truncateText = function (text) { return "".concat(text.substring(0, DEFAULT_MAX_CHAR_SIZE), "\u2026"); };
function SimpleParagraph(props) {
    var className = props.className, itemProp = props.itemProp, children = props.children;
    return (react_1.default.createElement(Paragraph_style_1.StyledParagraph, { className: (0, classcat_1.default)(className), role: "presentation" },
        react_1.default.createElement(body_1.TextBody, { as: "p", itemProp: itemProp }, children)));
}
function ExpandableParagraph(props) {
    var className = props.className, itemProp = props.itemProp, expandLabel = props.expandLabel, originalContent = props.children;
    var _a = (0, react_1.useState)(originalContent.length < DEFAULT_MAX_CHAR_SIZE), isExpanded = _a[0], setIsExpanded = _a[1];
    var expandParagraph = function () {
        setIsExpanded(true);
    };
    var content = isExpanded ? originalContent : truncateText(originalContent);
    return (react_1.default.createElement(Paragraph_style_1.StyledParagraph, { className: (0, classcat_1.default)(className), role: "presentation" },
        react_1.default.createElement(body_1.TextBody, { as: "p", itemProp: itemProp }, content),
        !isExpanded && (react_1.default.createElement(Paragraph_style_1.ButtonWrapper, null,
            react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.UNSTYLED, onClick: expandParagraph }, expandLabel)))));
}
function Paragraph(props) {
    if ('isExpandable' in props && props.isExpandable) {
        return react_1.default.createElement(ExpandableParagraph, __assign({}, props));
    }
    return react_1.default.createElement(SimpleParagraph, __assign({}, props));
}
exports.Paragraph = Paragraph;
