"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripCardSample = void 0;
var react_1 = __importDefault(require("react"));
var itinerary_1 = require("../itinerary");
var TripCardSample_style_1 = require("./TripCardSample.style");
var TripCardSample = function (props) {
    var departure = props.departure, arrival = props.arrival, price = props.price, priceLabel = props.priceLabel;
    var departurePlace = { mainLabel: departure };
    var arrivalPlace = { mainLabel: arrival };
    return (react_1.default.createElement(TripCardSample_style_1.StyledTripCardSample, null,
        react_1.default.createElement(itinerary_1.Itinerary, null,
            react_1.default.createElement(itinerary_1.Address, { label: departurePlace.mainLabel }),
            react_1.default.createElement(itinerary_1.Address, { label: arrivalPlace.mainLabel })),
        price && (react_1.default.createElement(TripCardSample_style_1.StyledPriceBlock, null,
            priceLabel && react_1.default.createElement(TripCardSample_style_1.StyledPriceTextBody, null, priceLabel),
            react_1.default.createElement(TripCardSample_style_1.StyledPriceTextSubHeaderStrong, null, price)))));
};
exports.TripCardSample = TripCardSample;
