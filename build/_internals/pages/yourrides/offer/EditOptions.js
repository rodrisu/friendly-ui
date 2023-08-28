"use strict";
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
exports.EditOptions = void 0;
var react_1 = __importStar(require("react"));
var button_1 = require("../../../../button");
var contentDivider_1 = require("../../../../divider/contentDivider");
var comfortIcon_1 = require("../../../../icon/comfortIcon");
var ladyIcon_1 = require("../../../../icon/ladyIcon");
var lightningIcon_1 = require("../../../../icon/lightningIcon");
var itemCheckbox_1 = require("../../../../itemCheckbox");
var itemInfo_1 = require("../../../../itemInfo");
var content_1 = require("../../../../layout/content");
var layoutNormalizer_1 = require("../../../../layout/layoutNormalizer");
var baseSection_1 = require("../../../../layout/section/baseSection");
var stepper_1 = require("../../../../stepper");
var textarea_1 = require("../../../../textarea");
var theVoice_1 = require("../../../../theVoice");
var title_1 = require("../../../../typography/title");
// Note: some hard-coded styles will be removed with the following tickets: BBC-7943, BBC-7944
var EditOptions = function () {
    var _a = (0, react_1.useState)(false), isComfort = _a[0], setIsComfort = _a[1];
    var _b = (0, react_1.useState)(false), isLadyOnly = _b[0], setIsLadyOnly = _b[1];
    var _c = (0, react_1.useState)(false), isInstantBooking = _c[0], setIsInstantBooking = _c[1];
    var _d = (0, react_1.useState)(button_1.ButtonStatus.PRIMARY), buttonStatus = _d[0], setButtonStatus = _d[1];
    var save = function () {
        setButtonStatus(button_1.ButtonStatus.LOADING);
        setTimeout(function () { return setButtonStatus(button_1.ButtonStatus.CHECKED); }, 1000);
        setTimeout(function () { return setButtonStatus(button_1.ButtonStatus.PRIMARY); }, 3000);
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(layoutNormalizer_1.LayoutNormalizer, { useLegacyNormalization: true }),
        react_1.default.createElement(content_1.MainContent, null,
            react_1.default.createElement(content_1.Content, null,
                react_1.default.createElement(baseSection_1.BaseSection, { noHorizontalSpacing: true },
                    react_1.default.createElement(theVoice_1.TheVoice, null, "Passengers options")),
                react_1.default.createElement(baseSection_1.BaseSection, null,
                    react_1.default.createElement("div", { style: { marginRight: '-14px' } },
                        react_1.default.createElement(stepper_1.Stepper, { name: "stepper", value: 1, display: stepper_1.StepperDisplay.SMALL, increaseLabel: "Add a seat", decreaseLabel: "Remove a seat", leftAddon: react_1.default.createElement(title_1.TextTitle, null, "Number of passengers") }))),
                react_1.default.createElement(baseSection_1.BaseSection, { noHorizontalSpacing: true },
                    react_1.default.createElement(contentDivider_1.ContentDivider, null),
                    react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { onChange: function () { return setIsComfort(!isComfort); }, leftAddon: react_1.default.createElement(comfortIcon_1.ComfortIcon, null), labelTitle: "Max. 2 in the back seats", checked: isComfort, name: "comfort" }),
                    react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { onChange: function () { return setIsLadyOnly(!isLadyOnly); }, leftAddon: react_1.default.createElement(ladyIcon_1.LadyIcon, null), labelTitle: "Ladies only", checked: isLadyOnly, name: "ladies" }),
                    react_1.default.createElement(itemCheckbox_1.ItemCheckbox, { onChange: function () { return setIsInstantBooking(!isInstantBooking); }, leftAddon: react_1.default.createElement(lightningIcon_1.LightningIcon, null), labelTitle: "Instant booking", checked: isInstantBooking, name: "instant" }),
                    react_1.default.createElement(contentDivider_1.ContentDivider, null),
                    react_1.default.createElement(itemInfo_1.ItemInfo, { mainTitle: "Additional details", id: "textarea-label" }),
                    react_1.default.createElement(textarea_1.Textarea, { placeholder: "Flexible about where and when to meet? Not taking the motorway? Got limited space in your boot? Keep passengers in the loop.", onChange: function () { }, labelledBy: "textarea-label" }))),
            react_1.default.createElement(content_1.BottomContent, { style: { display: 'flex', justifyContent: 'center', padding: '16px' } },
                react_1.default.createElement(button_1.Button, { onClick: save, status: buttonStatus }, "Save")))));
};
exports.EditOptions = EditOptions;
