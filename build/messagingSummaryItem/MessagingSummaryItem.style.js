"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledMessagingSummaryItem = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var item_1 = require("../_internals/item");
exports.StyledMessagingSummaryItem = (0, styled_components_1.default)(item_1.Item)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .kirk-messaging-summary-item-sub-label {\n    display: flex;\n    word-break: break-word;\n\n    /* Truncate sublabel to max 2 lines. */\n    max-height: 2.5em;\n    overflow: hidden;\n  }\n"], ["\n  & .kirk-messaging-summary-item-sub-label {\n    display: flex;\n    word-break: break-word;\n\n    /* Truncate sublabel to max 2 lines. */\n    max-height: 2.5em;\n    overflow: hidden;\n  }\n"])));
var templateObject_1;
