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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RidesHistory = exports.Rides = void 0;
var react_1 = __importStar(require("react"));
var banIcon_1 = require("../../../icon/banIcon");
var hourglassIcon_1 = require("../../../icon/hourglassIcon");
var starIcon_1 = require("../../../icon/starIcon");
var itemChoice_1 = require("../../../itemChoice");
var itinerary_1 = require("../../../itinerary");
var layoutNormalizer_1 = require("../../../layout/layoutNormalizer");
var baseSection_1 = require("../../../layout/section/baseSection");
var theVoice_1 = require("../../../theVoice");
var tripCard_1 = require("../../../tripCard");
var createRideCardConfig = function () { return ({
    href: '/',
    itinerary: (react_1.default.createElement(itinerary_1.Itinerary, { small: true },
        react_1.default.createElement(itinerary_1.Address, { label: "Paris" }),
        react_1.default.createElement(itinerary_1.Address, { label: "Bordeaux" }))),
    title: 'Sun march 8th, 18:00',
    passengers: [
        {
            avatarUrl: 'https://cdn.blablacar.com/comuto3/images/avatar/pixar/passenger-m-02.svg',
            firstName: 'Roger',
            ratings: 'sdfdsf',
        },
        {
            avatarUrl: 'https://cdn.blablacar.com/comuto3/images/avatar/pixar/passenger-m-02.svg',
            firstName: 'Roger',
            ratings: 'sdfdsf',
        },
    ],
    statusInformation: {
        icon: react_1.default.createElement(hourglassIcon_1.HourglassIcon, null),
        text: "Awaiting driver's approval",
        highlighted: false,
    },
}); };
var Rides = function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(layoutNormalizer_1.LayoutNormalizer, { useLegacyNormalization: false }),
    react_1.default.createElement(baseSection_1.BaseSection, { noHorizontalSpacing: true },
        react_1.default.createElement(theVoice_1.TheVoice, null, "Your rides")),
    react_1.default.createElement(baseSection_1.BaseSection, null,
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createRideCardConfig())),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createRideCardConfig(), { statusInformation: null })),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createRideCardConfig(), { passengers: null })),
        react_1.default.createElement(itemChoice_1.ItemChoice, { label: "Ride history", href: "#" })))); };
exports.Rides = Rides;
var createRideHistoryCardConfig = function () { return ({
    href: '/',
    itinerary: (react_1.default.createElement(itinerary_1.Itinerary, { small: true },
        react_1.default.createElement(itinerary_1.Address, { label: "Paris" }),
        react_1.default.createElement(itinerary_1.Address, { label: "Bordeaux" }))),
    title: 'Sun march 8th, 18:00',
    passengers: [
        {
            avatarUrl: 'https://cdn.blablacar.com/comuto3/images/avatar/pixar/passenger-m-02.svg',
            firstName: 'Roger',
            ratings: 'sdfdsf',
        },
        {
            avatarUrl: 'https://cdn.blablacar.com/comuto3/images/avatar/pixar/passenger-m-02.svg',
            firstName: 'Roger',
            ratings: 'sdfdsf',
        },
    ],
}); };
var ratingStatusInformation = {
    icon: react_1.default.createElement(starIcon_1.StarIcon, null),
    text: 'Leave a rating',
    highlighted: true,
};
var cancelledStatusInformation = {
    icon: react_1.default.createElement(banIcon_1.BanIcon, null),
    text: 'Cancelled',
    highlighted: false,
};
var RidesHistory = function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(layoutNormalizer_1.LayoutNormalizer, { useLegacyNormalization: false }),
    react_1.default.createElement(baseSection_1.BaseSection, { noHorizontalSpacing: true },
        react_1.default.createElement(theVoice_1.TheVoice, null, "Ride history")),
    react_1.default.createElement(baseSection_1.BaseSection, null,
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createRideHistoryCardConfig(), { statusInformation: cancelledStatusInformation })),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createRideHistoryCardConfig(), { statusInformation: ratingStatusInformation })),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createRideHistoryCardConfig()))))); };
exports.RidesHistory = RidesHistory;
