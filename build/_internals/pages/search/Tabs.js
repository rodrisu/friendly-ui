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
exports.Tabs = void 0;
var react_1 = __importStar(require("react"));
var item_1 = require("../../../_internals/item");
var button_1 = require("../../../button");
var disclaimer_1 = require("../../../disclaimer");
var spacingDivider_1 = require("../../../divider/spacingDivider");
var busIcon_1 = require("../../../icon/busIcon");
var carpoolIcon_1 = require("../../../icon/carpoolIcon");
var itinerary_1 = require("../../../itinerary");
var layoutNormalizer_1 = require("../../../layout/layoutNormalizer");
var baseSection_1 = require("../../../layout/section/baseSection");
var cardsSection_1 = require("../../../layout/section/cardsSection");
var tabsSection_1 = require("../../../layout/section/tabsSection");
var searchRecap_1 = require("../../../searchRecap");
var subHeader_1 = require("../../../subHeader");
var tabs_1 = require("../../../tabs");
var tripCard_1 = require("../../../tripCard");
var createTripCardConfig = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.highlighted, highlighted = _c === void 0 ? false : _c;
    return ({
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
        highlighted: highlighted ? 'Closest match' : '',
    });
};
var defaultSearchRecapConfig = {
    from: 'Bordeaux',
    to: 'Toulouse, centre ville',
    info: "Aujourd'hui 14h30, 2 passagers",
};
var filterButton = (react_1.default.createElement(button_1.Button, { status: button_1.ButtonStatus.UNSTYLED, href: "#" }, "Filter"));
var tabPanel = (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(item_1.Item, { leftBody: "930 trajets allant de Bordeaux \u00E0 Toulouse publi\u00E9s", leftBodyAnnotation: "101 trajets complets", rightAddon: filterButton }),
    react_1.default.createElement(spacingDivider_1.SpacingDivider, null),
    react_1.default.createElement("ul", null,
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig())),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig()))),
    react_1.default.createElement(disclaimer_1.Disclaimer, { deprecatedHelpUrl: "#" }, "Recommandation bas\u00E9e sur vos crit\u00E8res de recherche."),
    react_1.default.createElement("ul", null,
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig())),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig())),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig())),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig()))),
    react_1.default.createElement(subHeader_1.SubHeader, null, "Tomorrow"),
    react_1.default.createElement("ul", null,
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig())),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig())),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig())),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig())))));
var defaultTabsConfig = {
    activeTabId: 'tab1',
    status: tabs_1.TabStatus.FIXED,
    tabs: [
        {
            id: 'tab1',
            label: 'All',
            panelContent: tabPanel,
        },
        {
            id: 'tab2',
            label: 'Car',
            panelContent: tabPanel,
            icon: react_1.default.createElement(carpoolIcon_1.CarpoolIcon, { size: "32" }),
        },
        {
            id: 'tab3',
            label: 'Bus',
            panelContent: tabPanel,
            icon: react_1.default.createElement(busIcon_1.BusIcon, { size: "32" }),
        },
    ],
};
var Tabs = function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(layoutNormalizer_1.LayoutNormalizer, { useLegacyNormalization: false }),
    react_1.default.createElement(baseSection_1.BaseSection, null,
        react_1.default.createElement(searchRecap_1.SearchRecap, __assign({}, defaultSearchRecapConfig))),
    react_1.default.createElement(cardsSection_1.CardsSection, null,
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig())),
        react_1.default.createElement(tripCard_1.TripCard, __assign({}, createTripCardConfig()))),
    react_1.default.createElement(tabsSection_1.TabsSection, { tabsProps: defaultTabsConfig }))); };
exports.Tabs = Tabs;
