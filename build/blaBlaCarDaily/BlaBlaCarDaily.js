"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlaBlaCarDaily = void 0;
var react_1 = __importDefault(require("react"));
var blaBlaCarDaily_1 = require("../illustration/blaBlaCarDaily");
var baseSection_1 = require("../layout/section/baseSection");
var BlaBlaCarDaily_style_1 = require("./BlaBlaCarDaily.style");
var BlaBlaCarDaily = function (_a) {
    var content = _a.content, href = _a.href;
    var title = content.title, paragraph = content.paragraph, link = content.link;
    return (react_1.default.createElement(BlaBlaCarDaily_style_1.StyledBlaBlaCarDaily.Container, null,
        react_1.default.createElement(baseSection_1.BaseSection, { contentSize: baseSection_1.SectionContentSize.LARGE, noHorizontalSpacing: true },
            react_1.default.createElement(BlaBlaCarDaily_style_1.StyledBlaBlaCarDaily.Wrapper, null,
                react_1.default.createElement(BlaBlaCarDaily_style_1.StyledBlaBlaCarDaily.Illustration, null,
                    react_1.default.createElement(blaBlaCarDaily_1.BlaBlaCarDailyIllustration, null)),
                react_1.default.createElement(BlaBlaCarDaily_style_1.StyledBlaBlaCarDaily.Content, null,
                    react_1.default.createElement(BlaBlaCarDaily_style_1.StyledBlaBlaCarDaily.Title, { as: "h2" }, title),
                    react_1.default.createElement(BlaBlaCarDaily_style_1.StyledBlaBlaCarDaily.Paragraph, { as: "p" }, paragraph),
                    react_1.default.createElement(BlaBlaCarDaily_style_1.StyledBlaBlaCarDaily.Link, { action: link, href: href }))))));
};
exports.BlaBlaCarDaily = BlaBlaCarDaily;
