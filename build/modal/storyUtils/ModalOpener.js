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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalOpener = void 0;
/* eslint-disable react/button-has-type */
var react_1 = __importStar(require("react"));
var filterBar_1 = require("../../filterBar");
var fog_1 = require("../../fog");
var icon_1 = require("../../icon");
var itemCheckbox_1 = require("../../itemCheckbox");
var baseSection_1 = require("../../layout/section/baseSection");
var SubHeader_1 = require("../../subHeader/SubHeader");
var theVoice_1 = require("../../theVoice");
var index_1 = require("../index");
var ModalOpener = /** @class */ (function (_super) {
    __extends(ModalOpener, _super);
    function ModalOpener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            modalOpen: false,
            modalOpen2: false,
        };
        _this.openModal = function () {
            _this.setState({ modalOpen: true });
        };
        _this.closeModal = function () {
            _this.setState({ modalOpen: false });
        };
        _this.openModal2 = function () {
            _this.setState({ modalOpen2: true });
        };
        _this.closeModal2 = function () {
            _this.setState({ modalOpen2: false });
        };
        return _this;
    }
    ModalOpener.prototype.render = function () {
        return (react_1.default.createElement(baseSection_1.BaseSection, null,
            react_1.default.createElement("button", { onClick: this.openModal }, "Open modal 1"),
            react_1.default.createElement("button", { onClick: this.openModal2 }, "Open modal using Layout components"),
            react_1.default.createElement(index_1.Modal, __assign({}, this.props, { onClose: this.closeModal, isOpen: this.state.modalOpen }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h1", { id: "label1" }, "Modal 1"),
                    react_1.default.createElement("p", { id: "description1" }, "This is the description of my modal"),
                    react_1.default.createElement("img", { src: "http://placekitten.com/g/216/144", width: "216", height: "144", alt: "A kitten" }))),
            react_1.default.createElement(index_1.Modal, __assign({}, this.props, { onClose: this.closeModal2, isOpen: this.state.modalOpen2, noHorizontalSpacing: true, layoutModeEnabled: true }),
                react_1.default.createElement(index_1.ModalBody, null,
                    react_1.default.createElement(fog_1.Fog, { isLoading: this.props.isLoading },
                        react_1.default.createElement(theVoice_1.TheVoice, null, "Filters"),
                        react_1.default.createElement(baseSection_1.BaseSection, null,
                            react_1.default.createElement(SubHeader_1.SubHeader, null, "Amenities & Services")),
                        react_1.default.createElement(baseSection_1.BaseSection, { noHorizontalSpacing: true },
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "ladies", labelTitle: "Ladies only" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "automatic", labelTitle: "Automatic Approval" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "wifi", labelTitle: "Wifi" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "air", labelTitle: "Air conditioning" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "reclining", labelTitle: "Reclining seats" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "personal", labelTitle: "Personal power outlets" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "ladies", labelTitle: "Ladies only" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "automatic", labelTitle: "Automatic Approval" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "wifi", labelTitle: "Wifi" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "air", labelTitle: "Air conditioning" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "reclining", labelTitle: "Reclining seats" }),
                            react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { name: "personal", labelTitle: "Personal power outlets" })))),
                react_1.default.createElement(index_1.ModalFooter, null,
                    react_1.default.createElement(filterBar_1.FilterBar, { ctaText: "See rides", supplyInfo: [
                            {
                                icon: icon_1.CarpoolIcon,
                                iconTitle: 'Carpooling',
                                liquidity: 20,
                                ariaLabel: 'Carpool available',
                            },
                        ], onClick: function () { } })))));
    };
    return ModalOpener;
}(react_1.Component));
exports.ModalOpener = ModalOpener;
