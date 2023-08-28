"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTestimonials = exports.StyledCarousel = exports.StyledCard = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var card_1 = require("../_internals/card");
var branding_1 = require("../_utils/branding");
var body_1 = require("../typography/body");
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  padding: ", " 0 0;\n"], ["\n  background: ", ";\n  padding: ", " 0 0;\n"])), branding_1.color.midnightGreen, branding_1.space.xl);
var StyledContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n\n  @media (", ") {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n\n  @media (", ") {\n    flex-direction: column;\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall);
var StyledIllustration = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  @media (", ") {\n    padding: 0 ", ";\n    text-align: center;\n\n    img {\n      max-width: 100%;\n    }\n  }\n"], ["\n  @media (", ") {\n    padding: 0 ", ";\n    text-align: center;\n\n    img {\n      max-width: 100%;\n    }\n  }\n"])), branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xl);
var StyledTestimonialsList = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 0 ", ";\n  flex-shrink: 1;\n\n  @media (", ") {\n    & button {\n      display: none !important;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 0 ", ";\n  flex-shrink: 1;\n\n  @media (", ") {\n    & button {\n      display: none !important;\n    }\n  }\n"])), branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaSmall);
exports.StyledCard = (0, styled_components_1.default)(card_1.Card)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  margin: 0 ", ";\n\n  @media (", ") {\n    width: 100%;\n    margin: ", " 0 0;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  margin: 0 ", ";\n\n  @media (", ") {\n    width: 100%;\n    margin: ", " 0 0;\n  }\n"])), branding_1.space.xl, branding_1.responsiveBreakpoints.isMediaSmall, branding_1.space.xl);
exports.StyledCarousel = styled_components_1.default.ul(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  width: calc(100% * ", ");\n  left: calc(-100% * ", ");\n  transition: left ", " ", ";\n\n  & li {\n    display: inline-block;\n    width: calc(100% / ", ");\n    padding: ", ";\n  }\n\n  & figure {\n    display: flex;\n    flex-direction: column;\n    align-content: space-between;\n    height: 100%;\n  }\n\n  & blockquote {\n    flex: 1;\n  }\n"], ["\n  position: relative;\n  width: calc(100% * ", ");\n  left: calc(-100% * ", ");\n  transition: left ", " ", ";\n\n  & li {\n    display: inline-block;\n    width: calc(100% / ", ");\n    padding: ", ";\n  }\n\n  & figure {\n    display: flex;\n    flex-direction: column;\n    align-content: space-between;\n    height: 100%;\n  }\n\n  & blockquote {\n    flex: 1;\n  }\n"])), function (_a) {
    var testimonialCount = _a.testimonialCount;
    return testimonialCount;
}, function (_a) {
    var activeTestimonial = _a.activeTestimonial;
    return activeTestimonial;
}, branding_1.transition.duration.base, branding_1.transition.easing.default, function (_a) {
    var testimonialCount = _a.testimonialCount;
    return testimonialCount;
}, branding_1.space.xl);
var StyledAuthor = (0, styled_components_1.default)(body_1.TextBody)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  padding-top: ", ";\n"], ["\n  display: block;\n  color: ", ";\n  padding-top: ", ";\n"])), branding_1.color.midnightGreen, branding_1.space.xl);
var StyledBulletList = styled_components_1.default.ul(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: ", " 0;\n  display: flex;\n  justify-content: center;\n\n  & li + li {\n    margin-left: ", ";\n  }\n"], ["\n  padding: ", " 0;\n  display: flex;\n  justify-content: center;\n\n  & li + li {\n    margin-left: ", ";\n  }\n"])), branding_1.space.l, branding_1.space.m);
var StyledBullet = styled_components_1.default.li(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: 1px solid ", ";\n  border-radius: 50%;\n  background: ", ";\n  transition: background ", " ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  border: 1px solid ", ";\n  border-radius: 50%;\n  background: ", ";\n  transition: background ", " ", ";\n"])), branding_1.componentSizes.bulletSizeSmall, branding_1.componentSizes.bulletSizeSmall, branding_1.color.white, function (_a) {
    var active = _a.active;
    return (active ? branding_1.color.white : 'transparent');
}, branding_1.transition.duration.base, branding_1.transition.easing.default);
exports.StyledTestimonials = {
    Container: StyledContainer,
    Content: StyledContent,
    Illustration: StyledIllustration,
    Testimonials: StyledTestimonialsList,
    Card: exports.StyledCard,
    Carousel: exports.StyledCarousel,
    Author: StyledAuthor,
    BulletList: StyledBulletList,
    Bullet: StyledBullet,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
