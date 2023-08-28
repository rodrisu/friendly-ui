"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
/**
 * A child component for <Columns> parent component.
 * See <Columns> component for details.
 */
var Column = function (props) {
    var className = props.className, children = props.children, key = props.key;
    return (react_1.default.createElement("li", { key: key, className: (0, classcat_1.default)(['kirk-column', className]) }, children));
};
exports.Column = Column;
