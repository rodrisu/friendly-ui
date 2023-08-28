"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyState = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var title_1 = require("../title");
var EmptyState_style_1 = require("./EmptyState.style");
var EmptyState = function (_a) {
    var className = _a.className, illustration = _a.illustration, text = _a.text, button = _a.button;
    var title;
    if (typeof text === 'string') {
        title = react_1.default.createElement(title_1.Title, null, text);
    }
    else {
        title = text;
    }
    return (react_1.default.createElement(EmptyState_style_1.StyledEmptyState, { className: (0, classcat_1.default)(['kirk-empty-state', className]) },
        illustration,
        title,
        button));
};
exports.EmptyState = EmptyState;
