"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var Card = function (_a) {
    var className = _a.className, children = _a.children;
    return (react_1.default.createElement("div", { className: (0, classcat_1.default)(['kirk-card', className]) }, children));
};
exports.Card = Card;
