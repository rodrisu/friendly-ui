"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
var react_1 = __importDefault(require("react"));
var stars_1 = require("../stars");
var Rating_style_1 = require("./Rating.style");
var Rating = function (_a) {
    var _b = _a.score, score = _b === void 0 ? 0 : _b, _c = _a.ratings, ratings = _c === void 0 ? 0 : _c, _d = _a.children, children = _d === void 0 ? '' : _d;
    return (react_1.default.createElement(Rating_style_1.StyledRating, null,
        react_1.default.createElement(stars_1.Stars, { stars: score }),
        react_1.default.createElement("span", null,
            ratings,
            " ",
            children)));
};
exports.Rating = Rating;
