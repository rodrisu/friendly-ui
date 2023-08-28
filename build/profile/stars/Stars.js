"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stars = void 0;
var react_1 = __importDefault(require("react"));
var starIcon_1 = require("../../icon/starIcon");
var Stars_style_1 = require("./Stars.style");
var MIN_STARS = 0;
var MAX_STARS = 5;
var ValidateStars = function (star) { return !(star < MIN_STARS || star > MAX_STARS); };
var StarIcon = function (_a) {
    var offset = _a.offset;
    return (react_1.default.createElement("div", { className: "star" },
        react_1.default.createElement(starIcon_1.StarIcon, { fill: offset, size: "14" })));
};
var Stars = function (_a) {
    var stars = _a.stars;
    return (react_1.default.createElement(Stars_style_1.StyledStars, null, ValidateStars(stars) &&
        Array.from({ length: 5 }, function (v, index) {
            var filled = stars - index;
            var result = filled > 0 ? Math.min(1, filled) : 0;
            return react_1.default.createElement(StarIcon, { key: index, offset: result });
        })));
};
exports.Stars = Stars;
