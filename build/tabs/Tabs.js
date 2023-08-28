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
exports.Tabs = exports.TabStatus = void 0;
/* eslint-disable react/button-has-type */
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var badge_1 = require("../badge");
var tabs_style_1 = require("./tabs.style");
var TabStatus;
(function (TabStatus) {
    TabStatus["SCROLLABLE"] = "scrollable";
    TabStatus["FIXED"] = "fixed";
})(TabStatus || (exports.TabStatus = TabStatus = {}));
var getPreviousTabId = function (tabId, tabIds) {
    var idIndex = tabIds.findIndex(function (currentTabId) { return currentTabId === tabId; });
    if (idIndex !== null && idIndex >= 1) {
        return tabIds[idIndex - 1];
    }
    // User went left after the first tab, return id from the last tab.
    return tabIds[tabIds.length - 1];
};
var getNextTabId = function (tabId, tabIds) {
    var idIndex = tabIds.findIndex(function (currentTabId) { return currentTabId === tabId; });
    if (idIndex !== null && idIndex < tabIds.length - 1) {
        return tabIds[idIndex + 1];
    }
    // User went right after the last tab, return id from the first tab.
    return tabIds[0];
};
var createTabIdToRefMap = function (tabs) {
    var tabIdToRef = new Map();
    tabs.forEach(function (tab) {
        tabIdToRef.set(tab.id, (0, react_1.createRef)());
    });
    return tabIdToRef;
};
var generateTabPanelId = function (tab) { return "".concat(tab.id, "_panel"); };
/**
 * A basic Tabs component made of:
 *  - a list of selectable tabs (only one can be selected at a time)
 *  - one panel: its content is controlled by the selected tab
 *
 * It follows most of the ARIA authoring recommendations for a Tabs component from:
 * https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
 * In particular, it implements most of the recommended shortcuts, role structure and is using
 * a roving tabindex for the focus management.
 */
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeTabId: _this.props.activeTabId,
            tabIdToRefs: createTabIdToRefMap(_this.props.tabs),
        };
        _this.highlightRef = react_1.default.createRef();
        _this.tabsGroupRef = react_1.default.createRef();
        _this.handleTabClicked = function (e) {
            _this.activateTabById(e.currentTarget.id);
        };
        _this.handleTabKeyDown = function (e) {
            var tabId = e.currentTarget.id;
            var tabIds = _this.props.tabs.map(function (tab) { return tab.id; });
            var nextTabId = null;
            // eslint-disable-next-line default-case
            switch (e.key) {
                case 'ArrowLeft':
                    nextTabId = getPreviousTabId(tabId, tabIds);
                    break;
                case 'ArrowRight':
                    nextTabId = getNextTabId(tabId, tabIds);
                    break;
                case 'Home':
                    nextTabId = '0';
                    break;
                case 'End':
                    nextTabId = tabIds[tabIds.length - 1];
                    break;
            }
            if (nextTabId) {
                _this.activateTabById(nextTabId);
                var tabRef = _this.state.tabIdToRefs.get(nextTabId);
                tabRef.current.focus();
            }
        };
        _this.moveHighlight = function (activeTabId) {
            var currentTab = _this.state.tabIdToRefs.get(activeTabId).current;
            var tabBounds = currentTab.getBoundingClientRect();
            // .kirk-tablist-wrapper needed to get the height of the whole component
            // because tabs can have different heights.
            var tabsGroup = _this.tabsGroupRef.current;
            // adapt to current tab width
            _this.highlightRef.current.style.width = "".concat(tabBounds.width, "px");
            // top position, tablist-wrapper height - tablist-wrapper border height
            _this.highlightRef.current.style.top = "".concat(tabsGroup.clientHeight - (tabsGroup.offsetHeight - tabsGroup.clientHeight), "px");
            // left position, tab left position - parent wrapper left position
            _this.highlightRef.current.style.left = "".concat(tabBounds.left - tabsGroup.getBoundingClientRect().left, "px");
        };
        _this.activateTabById = function (activeTabId) {
            _this.setState({ activeTabId: activeTabId });
            _this.props.onChange(activeTabId);
        };
        return _this;
    }
    Tabs.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.activeTabId !== this.props.activeTabId) {
            this.activateTabById(this.props.activeTabId);
        }
        this.moveHighlight(this.state.activeTabId);
    };
    Tabs.prototype.componentDidMount = function () {
        if (this.highlightRef && this.highlightRef.current) {
            this.moveHighlight(this.props.activeTabId);
        }
    };
    Tabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, tabs = _a.tabs, className = _a.className, tabsClassName = _a.tabsClassName;
        if (tabs.length === 0) {
            return null;
        }
        var activeTabId = this.state.activeTabId;
        var selectedTab = tabs.find(function (tab) { return activeTabId === tab.id; });
        var isFixedTabs = this.props.status === TabStatus.FIXED;
        var fixedTabContainerStyle = {
            width: "calc(100% / ".concat(tabs.length, ")"),
        };
        return (react_1.default.createElement(tabs_style_1.StyledTabs, { role: "presentation", className: (0, classcat_1.default)(className) },
            react_1.default.createElement("div", { ref: this.tabsGroupRef, className: (0, classcat_1.default)(['kirk-tabs', tabsClassName, { 'kirk-tabs-fixed': isFixedTabs }]) },
                react_1.default.createElement("div", { className: (0, classcat_1.default)(['kirk-tablist-wrapper']) },
                    react_1.default.createElement("div", { className: "kirk-tab-highlight", ref: this.highlightRef }),
                    react_1.default.createElement("div", { role: "tablist", "aria-orientation": "horizontal", "aria-multiselectable": "false", className: (0, classcat_1.default)('kirk-tablist') }, tabs.map(function (tab) {
                        var isSelected = selectedTab.id === tab.id;
                        return (react_1.default.createElement("div", { className: (0, classcat_1.default)(['kirk-tab-container', { 'kirk-tab-selected': isSelected }]), style: isFixedTabs ? fixedTabContainerStyle : null, key: tab.id },
                            react_1.default.createElement("button", { role: "tab", "aria-controls": generateTabPanelId(tab), "aria-selected": isSelected ? 'true' : 'false', title: "".concat(tab.label).concat(tab.badgeAriaLabel ? " ".concat(tab.badgeAriaLabel) : ''), tabIndex: isSelected ? 0 : -1, id: tab.id, ref: _this.state.tabIdToRefs.get(tab.id), onClick: _this.handleTabClicked, onKeyDown: _this.handleTabKeyDown, className: "kirk-tab" },
                                react_1.default.createElement("span", { className: "kirk-tab-content" },
                                    tab.icon,
                                    !tab.showIconOnly && (react_1.default.createElement("span", { className: (0, classcat_1.default)([
                                            'kirk-tab-text',
                                            { 'kirk-tab-text--with-icon': tab.icon && !tab.showIconOnly },
                                        ]) }, tab.label)),
                                    tab.badgeContent && (react_1.default.createElement(badge_1.Badge, { "aria-label": tab.badgeAriaLabel, className: "kirk-tab-badge" }, tab.badgeContent))),
                                tab.secondLine && (react_1.default.createElement("span", { className: "kirk-tab-second-line" }, tab.secondLine)))));
                    })))),
            react_1.default.createElement("div", { className: "kirk-panels-section", role: "presentation" }, tabs.map(function (tab) {
                var isSelected = selectedTab.id === tab.id;
                return (react_1.default.createElement("div", { role: "tabpanel", className: "kirk-tab-panel", id: generateTabPanelId(tab), key: tab.id, "aria-labelledby": tab.id, hidden: !isSelected }, isSelected ? tab.panelContent : null));
            }))));
    };
    Tabs.defaultProps = {
        onChange: function () { },
        status: TabStatus.SCROLLABLE,
        className: '',
        tabsClassName: '',
    };
    Tabs.STATUS = TabStatus;
    return Tabs;
}(react_1.PureComponent));
exports.Tabs = Tabs;
