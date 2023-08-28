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
exports.SearchRecap = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var branding_1 = require("../_utils/branding");
var rideAxis_1 = require("../_utils/rideAxis");
var searchIcon_1 = require("../icon/searchIcon");
var text_1 = require("../text");
var uneditableTextField_1 = require("../uneditableTextField");
var SearchRecap_style_1 = require("./SearchRecap.style");
var SearchRecap = function (_a) {
    var className = _a.className, from = _a.from, to = _a.to, info = _a.info;
    return (react_1.default.createElement(SearchRecap_style_1.StyledSearchRecap, { className: (0, classcat_1.default)(['kirk-searchRecap', className]) },
        react_1.default.createElement(uneditableTextField_1.UneditableTextField, { addOn: react_1.default.createElement(searchIcon_1.SearchIcon, null), ellipsis: true },
            react_1.default.createElement(react_1.Fragment, null,
                react_1.default.createElement(text_1.Text, { tag: text_1.TextTagType.PARAGRAPH, textColor: branding_1.color.midnightGreen, className: "kirk-requestRecap-route" },
                    react_1.default.createElement(rideAxis_1.RideAxis, { from: from, to: to })),
                info && (react_1.default.createElement(text_1.Text, { tag: text_1.TextTagType.SPAN, className: "kirk-requestRecap-info" }, info))))));
};
exports.SearchRecap = SearchRecap;
