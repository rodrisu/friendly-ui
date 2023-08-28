"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonStatus = void 0;
// Note: can't use styled components the same way we do for all other components,
// as buttons are created dynamically with React.createElement (and can be a "a", "button" or
// even every other React component => SlugLink for instance).
var Button_1 = require("./Button");
Object.defineProperty(exports, "ButtonStatus", { enumerable: true, get: function () { return Button_1.ButtonStatus; } });
var Button_style_1 = require("./Button.style");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_style_1.StyledButton; } });
