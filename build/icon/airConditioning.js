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
exports.AirConditioningIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var AirConditioningIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M12.016 2c.244 0 .447.176.49.407l.007.09v2.221l1.653-1.709a.469.469 0 01.613-.057l.066.057a.51.51 0 01.056.634l-.056.069-2.332 2.411v4.995l4.178-2.502.859-3.31a.482.482 0 01.503-.367l.085.015a.496.496 0 01.355.52l-.015.089-.61 2.348 1.826-1.093a.472.472 0 01.657.181.509.509 0 01-.105.628l-.07.051-1.871 1.12 2.34.649a.496.496 0 01.353.52l-.015.088a.482.482 0 01-.502.367l-.086-.016-3.264-.905L12.958 12l4.173 2.498 3.264-.904a.479.479 0 01.588.35.503.503 0 01-.258.578l-.08.031-2.341.648 1.872 1.12c.23.138.307.442.175.68a.473.473 0 01-.578.218l-.079-.037-1.826-1.094.61 2.35a.503.503 0 01-.258.577l-.082.03a.475.475 0 01-.558-.266l-.03-.084-.859-3.312-4.178-2.502v4.995l2.332 2.412a.509.509 0 010 .703.469.469 0 01-.612.057l-.067-.057-1.653-1.71v2.222a.497.497 0 01-.985.09l-.008-.09-.001-2.257-1.685 1.745a.469.469 0 01-.613.057l-.066-.057a.51.51 0 01-.056-.634l.056-.069 2.364-2.446v-4.981l-4.211 2.522-.858 3.312a.479.479 0 01-.588.35.496.496 0 01-.355-.52l.015-.088.609-2.349-1.825 1.094A.472.472 0 013.649 17a.509.509 0 01.105-.628l.07-.051L5.695 15.2l-2.34-.648a.496.496 0 01-.353-.52l.015-.088a.482.482 0 01.502-.367l.086.016 3.263.904L11.041 12 6.868 9.501l-3.263.905a.479.479 0 01-.588-.35.503.503 0 01.258-.578l.08-.031 2.339-.649-1.87-1.12A.506.506 0 013.65 7a.473.473 0 01.578-.218l.079.037L6.13 7.912l-.609-2.35a.503.503 0 01.258-.577l.082-.03a.475.475 0 01.558.266l.03.084.858 3.311 4.211 2.522V6.157L9.155 3.712a.509.509 0 010-.703.469.469 0 01.612-.057l.067.057 1.685 1.744V2.497c0-.275.223-.497.497-.497z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.AirConditioningIcon = AirConditioningIcon;
exports.AirConditioningIcon.defaultProps = status_1.StatusIcon.defaultProps;
