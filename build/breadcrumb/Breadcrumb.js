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
exports.Breadcrumb = exports.DividerPosition = void 0;
var react_1 = __importStar(require("react"));
var contentDivider_1 = require("../divider/contentDivider");
var caption_1 = require("../typography/caption");
var Breadcrumb_style_1 = require("./Breadcrumb.style");
var DividerPosition;
(function (DividerPosition) {
    DividerPosition["TOP"] = "top";
    DividerPosition["BOTTOM"] = "bottom";
    DividerPosition["NONE"] = "none";
})(DividerPosition || (exports.DividerPosition = DividerPosition = {}));
var Breadcrumb = function (_a) {
    var crumbs = _a.crumbs, divider = _a.divider;
    return (react_1.default.createElement(react_1.Fragment, null,
        divider === DividerPosition.TOP && react_1.default.createElement(contentDivider_1.ContentDivider, null),
        react_1.default.createElement(Breadcrumb_style_1.StyledBreadcrumb, { divider: divider, itemScope: true, itemType: "https://schema.org/BreadcrumbList" }, crumbs.map(function (crumb, index) {
            var position = Number(index + 1);
            return (react_1.default.createElement("li", { key: "crumb-".concat(crumb.name, "-").concat(position), className: "inline-block", itemScope: true, itemProp: "itemListElement", itemType: "https://schema.org/ListItem" },
                react_1.default.createElement(caption_1.TextCaption, null,
                    react_1.default.createElement("a", { itemScope: true, itemProp: "item", itemType: "https://schema.org/WebPage", itemID: crumb.url, href: crumb.url },
                        react_1.default.createElement("span", { itemProp: "name" }, crumb.name)),
                    position < crumbs.length && (react_1.default.createElement("span", { role: "separator", className: "breadcrumb-separator" }, ' › '))),
                react_1.default.createElement("meta", { itemProp: "position", content: String(position) })));
        })),
        divider === DividerPosition.BOTTOM && react_1.default.createElement(contentDivider_1.ContentDivider, null)));
};
exports.Breadcrumb = Breadcrumb;
exports.Breadcrumb.defaultProps = {
    divider: DividerPosition.NONE,
};
