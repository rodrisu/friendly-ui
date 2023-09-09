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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripCard = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var item_1 = require("../_internals/item");
var tag_1 = require("../_internals/tag");
var branding_1 = require("../_utils/branding");
var interfaces_1 = require("../_utils/interfaces");
var avatar_1 = require("../avatar");
var aloneInTheBackIcon_1 = require("../icon/aloneInTheBackIcon");
var comfortIcon_1 = require("../icon/comfortIcon");
var ladyIcon_1 = require("../icon/ladyIcon");
var lightningIcon_1 = require("../icon/lightningIcon");
var profileLeft_1 = require("../profileLeft");
var subHeader_1 = require("../subHeader");
var text_1 = require("../text");
var Price_1 = require("./internals/Price");
var TripCard_style_1 = require("./TripCard.style");
/**
 * Display 5 passengers max.
 * When having more than this number, the last displayed one is replaced by a more counter.
 *
 * Exemples:
 * - 5 passengers or less: we display all of them
 * - 6 passengers: we display 4 passengers and a '+2' bubble
 */
var PASSENGERS_TO_DISPLAY = 5;
var renderPassenger = function (passenger) { return (react_1.default.createElement("li", { className: "kirk-tripCard-avatar", key: "".concat(passenger.firstName, "-").concat(passenger.avatarUrl) },
    react_1.default.createElement(avatar_1.Avatar, { image: passenger.avatarUrl, alt: passenger.firstName }))); };
var renderMorePassengers = function (count) { return (react_1.default.createElement("li", { className: "kirk-tripCard-avatar kirk-tripCard-passengers-more", key: "more-passengers" },
    react_1.default.createElement(text_1.Text, { display: text_1.TextDisplayType.BODY, textColor: branding_1.color.white },
        "+",
        count))); };
var createTransporterProfileProps = function (driver, flags, titles) {
    if (flags === void 0) { flags = {}; }
    if (titles === void 0) { titles = {}; }
    if (!driver) {
        return null;
    }
    var options = [];
    if (flags.ladiesOnly) {
        options.push({
            icon: react_1.default.createElement(ladyIcon_1.LadyIcon, null),
            label: titles.ladiesOnly || '',
        });
    }
    if (flags.aloneInTheBack) {
        options.push({
            icon: react_1.default.createElement(aloneInTheBackIcon_1.AloneInTheBackIcon, null),
            label: titles.aloneInTheBack || '',
        });
    }
    if (flags.maxTwo) {
        options.push({
            icon: react_1.default.createElement(comfortIcon_1.ComfortIcon, null),
            label: titles.maxTwo || '',
        });
    }
    if (flags.autoApproval) {
        options.push({
            icon: react_1.default.createElement(lightningIcon_1.LightningIcon, null),
            label: titles.autoApproval || '',
        });
    }
    return {
        displayName: driver.firstName,
        pictureUrl: driver.avatarUrl,
        additionalInfo: driver.subText,
        averageRating: driver.rating,
        isIdChecked: driver.isIdChecked,
        options: options,
    };
};
var TripCard = function (props) {
    var className = props.className, href = props.href, itinerary = props.itinerary, driver = props.driver, _a = props.passengers, passengers = _a === void 0 ? [] : _a, originalPrice = props.originalPrice, price = props.price, _b = props.flags, flags = _b === void 0 ? {} : _b, _c = props.titles, titles = _c === void 0 ? {} : _c, _d = props.statusInformation, statusInformation = _d === void 0 ? null : _d, _e = props.mainTitle, mainTitle = _e === void 0 ? null : _e, _f = props.tag, tag = _f === void 0 ? '' : _f, _g = props.subHeader, subHeader = _g === void 0 ? '' : _g, button = props.button;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    var shouldDisplayPassengers = !(0, lodash_isempty_1.default)(passengers);
    var transporterProfileProps = createTransporterProfileProps(driver, flags, titles);
    var shouldDisplayTransporterProfile = !shouldDisplayPassengers && transporterProfileProps;
    var componentTag;
    var componentProps = {};
    // If we pass a component to href, we get component type and we merge props
    if (typeof href !== 'string') {
        componentTag = href.type;
        componentProps = __assign(__assign(__assign({}, href.props), { rel: 'nofollow' }), a11yAttrs);
    }
    else {
        componentTag = 'a';
        componentProps = __assign({ href: href, rel: 'nofollow' }, a11yAttrs);
    }
    return (react_1.default.createElement(react_1.Fragment, null,
        subHeader && react_1.default.createElement(subHeader_1.SubHeader, { noHorizontalSpacing: true }, subHeader),
        react_1.default.createElement(TripCard_style_1.StyledTripCard, { className: (0, classcat_1.default)(['kirk-tripCard', className]) }, react_1.default.createElement(componentTag, componentProps, react_1.default.createElement(react_1.Fragment, null,
            tag && (react_1.default.createElement(TripCard_style_1.StyledCardTag, null,
                react_1.default.createElement(tag_1.Tag, { label: tag }))),
            statusInformation && (react_1.default.createElement(item_1.Item, { className: "kirk-tripCard-top-item", leftAddon: react_1.default.cloneElement(statusInformation.icon, {
                    iconColor: statusInformation.highlighted ? branding_1.color.blue : branding_1.color.lightMidnightGreen,
                }), leftTitle: statusInformation.text, leftTitleDisplay: text_1.TextDisplayType.BODY, highlighted: statusInformation.highlighted })),
            mainTitle && (react_1.default.createElement(text_1.Text, { display: text_1.TextDisplayType.SUBHEADERSTRONG, className: "kirk-tripCard-title" }, mainTitle)),
            react_1.default.createElement("div", { className: "kirk-tripCard-mainContainer" },
                react_1.default.createElement("div", { className: "kirk-tripCard-main" },
                    react_1.default.createElement("div", { className: "kirk-tripCard-itinerary" }, itinerary),
                    react_1.default.createElement(Price_1.Price, { price: price, originalPrice: originalPrice })),
                shouldDisplayPassengers && (react_1.default.createElement("ul", { className: "kirk-tripCard-passengers" },
                    passengers.length > PASSENGERS_TO_DISPLAY &&
                        renderMorePassengers(passengers.length - PASSENGERS_TO_DISPLAY + 1),
                    passengers.length === PASSENGERS_TO_DISPLAY &&
                        renderPassenger(passengers[PASSENGERS_TO_DISPLAY - 1]),
                    passengers
                        .slice(0, PASSENGERS_TO_DISPLAY - 1)
                        .reverse()
                        .map(renderPassenger))),
                shouldDisplayTransporterProfile && (react_1.default.createElement(profileLeft_1.ProfileLeft, __assign({ className: "kirk-tripCard-profile" }, transporterProfileProps, { noHorizontalSpacing: true }))),
                react_1.default.createElement("div", { className: "kirk-tripCard-button" }, button)))))));
};
exports.TripCard = TripCard;
