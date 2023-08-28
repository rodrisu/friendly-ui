"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Transitions = exports.AnimationType = void 0;
var react_1 = __importStar(require("react"));
var Transition_1 = __importDefault(require("react-transition-group/Transition"));
var classcat_1 = __importDefault(require("classcat"));
var branding_1 = require("../_utils/branding");
var AnimationType;
(function (AnimationType) {
    AnimationType["FADE"] = "fade";
    AnimationType["SLIDE_UP"] = "slide-up";
})(AnimationType || (exports.AnimationType = AnimationType = {}));
var Transitions = /** @class */ (function (_super) {
    __extends(Transitions, _super);
    function Transitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transitions.prototype.render = function () {
        var _a = this.props, 
        // Rename "in" props from Transition component cause of private naming
        children = _a.children, animationName = _a.animationName, delayEnter = _a.delayEnter, delayLeave = _a.delayLeave, inProp = _a.in, onEntered = _a.onEntered, className = _a.className;
        return (react_1.default.createElement(Transition_1.default, { in: inProp, timeout: { enter: delayEnter, exit: delayLeave }, onEntered: onEntered }, function (status) {
            if (status === 'exited') {
                return null;
            }
            return react_1.default.cloneElement(children, {
                className: (0, classcat_1.default)([
                    className,
                    children.props.className,
                    animationName,
                    "".concat(animationName, "-").concat(status),
                ]),
            });
        }));
    };
    Transitions.defaultProps = {
        animationName: AnimationType.FADE,
        delayEnter: 0,
        delayLeave: parseInt(branding_1.transition.duration.base, 10),
        in: false,
    };
    return Transitions;
}(react_1.PureComponent));
exports.Transitions = Transitions;
