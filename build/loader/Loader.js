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
exports.Loader = exports.LoaderLayoutMode = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var branding_1 = require("../_utils/branding");
var checkIcon_1 = require("../icon/checkIcon");
var circleIcon_1 = require("../icon/circleIcon");
var Loader_style_1 = require("./Loader.style");
var FULLSCREEN_MODE_CSS_CLASSNAME = 'kirk-loader--fullScreen';
var INLINE_MODE_CSS_CLASSNAME = 'kirk-loader--inline';
var BLOCK_MODE_CSS_CLASSNAME = 'kirk-loader--block';
var LoaderLayoutMode;
(function (LoaderLayoutMode) {
    // In this mode, the loader will be centered in the middle of the viewport and a modal mask
    // will be applied to the viewport content.
    LoaderLayoutMode["FULLSCREEN"] = "fullscreen";
    // The loader will behave as an inline block.
    LoaderLayoutMode["INLINE"] = "inline";
    // The loader will behave as a block element with some vertical padding.
    // It will be horizontally and vertically centered in the block content.
    LoaderLayoutMode["BLOCK"] = "block";
})(LoaderLayoutMode || (exports.LoaderLayoutMode = LoaderLayoutMode = {}));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validate = function () {
            var timeout = parseInt(branding_1.transition.duration.fast, 10) + branding_1.transition.callbackDelay;
            setTimeout(_this.props.onDoneAnimationEnd, timeout);
        };
        return _this;
    }
    Loader.prototype.componentDidMount = function () {
        if (this.props.done) {
            this.validate();
        }
    };
    Loader.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.done && prevProps.done !== this.props.done) {
            this.validate();
        }
    };
    Loader.prototype.computeLayoutClass = function () {
        var _a = this.props, inline = _a.inline, layoutMode = _a.layoutMode;
        if (inline) {
            // Support for legacy inline attribute.
            return INLINE_MODE_CSS_CLASSNAME;
        }
        if (layoutMode) {
            switch (layoutMode) {
                case LoaderLayoutMode.INLINE:
                    return INLINE_MODE_CSS_CLASSNAME;
                case LoaderLayoutMode.BLOCK:
                    return BLOCK_MODE_CSS_CLASSNAME;
                case LoaderLayoutMode.FULLSCREEN:
                default:
                    return FULLSCREEN_MODE_CSS_CLASSNAME;
            }
        }
        // Legacy fallback to fullscreen.
        return FULLSCREEN_MODE_CSS_CLASSNAME;
    };
    Loader.prototype.render = function () {
        var _a = this.props, className = _a.className, size = _a.size, done = _a.done, loadingAriaLabel = _a.loadingAriaLabel, loadedAriaLabel = _a.loadedAriaLabel;
        var iconSize = {
            width: "".concat(size, "px"),
            height: "".concat(size, "px"),
        };
        var loaderStatusLabel = done ? loadedAriaLabel : loadingAriaLabel;
        return (react_1.default.createElement(Loader_style_1.StyledLoader, { className: (0, classcat_1.default)([className, this.computeLayoutClass()]) },
            react_1.default.createElement("div", { role: "progressbar", "aria-valuetext": loaderStatusLabel },
                react_1.default.createElement("div", { className: (0, classcat_1.default)([{ 'kirk-loader--done': done }]), style: iconSize },
                    !done && react_1.default.createElement(circleIcon_1.CircleIcon, { iconColor: branding_1.color.green, size: size, spinning: true }),
                    done && react_1.default.createElement(checkIcon_1.CheckIcon, { iconColor: branding_1.color.white, size: size / 2, validate: true }))),
            react_1.default.createElement("div", { className: "visually-hidden", role: "status" }, loaderStatusLabel)));
    };
    Loader.defaultProps = {
        className: '',
        inline: false,
        size: 48,
        done: false,
        onDoneAnimationEnd: function () { },
        loadingAriaLabel: 'Loading',
        loadedAriaLabel: 'Loaded',
    };
    return Loader;
}(react_1.PureComponent));
exports.Loader = Loader;
