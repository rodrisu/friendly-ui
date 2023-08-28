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
exports.VideoSection = void 0;
var react_1 = __importStar(require("react"));
var useInView_1 = require("../../../_utils/useInView");
var baseSection_1 = require("../../../layout/section/baseSection");
var VideoSection_style_1 = require("./VideoSection.style");
/**
 * A specialized section which shows a tutorial video alongside some descriptive content.
 */
var VideoSection = function (_a) {
    var children = _a.children, sources = _a.sources, title = _a.title, _b = _a.className, className = _b === void 0 ? '' : _b;
    var videoRef = (0, react_1.useRef)();
    var inViewport = (0, useInView_1.useInView)(videoRef, {
        threshold: 1,
    });
    // Automatically play the video when the container is visible on screen
    (0, react_1.useEffect)(function () {
        if (inViewport) {
            videoRef.current.play();
        }
        else if (!videoRef.current.paused) {
            videoRef.current.pause();
        }
    }, [inViewport]);
    return (react_1.default.createElement(VideoSection_style_1.StyledVideoSection.Section, { tagName: "article", className: className, contentSize: baseSection_1.SectionContentSize.LARGE, noHorizontalSpacing: true },
        react_1.default.createElement(VideoSection_style_1.StyledVideoSection.Title, { as: "h2" }, title),
        react_1.default.createElement(VideoSection_style_1.StyledVideoSection.Video, { controls: true, muted: true, ref: videoRef, "data-testid": "videoElement", "aria-hidden": true }, sources.map(function (source) { return (react_1.default.createElement("source", { src: source.src, type: source.type, key: source.src })); })),
        react_1.default.createElement(VideoSection_style_1.StyledVideoSection.Text, null, children)));
};
exports.VideoSection = VideoSection;
