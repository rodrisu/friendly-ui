"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var styled_components_1 = require("styled-components");
function init() {
    var sheet = new styled_components_1.ServerStyleSheet();
    return {
        wrapComponent: function (component) { return sheet.collectStyles(component); },
        extractStyleTag: function () { return sheet.getStyleTags(); },
        cleanup: function () { return sheet.seal(); },
    };
}
exports.init = init;
