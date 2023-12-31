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
exports.Snackbar = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var TransitionGroup_1 = __importDefault(require("react-transition-group/TransitionGroup"));
var classcat_1 = __importDefault(require("classcat"));
var exenv_1 = require("exenv");
var branding_1 = require("../_utils/branding");
var button_1 = require("../button");
var crossIcon_1 = require("../icon/crossIcon");
var text_1 = require("../text");
var transitions_1 = require("../transitions");
var Snackbar_style_1 = require("./Snackbar.style");
var Snackbar = /** @class */ (function (_super) {
    __extends(Snackbar, _super);
    function Snackbar(props) {
        var _this = _super.call(this, props) || this;
        if (exenv_1.canUseDOM) {
            _this.portalNode = document.createElement('div');
            document.body.appendChild(_this.portalNode);
        }
        return _this;
    }
    Snackbar.prototype.componentWillUnmount = function () {
        if (this.portalNode) {
            document.body.removeChild(this.portalNode);
            this.portalNode = null;
        }
    };
    Snackbar.prototype.render = function () {
        var modalElement = (react_1.default.createElement(TransitionGroup_1.default, { component: Snackbar_style_1.StyledSnackbar, className: (0, classcat_1.default)(['transition-wrapper kirk-snackbar-container', this.props.className]) }, this.props.isOpen && (react_1.default.createElement(transitions_1.Transitions, { animationName: transitions_1.AnimationType.SLIDE_UP },
            react_1.default.createElement("div", { className: (0, classcat_1.default)(['kirk-snackbar', this.props.extraClassName]) },
                react_1.default.createElement(text_1.Text, { role: "alert", display: text_1.TextDisplayType.TITLE, className: "kirk-snackbar-content" }, this.props.children),
                react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.UNSTYLED, className: "kirk-snackbar-cross", onClick: this.props.close },
                    react_1.default.createElement(crossIcon_1.CrossIcon, { iconColor: branding_1.color.white, size: "18px" })))))));
        if (!this.portalNode) {
            return modalElement;
        }
        return (0, react_dom_1.createPortal)(modalElement, this.portalNode);
    };
    Snackbar.defaultProps = {
        isOpen: false,
    };
    return Snackbar;
}(react_1.PureComponent));
exports.Snackbar = Snackbar;
