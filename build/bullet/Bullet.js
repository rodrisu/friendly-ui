"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bullet = exports.BulletTypes = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var Bullet_style_1 = require("./Bullet.style");
var BulletTypes;
(function (BulletTypes) {
    BulletTypes["DEFAULT"] = "default";
    BulletTypes["SMALL"] = "small";
    BulletTypes["ADDON"] = "addon";
    BulletTypes["MAP_ACTIVE"] = "map-active";
    BulletTypes["MAP_INACTIVE"] = "map-inactive";
    BulletTypes["SEARCH"] = "search";
})(BulletTypes || (exports.BulletTypes = BulletTypes = {}));
var Bullet = function (_a) {
    var className = _a.className, type = _a.type;
    var baseClassName = 'kirk-bullet';
    var classNames = (0, classcat_1.default)([baseClassName, "".concat(baseClassName, "--").concat(type), className]);
    return react_1.default.createElement(Bullet_style_1.StyledBullet, { className: classNames, "aria-hidden": "true" });
};
exports.Bullet = Bullet;
exports.Bullet.defaultProps = {
    className: '',
    type: BulletTypes.DEFAULT,
};
