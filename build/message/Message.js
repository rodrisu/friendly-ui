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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var _utils_1 = require("../_utils");
var spacingDivider_1 = require("../divider/spacingDivider");
var text_1 = require("../text");
var Message_style_1 = require("./Message.style");
var Message = function (_a) {
    var active = _a.active, children = _a.children, messageAnnotation = _a.messageAnnotation, className = _a.className;
    return (react_1.default.createElement(Message_style_1.StyledMessage, { className: (0, classcat_1.default)(['kirk-message', (0, _utils_1.prefix)({ active: active }), className]) },
        react_1.default.createElement("div", { className: "kirk-message-content" },
            react_1.default.createElement("blockquote", null,
                react_1.default.createElement("div", { className: "kirk-label" },
                    react_1.default.createElement("p", null, children)))),
        messageAnnotation && (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(text_1.Text, { className: "kirk-message-annotation", display: text_1.TextDisplayType.CAPTION }, messageAnnotation),
            react_1.default.createElement(spacingDivider_1.SpacingDivider, { size: spacingDivider_1.SpacingDividerSize.MEDIUM })))));
};
exports.Message = Message;
