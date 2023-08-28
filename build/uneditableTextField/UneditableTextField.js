"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UneditableTextField = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var UneditableTextField_style_1 = require("./UneditableTextField.style");
var UneditableTextField = function (_a) {
    var children = _a.children, _b = _a.addOn, addOn = _b === void 0 ? null : _b, _c = _a.ellipsis, ellipsis = _c === void 0 ? false : _c, _d = _a.isPlaceholder, isPlaceholder = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? '' : _e;
    return (react_1.default.createElement(UneditableTextField_style_1.StyledUneditableContainer, { className: (0, classcat_1.default)(['kirk-uneditableTextField', className]) },
        react_1.default.createElement(UneditableTextField_style_1.StyledUneditableTextField, null,
            addOn,
            react_1.default.createElement("div", { className: (0, classcat_1.default)([
                    'kirk-uneditableTextField-label',
                    { 'kirk-uneditableTextField-label--ellipsis': ellipsis },
                    { 'kirk-uneditableTextField-label--placeholder': isPlaceholder },
                ]) }, children))));
};
exports.UneditableTextField = UneditableTextField;
