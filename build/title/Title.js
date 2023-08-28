"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var Title_style_1 = require("./Title.style");
/**
 * This mapping is needed because `h${headingLevel}` cannot
 * be typed as 'h1' | 'h2' | ... | 'h6',
 * it has to be explicitly 'h1', 'h2', ..., 'h6'
 * when using it with the 'as' polymorphic
 * Error TS2322: Type 'string' is not assignable to type '"symbol"...
 * The expected type comes from property 'as' which is
 * declared here on type 'IntrinsicAttributes &...
 */
var HEADING_LEVEL_MAPPING = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
var Title = function (_a) {
    var id = _a.id, className = _a.className, children = _a.children, _b = _a.headingLevel, headingLevel = _b === void 0 ? 1 : _b;
    var headingLevelNumber;
    if (typeof headingLevel === 'string') {
        headingLevelNumber = parseInt(headingLevel, 10);
    }
    else {
        headingLevelNumber = headingLevel;
    }
    return (react_1.default.createElement(Title_style_1.StyledTitle, { as: HEADING_LEVEL_MAPPING[headingLevelNumber - 1], id: id, className: (0, classcat_1.default)(['kirk-title', className]) }, children));
};
exports.Title = Title;
