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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditPrices = void 0;
var react_1 = __importStar(require("react"));
var button_1 = require("../../../../button");
var contentDivider_1 = require("../../../../divider/contentDivider");
var itinerary_1 = require("../../../../itinerary");
var content_1 = require("../../../../layout/content");
var layoutNormalizer_1 = require("../../../../layout/layoutNormalizer");
var baseSection_1 = require("../../../../layout/section/baseSection");
var stepper_1 = require("../../../../stepper");
var theVoice_1 = require("../../../../theVoice");
var smallStepperProps = {
    display: stepper_1.StepperDisplay.SMALL,
    increaseLabel: 'Add a seat',
    decreaseLabel: 'Remove a seat',
    format: function (price) { return "$".concat(price); },
};
var EditPrices = function (_a) {
    var _b = _a.withStopovers, withStopovers = _b === void 0 ? false : _b;
    var _c = (0, react_1.useState)(button_1.ButtonStatus.PRIMARY), buttonStatus = _c[0], setButtonStatus = _c[1];
    var save = function () {
        setButtonStatus(button_1.ButtonStatus.LOADING);
        setTimeout(function () { return setButtonStatus(button_1.ButtonStatus.CHECKED); }, 1000);
        setTimeout(function () { return setButtonStatus(button_1.ButtonStatus.PRIMARY); }, 3000);
    };
    var renderMultiple = function () { return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(stepper_1.Stepper, __assign({}, smallStepperProps, { name: "stepper-main", value: 56, leftAddon: react_1.default.createElement(itinerary_1.Itinerary, null,
                react_1.default.createElement(itinerary_1.Address, { label: "Paris" }),
                react_1.default.createElement(itinerary_1.Address, { label: "Marseille" })) })),
        react_1.default.createElement(contentDivider_1.ContentDivider, null),
        react_1.default.createElement(stepper_1.Stepper, __assign({}, smallStepperProps, { name: "stepper-1", value: 24, leftAddon: react_1.default.createElement(itinerary_1.Itinerary, null,
                react_1.default.createElement(itinerary_1.Address, { label: "Paris" }),
                react_1.default.createElement(itinerary_1.Address, { label: "Lyon" })) })),
        react_1.default.createElement(stepper_1.Stepper, __assign({}, smallStepperProps, { name: "stepper-2", value: 30, leftAddon: react_1.default.createElement(itinerary_1.Itinerary, null,
                react_1.default.createElement(itinerary_1.Address, { label: "Lyon" }),
                react_1.default.createElement(itinerary_1.Address, { label: "Marseille" })) })))); };
    var renderSingle = function () { return (react_1.default.createElement(stepper_1.Stepper, __assign({}, smallStepperProps, { display: stepper_1.StepperDisplay.LARGE, name: "stepper-main", value: 56 }))); };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(layoutNormalizer_1.LayoutNormalizer, { useLegacyNormalization: true }),
        react_1.default.createElement(content_1.MainContent, null,
            react_1.default.createElement(content_1.Content, null,
                react_1.default.createElement(baseSection_1.BaseSection, { noHorizontalSpacing: true },
                    react_1.default.createElement(theVoice_1.TheVoice, null, "Price per passenger")),
                react_1.default.createElement(baseSection_1.BaseSection, null,
                    withStopovers && renderMultiple(),
                    !withStopovers && renderSingle())),
            react_1.default.createElement(content_1.BottomContent, { style: { display: 'flex', justifyContent: 'center', padding: '16px' } },
                react_1.default.createElement(button_1.Button, { onClick: save, status: buttonStatus }, "Save")))));
};
exports.EditPrices = EditPrices;
