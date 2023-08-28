"use strict";
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
exports.PriceSimulator = void 0;
var react_1 = __importStar(require("react"));
var priceSimulator_1 = require("../illustration/priceSimulator");
var baseSection_1 = require("../layout/section/baseSection");
var theVoice_1 = require("../theVoice");
var PriceSimulator_style_1 = require("./PriceSimulator.style");
var PriceSimulator = function (_a) {
    var title = _a.title, illustration = _a.illustration, terms = _a.terms, children = _a.children;
    return (react_1.default.createElement(PriceSimulator_style_1.StyledPriceSimulator.Container, null,
        react_1.default.createElement(baseSection_1.BaseSection, { contentSize: baseSection_1.SectionContentSize.LARGE, noHorizontalSpacing: true },
            react_1.default.createElement(theVoice_1.TheVoice, null, title),
            react_1.default.createElement(PriceSimulator_style_1.StyledPriceSimulator.Columns, null,
                react_1.default.createElement(PriceSimulator_style_1.StyledPriceSimulator.Form, null, children),
                react_1.default.createElement(PriceSimulator_style_1.StyledPriceSimulator.Illustration, { hasDefaultIllustration: !illustration },
                    illustration && (react_1.default.createElement(react_1.Fragment, null,
                        illustration,
                        react_1.default.createElement(PriceSimulator_style_1.StyledPriceSimulator.Caption, null, terms))),
                    !illustration && react_1.default.createElement(priceSimulator_1.PriceSimulatorIllustration, null))))));
};
exports.PriceSimulator = PriceSimulator;
