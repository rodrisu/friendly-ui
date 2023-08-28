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
exports.QrCard = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var interfaces_1 = require("../_utils/interfaces");
var itemInfo_1 = require("../itemInfo");
var subHeader_1 = require("../subHeader");
var QrCard_style_1 = require("./QrCard.style");
var QrCard = function (props) {
    var className = props.className, itemMainTitle = props.itemMainTitle, imageUrl = props.imageUrl, imageAlt = props.imageAlt, itemMainInfo = props.itemMainInfo, mainTitle = props.mainTitle;
    var a11yAttrs = (0, interfaces_1.pickA11yProps)(props);
    return (react_1.default.createElement(QrCard_style_1.StyledQrCard, { className: (0, classcat_1.default)(['kirk-card', className]) },
        mainTitle && react_1.default.createElement(subHeader_1.SubHeader, null, mainTitle),
        react_1.default.createElement("img", __assign({ src: imageUrl }, a11yAttrs, { alt: imageAlt })),
        (itemMainTitle || itemMainInfo) && (react_1.default.createElement(itemInfo_1.ItemInfo, { mainTitle: itemMainTitle, mainInfo: itemMainInfo }))));
};
exports.QrCard = QrCard;
