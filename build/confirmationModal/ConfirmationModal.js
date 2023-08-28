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
exports.ConfirmationModal = exports.ConfirmationModalStatus = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var branding_1 = require("../_utils/branding");
var interfaces_1 = require("../_utils/interfaces");
var button_1 = require("../button");
var crossIcon_1 = require("../icon/crossIcon");
var infoIcon_1 = require("../icon/infoIcon");
var warningIcon_1 = require("../icon/warningIcon");
var modal_1 = require("../modal");
var theVoice_1 = require("../theVoice");
var ConfirmationModal_style_1 = require("./ConfirmationModal.style");
var ConfirmationModalStatus;
(function (ConfirmationModalStatus) {
    ConfirmationModalStatus["WARNING"] = "warning";
    ConfirmationModalStatus["REMINDER"] = "reminder";
})(ConfirmationModalStatus || (exports.ConfirmationModalStatus = ConfirmationModalStatus = {}));
// eslint-disable-next-line react/prefer-stateless-function
var ConfirmationModal = /** @class */ (function (_super) {
    __extends(ConfirmationModal, _super);
    function ConfirmationModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmationModal.prototype.render = function () {
        var _a;
        var _b = this.props, status = _b.status, isOpen = _b.isOpen, children = _b.children, className = _b.className, size = _b.size, onClose = _b.onClose, closeButtonTitle = _b.closeButtonTitle, onConfirm = _b.onConfirm, confirmLabel = _b.confirmLabel, confirmIsLoading = _b.confirmIsLoading;
        var a11yAttrs = (0, interfaces_1.pickA11yProps)(this.props);
        var isWarning = status === ConfirmationModalStatus.WARNING;
        var baseClassName = 'kirk-confirmationModal';
        var classNames = (0, classcat_1.default)([
            baseClassName,
            (_a = {},
                _a["".concat(baseClassName, "--large")] = size === modal_1.ModalSize.LARGE,
                _a["".concat(baseClassName, "--hasCloseButton")] = isWarning,
                _a),
            className,
        ]);
        var iconProps = {
            className: "".concat(baseClassName, "-icon"),
            size: '100',
        };
        var getIcon = function () {
            if (isWarning) {
                return react_1.default.createElement(warningIcon_1.WarningIcon, __assign({}, iconProps, { iconColor: branding_1.color.red }));
            }
            return react_1.default.createElement(infoIcon_1.InfoIcon, __assign({}, iconProps, { iconColor: branding_1.color.blue }));
        };
        var confirmButtonStatus = isWarning ? button_1.ButtonStatus.WARNING : button_1.ButtonStatus.PRIMARY;
        confirmButtonStatus = confirmIsLoading ? button_1.ButtonStatus.LOADING : confirmButtonStatus;
        return (react_1.default.createElement(ConfirmationModal_style_1.StyledConfirmationModal, __assign({ onClose: onClose, isOpen: isOpen, displayCloseButton: false, displayDimmer: false, modalContentClassName: classNames }, a11yAttrs),
            react_1.default.createElement("div", { className: "".concat(baseClassName, "-dialog") },
                getIcon(),
                react_1.default.createElement("div", { className: "".concat(baseClassName, "-body") },
                    react_1.default.createElement(theVoice_1.TheVoice, { isInverted: true }, children)),
                react_1.default.createElement("footer", { className: "".concat(baseClassName, "-footer") },
                    isWarning && (react_1.default.createElement(button_1.Button, { isBubble: true, status: button_1.ButtonStatus.SECONDARY, className: "".concat(baseClassName, "-closeButton"), onClick: onClose, title: closeButtonTitle },
                        react_1.default.createElement(crossIcon_1.CrossIcon, { size: "24", iconColor: branding_1.color.blue }))),
                    react_1.default.createElement(button_1.Button, { status: confirmButtonStatus, className: "".concat(baseClassName, "-confirmButton"), onClick: onConfirm }, confirmLabel)))));
    };
    ConfirmationModal.defaultProps = {
        onConfirm: function () { },
        confirmLabel: '',
        confirmIsLoading: false,
    };
    return ConfirmationModal;
}(react_1.Component));
exports.ConfirmationModal = ConfirmationModal;
