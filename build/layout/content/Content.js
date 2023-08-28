"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainContent = void 0;
var react_1 = __importStar(require("react"));
require("../../_internals/closest");
var branding_1 = require("../../_utils/branding");
var MainContent = /** @class */ (function (_super) {
    __extends(MainContent, _super);
    function MainContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainContentRef = react_1.default.createRef();
        _this.resizeTimeout = null;
        _this.setContentHeight = function (element) {
            if (element === void 0) { element = _this.mainContentRef.current; }
            var contentElement = element;
            if (!contentElement) {
                return null;
            }
            var topBar = document.querySelector(_this.props.topBarSelector);
            var minus = 0;
            if (_this.mainContentRef.current.closest('.kirk-modal--hasCloseButton')) {
                minus = (0, branding_1.pxToInteger)(branding_1.componentSizes.modalTopPadding);
            }
            else if (topBar) {
                minus = topBar.offsetHeight;
            }
            var height = Math.floor(window.innerHeight - minus);
            contentElement.style.minHeight = "".concat(height, "px");
            contentElement.style.height = 'auto';
            if (contentElement.parentElement) {
                _this.setContentHeight(contentElement.parentElement);
            }
            return null;
        };
        _this.onWindowResize = function () {
            clearTimeout(_this.resizeTimeout);
            _this.resizeTimeout = setTimeout(_this.setContentHeight, 100);
        };
        return _this;
    }
    MainContent.prototype.componentDidMount = function () {
        if (window) {
            this.setContentHeight();
            window.addEventListener('resize', this.onWindowResize);
        }
    };
    MainContent.prototype.componentWillUnmount = function () {
        if (window) {
            window.removeEventListener('resize', this.onWindowResize);
        }
    };
    MainContent.prototype.render = function () {
        var _a = this.props, children = _a.children, _b = _a.tag, tag = _b === void 0 ? 'div' : _b, topBarSelector = _a.topBarSelector, topBarHeight = _a.topBarHeight, props = __rest(_a, ["children", "tag", "topBarSelector", "topBarHeight"]);
        return react_1.default.createElement(tag, __assign({ ref: this.mainContentRef, className: 'page-wrapper' }, props), children);
    };
    return MainContent;
}(react_1.Component));
exports.MainContent = MainContent;
