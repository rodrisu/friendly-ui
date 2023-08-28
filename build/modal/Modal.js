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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = exports.ModalSize = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var TransitionGroup_1 = __importDefault(require("react-transition-group/TransitionGroup"));
var classcat_1 = __importDefault(require("classcat"));
var exenv_1 = require("exenv");
var focus_trap_1 = __importDefault(require("focus-trap"));
var branding_1 = require("../_utils/branding");
var interfaces_1 = require("../_utils/interfaces");
var keycodes_1 = require("../_utils/keycodes");
var button_1 = require("../button");
var crossIcon_1 = require("../icon/crossIcon");
var transitions_1 = require("../transitions");
var Modal_style_1 = require("./Modal.style");
var ModalSize;
(function (ModalSize) {
    ModalSize["SMALL"] = "small";
    ModalSize["MEDIUM"] = "medium";
    ModalSize["LARGE"] = "large";
    ModalSize["FULLSCREEN"] = "fullscreen";
})(ModalSize || (exports.ModalSize = ModalSize = {}));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showFooterBorder: false,
        };
        _this.setDocumentScroll = function (cssValue) {
            if (exenv_1.canUseDOM) {
                document.querySelector('html').style.overflow = cssValue;
            }
        };
        _this.handleOutsideMouseClick = function (e) {
            var isButton = e.button && e.button !== 0;
            if (!_this.contentNode || _this.contentNode.contains(e.target) || isButton) {
                return;
            }
            _this.props.onClose();
        };
        _this.handleKeydown = function (event) {
            if (event.keyCode === keycodes_1.KEYCODES.ESCAPE) {
                _this.props.onClose();
            }
        };
        _this.onEntered = function () {
            _this.focusTrap.activate();
        };
        _this.onScroll = function (e) {
            var element = e.currentTarget;
            var isAtBottom = element.clientHeight + element.scrollTop >= element.scrollHeight;
            _this.setState({
                showFooterBorder: !isAtBottom,
            });
        };
        if (exenv_1.canUseDOM) {
            _this.setModalRef = function (element) {
                // Trigger the onScroll function in case of scrollable content
                // to update the showFooterBorder state
                if (element) {
                    element.dispatchEvent(new CustomEvent('scroll'));
                }
            };
            _this.portalNode = document.createElement('div');
            document.body.appendChild(_this.portalNode);
            _this.focusTrap = (0, focus_trap_1.default)(_this.portalNode);
        }
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        if (this.props.isOpen) {
            this.addListeners();
            this.setDocumentScroll('hidden');
        }
    };
    Modal.prototype.componentDidUpdate = function (prevProps) {
        if (!prevProps.isOpen && this.props.isOpen) {
            this.addListeners();
            this.setDocumentScroll('hidden');
        }
        if (!this.props.isOpen && prevProps.isOpen) {
            this.removeListeners();
            this.setDocumentScroll('visible');
            this.focusTrap.deactivate();
        }
    };
    Modal.prototype.componentWillUnmount = function () {
        this.removeListeners();
        if (this.portalNode) {
            document.body.removeChild(this.portalNode);
            this.portalNode = null;
        }
        this.setDocumentScroll('visible');
        this.focusTrap.deactivate();
    };
    Modal.prototype.addListeners = function () {
        if (this.props.isOpen && exenv_1.canUseEventListeners) {
            if (this.props.closeOnEsc) {
                document.addEventListener('keydown', this.handleKeydown);
            }
            if (this.props.closeOnOutsideClick) {
                document.addEventListener('mouseup', this.handleOutsideMouseClick);
                document.addEventListener('touchstart', this.handleOutsideMouseClick);
            }
        }
    };
    Modal.prototype.removeListeners = function () {
        if (!this.props.isOpen && exenv_1.canUseEventListeners) {
            document.removeEventListener('keydown', this.handleKeydown);
            document.removeEventListener('mouseup', this.handleOutsideMouseClick);
            document.removeEventListener('touchstart', this.handleOutsideMouseClick);
        }
    };
    Modal.prototype.render = function () {
        var _a;
        var baseClassName = 'kirk-modal';
        var a11yAttrs = (0, interfaces_1.pickA11yProps)(this.props);
        var dimmerClassNames = (0, classcat_1.default)([
            this.props.className,
            "".concat(baseClassName, "-dimmer").concat(this.props.size === ModalSize.FULLSCREEN ? '--fullscreen' : ''),
            "".concat(baseClassName, "-dimmer").concat(this.props.displayDimmer ? '--visible' : '--hide'),
            "".concat(baseClassName, "-dimmer").concat(this.props.isOpen ? '--active' : '--inactive'),
        ]);
        var contentClassNames = (0, classcat_1.default)([
            baseClassName,
            (_a = {},
                _a["".concat(baseClassName, "--").concat(this.props.size)] = this.props.size,
                _a["".concat(baseClassName, "--hasCloseButton")] = this.props.displayCloseButton,
                _a),
            this.props.modalContentClassName,
        ]);
        var modalElement = (react_1.default.createElement(Modal_style_1.StyledModal, { noHorizontalSpacing: this.props.noHorizontalSpacing, layoutModeEnabled: this.props.layoutModeEnabled, className: dimmerClassNames },
            react_1.default.createElement(TransitionGroup_1.default, { component: "div", className: "transition-wrapper" }, this.props.isOpen && (react_1.default.createElement(transitions_1.Transitions, { animationName: transitions_1.AnimationType.SLIDE_UP, onEntered: this.onEntered },
                react_1.default.createElement("div", __assign({ className: contentClassNames, ref: this.setModalRef }, a11yAttrs, { role: "dialog", "aria-modal": "true", onScroll: this.onScroll }),
                    react_1.default.createElement("div", { className: "".concat(baseClassName, "-dialog") },
                        this.props.displayCloseButton && (react_1.default.createElement(button_1.Button, { isBubble: true, className: "".concat(baseClassName, "-closeButton"), onClick: this.props.onClose, title: this.props.closeButtonTitle },
                            react_1.default.createElement(crossIcon_1.CrossIcon, { size: "18", iconColor: branding_1.color.blue }))),
                        react_1.default.createElement("div", { className: (0, classcat_1.default)([
                                "".concat(baseClassName, "-body"),
                                this.state.showFooterBorder ? "".concat(baseClassName, "-modalFooterBorder") : '',
                            ]) }, this.props.children))))))));
        return this.portalNode ? (0, react_dom_1.createPortal)(modalElement, this.portalNode) : modalElement;
    };
    Modal.defaultProps = {
        isOpen: false,
        closeOnEsc: true,
        closeOnOutsideClick: false,
        displayCloseButton: true,
        size: ModalSize.MEDIUM,
        displayDimmer: true,
        isLoading: false,
    };
    return Modal;
}(react_1.Component));
exports.Modal = Modal;
