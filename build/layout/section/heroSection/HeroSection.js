"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroSection = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
// The image should always be 45% of the screen size.
var IMAGE_HEIGHT = 45;
// 10% of the image is for spacing above the text.
var TITLE_MARGIN_TOP = IMAGE_HEIGHT * 0.1;
// 20% of the image is for the title.
// It is allowed to overflow vertically if the text wraps on multiple lines.
// It won't impact the rest of the layout, it will only spread over the cleared out space.
var TITLE_HEIGHT = IMAGE_HEIGHT * 0.2;
// 40% of the image should be cleared out for the user to see it.
var IMAGE_CLEARED_OUT_PART_HEIGHT = IMAGE_HEIGHT * 0.4;
// The 30% remaining of the image is for the bottom element.
// It is allowed to overflow by the bottom.
var BOTTOM_CONTENT_HEIGHT = IMAGE_HEIGHT * 0.3;
var StyledHeroSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  z-index: 1;\n  margin-bottom: ", ";\n  width: 100%;\n  /* Making sure that the container is at least the same height of the image. */\n  min-height: ", "vh;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  position: relative;\n  z-index: 1;\n  margin-bottom: ", ";\n  width: 100%;\n  /* Making sure that the container is at least the same height of the image. */\n  min-height: ", "vh;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])), branding_1.space.xl, IMAGE_HEIGHT, branding_1.color.white);
var HeroImage = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: ", "vh;\n  background-size: cover;\n  background-position: center;\n  background-image: ", ";\n\n  @media (", ") {\n    background-image: ", ";\n  }\n\n  ::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0) 100%);\n  }\n"], ["\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: ", "vh;\n  background-size: cover;\n  background-position: center;\n  background-image: ", ";\n\n  @media (", ") {\n    background-image: ", ";\n  }\n\n  ::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0) 100%);\n  }\n"])), IMAGE_HEIGHT, function (props) { return "url(".concat(props.heroImageUrlSmall, ")"); }, branding_1.responsiveBreakpoints.isMediaLarge, function (props) { return "url(".concat(props.heroImageUrlLarge, ")"); });
var HeroContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", ";\n  padding: 0 ", ";\n"], ["\n  width: 100%;\n  max-width: ", ";\n  padding: 0 ", ";\n"
    // These are custom font sizes which are only used for the hero section.
])), branding_1.componentSizes.largeSectionWidth, branding_1.space.xl);
// These are custom font sizes which are only used for the hero section.
var SMALL_FONT_HEIGHT_TITLE = 32;
var LARGE_FONT_HEIGHT_TITLE = 60;
var HeroTitle = styled_components_1.default.h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: ", "vh 0 0;\n  width: 100%;\n  height: ", "vh;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: center;\n  color: ", ";\n  font-size: ", "px;\n  line-height: ", "px;\n  font-weight: ", ";\n\n  @media (", ") {\n    font-size: ", "px;\n    line-height: ", "px;\n  }\n"], ["\n  margin: ", "vh 0 0;\n  width: 100%;\n  height: ", "vh;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: center;\n  color: ", ";\n  font-size: ", "px;\n  line-height: ", "px;\n  font-weight: ", ";\n\n  @media (", ") {\n    font-size: ", "px;\n    line-height: ", "px;\n  }\n"])), TITLE_MARGIN_TOP, TITLE_HEIGHT, branding_1.color.white, SMALL_FONT_HEIGHT_TITLE, SMALL_FONT_HEIGHT_TITLE, branding_1.fontWeight.medium, branding_1.responsiveBreakpoints.isMediaLarge, LARGE_FONT_HEIGHT_TITLE, LARGE_FONT_HEIGHT_TITLE);
var HeroBottomElement = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: ", "vh;\n  width: 100%;\n  min-height: ", "vh;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n\n  @media (", ") {\n    align-items: center;\n  }\n"], ["\n  margin-top: ", "vh;\n  width: 100%;\n  min-height: ", "vh;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center;\n\n  @media (", ") {\n    align-items: center;\n  }\n"])), IMAGE_CLEARED_OUT_PART_HEIGHT, BOTTOM_CONTENT_HEIGHT, branding_1.responsiveBreakpoints.isMediaLarge);
function HeroSection(_a) {
    var heroText = _a.heroText, bottomElement = _a.bottomElement, heroImageUrlSmall = _a.heroImageUrlSmall, heroImageUrlLarge = _a.heroImageUrlLarge;
    return (react_1.default.createElement(StyledHeroSection, null,
        react_1.default.createElement(HeroImage, { heroImageUrlSmall: heroImageUrlSmall, heroImageUrlLarge: heroImageUrlLarge }),
        react_1.default.createElement(HeroContent, null,
            react_1.default.createElement(HeroTitle, null, heroText),
            react_1.default.createElement(HeroBottomElement, null, bottomElement))));
}
exports.HeroSection = HeroSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
