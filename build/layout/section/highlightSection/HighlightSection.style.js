"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightSectionElements = exports.Col = exports.Grid = exports.Article = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../../../_utils/branding");
var button_1 = require("../../../button");
var itemChoice_1 = require("../../../itemChoice");
var display1_1 = require("../../../typography/display1");
var Section = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0 ", ";\n  background-color: ", ";\n  color: ", ";\n"], ["\n  padding: 0 ", ";\n  background-color: ", ";\n  color: ", ";\n"])), branding_1.space.xl, branding_1.color.midnightGreen, branding_1.color.white);
var Content = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ", ";\n"], ["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ", ";\n"])), branding_1.componentSizes.largeSectionWidth);
exports.Article = styled_components_1.default.article(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: ", ";\n"], ["\n  display: ", ";\n"
    // Override TextDisplay1
])), function (props) { return props.hidden && 'none'; });
// Override TextDisplay1
var Title = (0, styled_components_1.default)(display1_1.TextDisplay1).attrs({
    isInverted: true,
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  // @note: Space is applied to section\n  padding: ", " 0;\n"], ["\n  // @note: Space is applied to section\n  padding: ", " 0;\n"
    // Override ItemChoice
])), branding_1.space.xl);
// Override ItemChoice
var Item = (0, styled_components_1.default)(itemChoice_1.ItemChoice)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: ", ";\n\n  // increase specificity to override sytles from ItemChoice\n  && {\n    display: flex;\n    min-height: 4.75em;\n    align-items: center;\n    background-color: ", ";\n    color: ", ";\n    font-size: ", ";\n    line-height: ", ";\n\n    & .kirk-item-leftWrapper {\n      max-height: 2.3em;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-lines: 2;\n      line-clamp: 2;\n      align-items: flex-start;\n      -webkit-line-clamp: 2;\n    }\n\n    & .kirk-item-rightText {\n      display: flex;\n      flex-shrink: 0;\n    }\n  }\n"], ["\n  border-radius: ", ";\n\n  // increase specificity to override sytles from ItemChoice\n  && {\n    display: flex;\n    min-height: 4.75em;\n    align-items: center;\n    background-color: ", ";\n    color: ", ";\n    font-size: ", ";\n    line-height: ", ";\n\n    & .kirk-item-leftWrapper {\n      max-height: 2.3em;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-lines: 2;\n      line-clamp: 2;\n      align-items: flex-start;\n      -webkit-line-clamp: 2;\n    }\n\n    & .kirk-item-rightText {\n      display: flex;\n      flex-shrink: 0;\n    }\n  }\n"
    // Override Button
])), branding_1.radius.m, branding_1.color.white, branding_1.color.midnightGreen, branding_1.font.m.size, branding_1.font.m.lineHeight);
// Override Button
var Link = (0, styled_components_1.default)(button_1.Button).attrs({
    status: button_1.ButtonStatus.UNSTYLED,
})(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  && {\n    padding: 0;\n  }\n"], ["\n  && {\n    padding: 0;\n  }\n"])));
var Actions = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row-reverse;\n  padding: ", " 0 ", ";\n  margin-left: auto;\n"], ["\n  display: flex;\n  flex-direction: row-reverse;\n  padding: ", " 0 ", ";\n  margin-left: auto;\n"
    /* GRID SYSTEM: 3 Columns */
])), branding_1.space.m, branding_1.space.xl);
/* GRID SYSTEM: 3 Columns */
exports.Grid = styled_components_1.default.ul(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: ", ";\n  row-gap: ", ";\n  grid-auto-rows: minmax(4.75em, auto);\n\n  @media (", ") {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: ", ";\n  row-gap: ", ";\n  grid-auto-rows: minmax(4.75em, auto);\n\n  @media (", ") {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"])), branding_1.space.l, branding_1.space.m, branding_1.responsiveBreakpoints.isMediaLarge);
exports.Col = styled_components_1.default.li(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: ", ";\n  padding: 0;\n  margin: 0;\n"], ["\n  display: ", ";\n  padding: 0;\n  margin: 0;\n"])), function (props) { return props.hidden && 'none'; });
exports.HighlightSectionElements = {
    Section: Section,
    Content: Content,
    Article: exports.Article,
    Title: Title,
    Item: Item,
    Actions: Actions,
    Button: Link,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
