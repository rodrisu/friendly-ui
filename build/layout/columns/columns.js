"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Columns = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
/**
 * A parent component for <Column> component.
 * Each <Column> nested inside the parent <Columns> will share the horizontal space and get an equal
 * share of the available horizontal space.
 *
 * Only <Column> are valid children of <Columns>.
 */
var Columns = function (props) {
    var className = props.className, children = props.children;
    return react_1.default.createElement("ul", { className: (0, classcat_1.default)([className]) }, children);
};
exports.Columns = Columns;
