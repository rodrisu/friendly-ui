"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledAutoComplete = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.StyledAutoComplete = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n\n  & .kirk-autoComplete-body {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    min-height: 300px;\n  }\n\n  /**\n   * Address appearance set to searchfield in Safari and Chrome.\n   * Address box-sizing set to border-box in Safari and Chrome\n   */\n  & input[type='search'] {\n    -webkit-appearance: textfield;\n    box-sizing: content-box;\n  }\n\n  /**\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n   * Safari (but not Chrome) clips the cancel button when the search input has\n   * padding (and textfield appearance).\n   */\n  & input[type='search']::-webkit-search-cancel-button,\n  & input[type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n\n  & .kirk-autoComplete-body {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    min-height: 300px;\n  }\n\n  /**\n   * Address appearance set to searchfield in Safari and Chrome.\n   * Address box-sizing set to border-box in Safari and Chrome\n   */\n  & input[type='search'] {\n    -webkit-appearance: textfield;\n    box-sizing: content-box;\n  }\n\n  /**\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n   * Safari (but not Chrome) clips the cancel button when the search input has\n   * padding (and textfield appearance).\n   */\n  & input[type='search']::-webkit-search-cancel-button,\n  & input[type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n"])));
var templateObject_1;
