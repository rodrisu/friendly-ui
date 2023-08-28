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
exports.ButtonGroup = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var _utils_1 = require("../_utils");
var button_1 = require("../button");
var ButtonGroup_style_1 = require("./ButtonGroup.style");
var BASE_CLASSNAME = 'button-group';
var ButtonGroup = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.isInline, isInline = _c === void 0 ? false : _c, _d = _a.isReverse, isReverse = _d === void 0 ? false : _d, _e = _a.loadingIndex, loadingIndex = _e === void 0 ? null : _e;
    var classNames = [
        "kirk-".concat(BASE_CLASSNAME),
        className,
        (0, _utils_1.prefix)({
            row: isInline,
            column: !isInline,
            reverse: isReverse,
        }, BASE_CLASSNAME),
    ];
    var buttons = react_1.default.Children.toArray(children).filter(function (button) {
        return react_1.default.isValidElement(button);
    });
    return (react_1.default.createElement(ButtonGroup_style_1.StyledButtonGroup, { className: (0, classcat_1.default)(classNames) }, buttons.map(function (button, idx) {
        var index = button.props.index || String(idx);
        var isLoading = Boolean(loadingIndex);
        var status = isLoading && index === loadingIndex ? button_1.ButtonStatus.LOADING : button.props.status;
        var disabled = isLoading && index !== loadingIndex ? true : button.props.disabled;
        var props = __assign(__assign({}, button.props), { index: index, status: status, disabled: disabled });
        return (0, react_1.cloneElement)(button, props);
    })));
};
exports.ButtonGroup = ButtonGroup;
