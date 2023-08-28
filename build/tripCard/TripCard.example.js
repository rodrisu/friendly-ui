"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripCardCarpoolTagExample = exports.TripCardPassengersExample = exports.TripCardCarpoolExample = void 0;
var react_1 = __importDefault(require("react"));
var warningIcon_1 = require("../icon/warningIcon");
var itinerary_1 = require("../itinerary");
var _1 = require(".");
// Needs to be outside of the .mdx file, cause the parser changes object types
// and mess with the itinerary display
var itinerary = (react_1.default.createElement(itinerary_1.Itinerary, null,
    react_1.default.createElement(itinerary_1.Address, { label: "Paris", subLabel: "Porte de Vincennes", time: "09:00" }),
    react_1.default.createElement(itinerary_1.Address, { label: "Bordeaux", subLabel: "Gare Bordeaux Saint-Jean", time: "12:00" })));
var defaultProps = {
    'aria-label': 'Pick-up point: Paris, Drop-off point: Bordeaux, Departure time: 09:00, warning',
    href: '/',
    itinerary: itinerary,
    price: '8,00 €',
    statusInformation: {
        icon: react_1.default.createElement(warningIcon_1.WarningIcon, null),
        text: 'Warning',
        highlighted: false,
    },
    mainTitle: 'Sun march 8th, 18:00',
};
var driverProps = {
    driver: {
        avatarUrl: '//placehold.it/500x500',
        firstName: 'Jane',
        rating: '4.9',
        isIdChecked: true,
    },
    flags: {
        ladiesOnly: true,
        aloneInTheBack: true,
        maxTwo: true,
        autoApproval: true,
    },
    titles: {
        ladiesOnly: 'Ladies Only',
        aloneInTheBack: 'Alone in the back',
        maxTwo: 'Max 2 in the back',
        autoApproval: 'Auto approval',
    },
};
var passengerProps = {
    passengers: [
        {
            avatarUrl: '//placehold.it/500x500',
            firstName: 'First name',
            rating: '4.1',
        },
        {
            avatarUrl: '//placehold.it/500x500',
            firstName: 'First name',
            rating: '4.1',
        },
        {
            avatarUrl: '//placehold.it/500x500',
            firstName: 'First name',
            rating: '4.1',
        },
        {
            avatarUrl: '//placehold.it/500x500',
            firstName: 'First name',
            rating: '4.1',
        },
    ],
};
var TripCardCarpoolExample = function () {
    var props = __assign(__assign({}, defaultProps), driverProps);
    return react_1.default.createElement(_1.TripCard, __assign({}, props));
};
exports.TripCardCarpoolExample = TripCardCarpoolExample;
var TripCardPassengersExample = function () {
    var props = __assign(__assign({}, defaultProps), passengerProps);
    return react_1.default.createElement(_1.TripCard, __assign({}, props));
};
exports.TripCardPassengersExample = TripCardPassengersExample;
var TripCardCarpoolTagExample = function () {
    var props = __assign(__assign(__assign({}, defaultProps), driverProps), { tag: '10% discount', statusInformation: null, originalPrice: {
            value: '10,00 €',
            label: 'Original price:',
        } });
    return react_1.default.createElement(_1.TripCard, __assign({}, props));
};
exports.TripCardCarpoolTagExample = TripCardCarpoolTagExample;
