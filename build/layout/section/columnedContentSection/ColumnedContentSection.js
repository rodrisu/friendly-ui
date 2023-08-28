"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnedContentSection = exports.ColumnedSectionContentMediaKind = void 0;
var react_1 = __importDefault(require("react"));
var button_1 = require("../../../button");
var columns_1 = require("../../../layout/columns");
var baseSection_1 = require("../../../layout/section/baseSection");
var ColumnedContentSection_style_1 = require("./ColumnedContentSection.style");
// A set of rendering modes for the media (e.g. picture or visual illustrations) related to a
// particular content columns.
var ColumnedSectionContentMediaKind;
(function (ColumnedSectionContentMediaKind) {
    // An element containing the media will be given and will be horizontally centered. The passed
    // element won't be resized depending on viewport. This can be used for SVG icon for instance.
    ColumnedSectionContentMediaKind["ELEMENT"] = "element";
    // A rendering mode that will stretch the passed image to cover the full width of the column.
    // Used for rendering blog assets.
    ColumnedSectionContentMediaKind["COVER"] = "cover";
    // A rendering mode that will try to fill about 2/3 of the width of the column with the image
    // without covering completely the column. This is used for the pro homepage.
    ColumnedSectionContentMediaKind["FIT"] = "fit";
})(ColumnedSectionContentMediaKind || (exports.ColumnedSectionContentMediaKind = ColumnedSectionContentMediaKind = {}));
function isMediaElement(anyMedia) {
    return anyMedia.kind === ColumnedSectionContentMediaKind.ELEMENT;
}
function isMediaCover(anyMedia) {
    return anyMedia.kind === ColumnedSectionContentMediaKind.COVER;
}
var renderMedia = function (media) {
    if (isMediaElement(media)) {
        return (react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.MediaElement, null, media.element));
    }
    if (isMediaCover(media)) {
        return (react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.MediaCover, { target: "_blank", rel: "noopener noreferrer", href: media.href },
            react_1.default.createElement("img", { src: media.pictureUrl, alt: "" })));
    }
    return (react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.MediaFit, null,
        react_1.default.createElement("img", { src: media.pictureUrl, alt: "" })));
};
var renderColumnContent = function (columnContent, index) {
    var title = columnContent.title, content = columnContent.content, media = columnContent.media, footerLinkHref = columnContent.footerLinkHref, footerLinkLabel = columnContent.footerLinkLabel;
    var showFooterLink = Boolean(footerLinkHref && footerLinkLabel);
    return (react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.Column, { key: index },
        media && renderMedia(media),
        react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.ColumnTitle, { as: "p" }, title),
        react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.ColumnContent, { as: "p" }, content),
        showFooterLink && (react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.ColumnFooter, { href: footerLinkHref, status: button_1.ButtonStatus.UNSTYLED }, footerLinkLabel))));
};
/**
 * A specialized section which shows some marketing content in columns (usually 3).
 */
var ColumnedContentSection = function (props) {
    var backgroundColor = props.backgroundColor, title = props.title, topLinkLabel = props.topLinkLabel, topLinkHref = props.topLinkHref, columnContentList = props.columnContentList;
    var showTopLink = Boolean(topLinkLabel && topLinkHref);
    return (react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.Wrapper, { backgroundColor: backgroundColor },
        react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.Section, { contentSize: baseSection_1.SectionContentSize.LARGE },
            title && (react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.Header, null,
                react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.Title, { as: "h2" }, title),
                showTopLink && (react_1.default.createElement(ColumnedContentSection_style_1.StyledColumnedContentSection.TopLink, { href: topLinkHref, status: button_1.ButtonStatus.UNSTYLED }, topLinkLabel)))),
            react_1.default.createElement(columns_1.Columns, null, columnContentList.map(function (columnContent, index) {
                return renderColumnContent(columnContent, String(index));
            })))));
};
exports.ColumnedContentSection = ColumnedContentSection;
