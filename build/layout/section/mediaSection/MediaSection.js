"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaSection = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var MediaSection_style_1 = require("./MediaSection.style");
/**
 * The media section: Renders a fullscreen div without margins on small devices
 * and a standard sized "section" on large ones
 */
var MediaSection = function (props) {
    var children = props.children, className = props.className, _a = props.role, role = _a === void 0 ? 'presentation' : _a;
    return (react_1.default.createElement(MediaSection_style_1.StyledMediaSection, { role: role, className: (0, classcat_1.default)(['media-section', className]) }, children));
};
exports.MediaSection = MediaSection;
