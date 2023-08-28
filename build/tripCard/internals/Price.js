"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
var react_1 = __importDefault(require("react"));
var TripCard_style_1 = require("../TripCard.style");
var Price = function (_a) {
    var price = _a.price, originalPrice = _a.originalPrice;
    if (originalPrice) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(TripCard_style_1.StyledPrice, { "$hasDiscount": true }, price),
            react_1.default.createElement(TripCard_style_1.StyledOriginalPrice, { "aria-label": originalPrice.label }, originalPrice.value)));
    }
    return react_1.default.createElement(TripCard_style_1.StyledPrice, null, price);
};
exports.Price = Price;
