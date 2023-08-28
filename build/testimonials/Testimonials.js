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
exports.Testimonials = void 0;
var react_1 = __importStar(require("react"));
var branding_1 = require("../_utils/branding");
var button_1 = require("../button");
var arrowIcon_1 = require("../icon/arrowIcon");
var baseSection_1 = require("../layout/section/baseSection");
var subHeaderStrong_1 = require("../typography/subHeaderStrong");
var Testimonials_style_1 = require("./Testimonials.style");
var SWIPE_TRESHOLD = 60;
var Testimonials = function (_a) {
    var illustration = _a.illustration, testimonials = _a.testimonials, a11y = _a.a11y;
    var _b = (0, react_1.useState)(0), activeTestimonial = _b[0], setActiveTestimonial = _b[1];
    var touchXInitialPosition = (0, react_1.useRef)(null);
    var touchXPosition = (0, react_1.useRef)(null);
    /**
     * We implemented a loop carousel. Clicking next when we reached the end
     * will make it start at the beginning.
     *
     * Prev & Next methods are called by swiping or by clicking the buttons
     */
    var prev = function () {
        var active = activeTestimonial - 1 < 0 ? testimonials.length - 1 : activeTestimonial - 1;
        setActiveTestimonial(active);
    };
    var next = function () {
        var active = activeTestimonial + 1 > testimonials.length - 1 ? 0 : activeTestimonial + 1;
        setActiveTestimonial(active);
    };
    /**
     * Naive swipe implementation. Added a threshold to avoid swiping by just scrolling the page
     */
    var onTouchStart = function (e) {
        if (e.touches.length === 1) {
            touchXInitialPosition.current = e.touches[0].pageX;
        }
    };
    var onTouchMove = function (e) {
        if (e.touches.length === 1) {
            touchXPosition.current = e.touches[0].pageX;
        }
    };
    var onTouchEnd = function () {
        if (touchXInitialPosition.current !== null && touchXPosition.current !== null) {
            var diff = touchXPosition.current - touchXInitialPosition.current;
            if (Math.abs(diff) > SWIPE_TRESHOLD) {
                if (diff > 0) {
                    prev();
                }
                else {
                    next();
                }
            }
            touchXPosition.current = null;
            touchXInitialPosition.current = null;
        }
    };
    return (react_1.default.createElement(Testimonials_style_1.StyledTestimonials.Container, null,
        react_1.default.createElement(baseSection_1.BaseSection, { contentSize: baseSection_1.SectionContentSize.LARGE, noHorizontalSpacing: true },
            react_1.default.createElement(Testimonials_style_1.StyledTestimonials.Content, null,
                react_1.default.createElement(Testimonials_style_1.StyledTestimonials.Illustration, null, illustration),
                react_1.default.createElement(Testimonials_style_1.StyledTestimonials.Testimonials, null,
                    react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.SECONDARY, isBubble: true, title: a11y.prev, onClick: function () { return prev(); }, "aria-hidden": true },
                        react_1.default.createElement(arrowIcon_1.ArrowIcon, { iconColor: branding_1.color.blue })),
                    react_1.default.createElement(Testimonials_style_1.StyledTestimonials.Card, { as: "div" },
                        react_1.default.createElement(Testimonials_style_1.StyledTestimonials.Carousel, { activeTestimonial: activeTestimonial, testimonialCount: testimonials.length, onTouchStart: onTouchStart, onTouchMove: onTouchMove, onTouchEnd: onTouchEnd, "aria-label": a11y.mainTitle }, testimonials.map(function (_a) {
                            var quote = _a.quote, author = _a.author;
                            return (react_1.default.createElement("li", { key: author },
                                react_1.default.createElement("figure", null,
                                    react_1.default.createElement(subHeaderStrong_1.TextSubHeaderStrong, { as: "blockquote" }, quote),
                                    react_1.default.createElement(Testimonials_style_1.StyledTestimonials.Author, { as: "figcaption" }, author))));
                        }))),
                    react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.SECONDARY, isBubble: true, title: a11y.next, onClick: function () { return next(); }, "aria-hidden": true },
                        react_1.default.createElement(arrowIcon_1.ArrowIcon, { iconColor: branding_1.color.blue, right: true })))),
            react_1.default.createElement(Testimonials_style_1.StyledTestimonials.BulletList, { "aria-hidden": true }, testimonials.map(function (_a, i) {
                var author = _a.author;
                return (react_1.default.createElement(Testimonials_style_1.StyledTestimonials.Bullet, { key: author, active: activeTestimonial === i }));
            })))));
};
exports.Testimonials = Testimonials;
