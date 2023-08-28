"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.Drawer = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var exenv_1 = require("exenv");
var styled_components_1 = require("styled-components");
var keycodes_1 = require("../../_utils/keycodes");
var Drawer_style_1 = require("./Drawer.style");
var DrawerGlobalStyles = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .kirk-scroll-lock {\n    overflow-y: hidden;\n  }\n"], ["\n  .kirk-scroll-lock {\n    overflow-y: hidden;\n  }\n"])));
var Drawer = /** @class */ (function (_super) {
    __extends(Drawer, _super);
    function Drawer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = function () {
            _this.scrollLock();
            _this.props.onOpen();
        };
        _this.close = function () {
            _this.scrollUnlock();
            _this.props.onClose();
        };
        _this.handleOutsideMouseClick = function (e) {
            var isButton = e.button && e.button !== 0;
            if (!_this.contentNode || e.target.tagName !== 'ASIDE' || isButton) {
                return;
            }
            _this.close();
        };
        _this.handleKeydown = function (e) {
            if (e.keyCode === keycodes_1.KEYCODES.ESCAPE) {
                _this.close();
            }
        };
        _this.refContent = function (contentNode) {
            _this.contentNode = contentNode;
        };
        _this.scrollLock = function () {
            if (exenv_1.canUseDOM) {
                document.documentElement.classList.add('kirk-scroll-lock');
            }
        };
        _this.scrollUnlock = function () {
            if (exenv_1.canUseDOM) {
                document.documentElement.classList.remove('kirk-scroll-lock');
            }
        };
        return _this;
    }
    Drawer.prototype.componentDidMount = function () {
        document.addEventListener('mouseup', this.handleOutsideMouseClick);
        document.addEventListener('touchstart', this.handleOutsideMouseClick);
        document.addEventListener('keydown', this.handleKeydown);
    };
    Drawer.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.open !== prevProps.open) {
            // eslint-disable-next-line no-unused-expressions
            this.props.open ? this.open() : this.close();
        }
    };
    Drawer.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.handleKeydown);
        document.removeEventListener('mouseup', this.handleOutsideMouseClick);
        document.removeEventListener('touchstart', this.handleOutsideMouseClick);
    };
    Drawer.prototype.render = function () {
        var _this = this;
        var _a = this.props, open = _a.open, className = _a.className, zIndex = _a.zIndex, onTransitionEnd = _a.onTransitionEnd, children = _a.children, width = _a.width;
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(Drawer_style_1.StyledDrawer, { className: (0, classcat_1.default)([
                    'kirk-drawer',
                    {
                        'kirk-drawer--open': open,
                        'kirk-drawer--close': !open,
                    },
                    className,
                ]), "$zIndex": zIndex },
                react_1.default.createElement("div", { ref: this.refContent, className: "kirk-drawer-scrollableContent", style: { width: width }, onTransitionEnd: function () { return onTransitionEnd(open); } }, children),
                react_1.default.createElement(DrawerGlobalStyles, null)),
            react_1.default.createElement(Drawer_style_1.StyledDimmer, { className: (0, classcat_1.default)([['kirk-drawer-dimmer', { 'kirk-drawer-dimmer--active': open }]]), "$zIndex": zIndex - 1, "aria-hidden": "true", onClick: function () { return _this.close(); } })));
    };
    Drawer.defaultProps = {
        width: '400px',
        zIndex: 2,
        onOpen: function () { },
        onClose: function () { },
        onTransitionEnd: function () { },
        open: false,
    };
    return Drawer;
}(react_1.PureComponent));
exports.Drawer = Drawer;
var templateObject_1;
