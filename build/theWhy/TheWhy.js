"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheWhy = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var useFocusVisible_1 = require("../_utils/focusVisibleProvider/useFocusVisible");
var questionIcon_1 = require("../icon/questionIcon");
var TheWhy_style_1 = require("./TheWhy.style");
var TheWhy = function (_a) {
    var className = _a.className, children = _a.children, title = _a.title, onClick = _a.onClick;
    var _b = (0, useFocusVisible_1.useFocusVisible)(), focusVisible = _b.focusVisible, onFocus = _b.onFocus, onBlur = _b.onBlur;
    return (react_1.default.createElement(TheWhy_style_1.StyledWhyWrapper, { className: (0, classcat_1.default)(['kirk-why', className]) },
        react_1.default.createElement(TheWhy_style_1.StyledWhy, { type: "button", className: (0, classcat_1.default)([
                {
                    'focus-visible': focusVisible,
                },
            ]), title: title, onClick: onClick, onFocus: onFocus, onBlur: onBlur },
            react_1.default.createElement(questionIcon_1.QuestionIcon, null),
            react_1.default.createElement("span", null, children))));
};
exports.TheWhy = TheWhy;
