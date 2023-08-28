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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var baseSection_1 = require("../layout/section/baseSection");
var paragraph_1 = require("../paragraph");
var title_1 = require("../typography/title");
var caption_1 = require("./caption");
var Review_style_1 = require("./Review.style");
var Review = function (props) {
    var className = props.className, title = props.title, text = props.text, formattedDatetime = props.formattedDatetime, isoDatetime = props.isoDatetime, _a = props.isResponse, isResponse = _a === void 0 ? false : _a, replyLinkLabel = props.replyLinkLabel, replyLinkHref = props.replyLinkHref, replyLinkOnClick = props.replyLinkOnClick;
    // For responses, the title is not a rating but the name of the person replying.
    var titleMicroData = isResponse
        ? null
        : {
            itemScope: true,
            itemProp: 'reviewRating',
            itemType: 'https://schema.org/Rating',
        };
    var titleMicroDataContent = isResponse
        ? null
        : {
            itemProp: 'reviewRating',
        };
    var replyLinkProps = replyLinkLabel && (replyLinkHref || replyLinkOnClick)
        ? {
            secondaryText: replyLinkLabel,
            href: replyLinkHref,
            onClick: replyLinkOnClick,
        }
        : {};
    return (react_1.default.createElement(Review_style_1.StyledReview, { itemScope: true, itemType: "http://schema.org/Review", className: (0, classcat_1.default)([
            className,
            {
                'kirk-is-review-response': isResponse,
            },
        ]) },
        react_1.default.createElement("div", { className: "kirk-review-inner" },
            react_1.default.createElement(baseSection_1.BaseSection, null,
                react_1.default.createElement("h2", __assign({ className: "kirk-review-title" }, titleMicroData),
                    react_1.default.createElement(title_1.TextTitle, __assign({}, titleMicroDataContent), title))),
            react_1.default.createElement(baseSection_1.BaseSection, { noHorizontalSpacing: true },
                react_1.default.createElement(paragraph_1.Paragraph, { itemProp: "reviewBody" }, text),
                react_1.default.createElement(caption_1.Caption, __assign({ isoDate: isoDatetime }, replyLinkProps), formattedDatetime)))));
};
exports.Review = Review;
