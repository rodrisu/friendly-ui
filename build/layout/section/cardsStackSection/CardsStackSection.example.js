"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripCardConfig = void 0;
var react_1 = __importDefault(require("react"));
var itinerary_1 = require("../../../itinerary");
exports.tripCardConfig = {
    href: '/',
    itinerary: (react_1.default.createElement(itinerary_1.Itinerary, null,
        react_1.default.createElement(itinerary_1.Address, { label: "Paris", subLabel: "Porte de Vincennes", time: "09:00" }),
        react_1.default.createElement(itinerary_1.Address, { label: "Bordeaux", subLabel: "Gare Bordeaux Saint-Jean", time: "12:00" }))),
    price: '8,00€',
    flags: {
        ladiesOnly: true,
        maxTwo: true,
        autoApproval: true,
    },
    title: '',
};
