"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessModal = void 0;
var react_1 = __importDefault(require("react"));
var v4_1 = __importDefault(require("uuid/v4"));
var button_1 = require("../button");
var SuccessModal_style_1 = require("./SuccessModal.style");
var SuccessModal = function (props) {
    var _a = props.isOpen, isOpen = _a === void 0 ? false : _a, _b = props.onClose, onClose = _b === void 0 ? function () { } : _b, confirmLabel = props.confirmLabel, illustration = props.illustration, children = props.children, className = props.className;
    var baseClassName = 'kirk-successModal';
    var successContentId = "".concat(baseClassName, "-content-").concat((0, v4_1.default)());
    var Content = SuccessModal_style_1.SuccessModalElements.Content, Figure = SuccessModal_style_1.SuccessModalElements.Figure, Media = SuccessModal_style_1.SuccessModalElements.Media, StyledSuccessModal = SuccessModal_style_1.SuccessModalElements.StyledSuccessModal, SuccessAction = SuccessModal_style_1.SuccessModalElements.SuccessAction, SuccessButton = SuccessModal_style_1.SuccessModalElements.SuccessButton, SuccessTitle = SuccessModal_style_1.SuccessModalElements.SuccessTitle;
    return (react_1.default.createElement(StyledSuccessModal, { onClose: onClose, isOpen: isOpen, closeOnEsc: false, displayCloseButton: false, displayDimmer: false, className: className, modalContentClassName: baseClassName, "aria-labelledby": successContentId, "data-test": "success-modal" },
        react_1.default.createElement(Media, null,
            react_1.default.createElement(Figure, null, illustration),
            react_1.default.createElement(Content, null,
                react_1.default.createElement(SuccessTitle, { "data-test": "success-title" }, children),
                react_1.default.createElement(SuccessAction, null,
                    react_1.default.createElement(SuccessButton, { status: button_1.ButtonStatus.SECONDARY, "data-test": "success-button", onClick: onClose }, confirmLabel))))));
};
exports.SuccessModal = SuccessModal;
