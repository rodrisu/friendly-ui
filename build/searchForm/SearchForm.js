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
exports.SearchForm = exports.SearchFormElements = exports.SearchFormDisplay = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var react_transition_group_1 = require("react-transition-group");
var classcat_1 = __importDefault(require("classcat"));
var exenv_1 = require("exenv");
var branding_1 = require("../_utils/branding");
var mediaSizeProvider_1 = require("../_utils/mediaSizeProvider");
var bullet_1 = require("../bullet");
var datePicker_1 = require("../datePicker");
var calendarIcon_1 = require("../icon/calendarIcon");
var doubleArrowIcon_1 = require("../icon/doubleArrowIcon");
var searchIcon_1 = require("../icon/searchIcon");
var standardSeat_1 = require("../icon/standardSeat");
var title_1 = require("../typography/title");
var overlay_1 = require("./autoComplete/overlay");
var section_1 = require("./autoComplete/section");
var overlay_2 = require("./datePicker/overlay");
var section_2 = require("./datePicker/section");
var overlay_3 = require("./overlay");
var overlay_4 = require("./price/overlay");
var section_3 = require("./price/section");
var SearchForm_style_1 = require("./SearchForm.style");
var SearchFormDivider_1 = require("./SearchFormDivider");
var SlideSwitchTransition_1 = require("./SlideSwitchTransition");
var overlay_5 = require("./stepper/overlay");
var section_4 = require("./stepper/section");
var transitionConfig_1 = require("./transitionConfig");
var SearchFormDisplay;
(function (SearchFormDisplay) {
    SearchFormDisplay["AUTO"] = "auto";
    SearchFormDisplay["SMALL"] = "small";
    SearchFormDisplay["LARGE"] = "large";
})(SearchFormDisplay || (exports.SearchFormDisplay = SearchFormDisplay = {}));
var SearchFormElements;
(function (SearchFormElements) {
    SearchFormElements["DATEPICKER"] = "DATEPICKER";
    SearchFormElements["STEPPER"] = "STEPPER";
    SearchFormElements["PRICE"] = "PRICE";
    SearchFormElements["AUTOCOMPLETE_FROM"] = "AUTOCOMPLETE_FROM";
    SearchFormElements["AUTOCOMPLETE_TO"] = "AUTOCOMPLETE_TO";
})(SearchFormElements || (exports.SearchFormElements = SearchFormElements = {}));
var getPlaceholderText = function (initial, autocompleted, placeholder) {
    if (autocompleted) {
        return autocompleted;
    }
    if (initial) {
        return initial;
    }
    return placeholder;
};
var SearchForm = function (_a) {
    var _b;
    var className = _a.className, onSubmit = _a.onSubmit, _c = _a.onChange, onChange = _c === void 0 ? function () { } : _c, initialFrom = _a.initialFrom, initialTo = _a.initialTo, disabledFrom = _a.disabledFrom, disabledTo = _a.disabledTo, autocompleteFromPlaceholder = _a.autocompleteFromPlaceholder, autocompleteToPlaceholder = _a.autocompleteToPlaceholder, renderAutocompleteFrom = _a.renderAutocompleteFrom, renderAutocompleteTo = _a.renderAutocompleteTo, _d = _a.renderDatePickerComponent, renderDatePickerComponent = _d === void 0 ? function (props) { return react_1.default.createElement(datePicker_1.DatePicker, __assign({}, props)); } : _d, datepickerProps = _a.datepickerProps, stepperProps = _a.stepperProps, priceProps = _a.priceProps, submitButtonText = _a.submitButtonText, _e = _a.display, display = _e === void 0 ? SearchFormDisplay.AUTO : _e, _f = _a.showDateField, showDateField = _f === void 0 ? true : _f, _g = _a.submitButtonRef, submitButtonRef = _g === void 0 ? null : _g, _h = _a.showInvertButton, showInvertButton = _h === void 0 ? true : _h, addon = _a.addon;
    var isLargeMediaSize = (0, mediaSizeProvider_1.useIsLargeMediaSize)();
    var isSmallMediaSize = !isLargeMediaSize;
    // We allow the component display to be overriden by a prop
    var isLargeDisplay = display === SearchFormDisplay.LARGE || (display === SearchFormDisplay.AUTO && isLargeMediaSize);
    var isSmallDisplay = display === SearchFormDisplay.SMALL || (display === SearchFormDisplay.AUTO && isSmallMediaSize);
    var _j = (0, react_1.useState)(null), elementOpened = _j[0], setElementOpened = _j[1];
    // Used as "trigger" each time the value is changed for the invert animation.
    // Only the change resulting from the invert button should be animated.
    var animationKey = react_1.default.useRef(0);
    var _k = (0, react_1.useState)((_b = {},
        _b[SearchFormElements.STEPPER] = stepperProps.defaultValue,
        _b[SearchFormElements.PRICE] = priceProps.defaultValue,
        _b[SearchFormElements.DATEPICKER] = datepickerProps.defaultValue,
        _b)), formValues = _k[0], setFormValues = _k[1];
    (0, react_1.useEffect)(function () {
        onChange(formValues);
    }, [onChange, formValues]);
    var getStepperFormattedValue = function () {
        if (stepperProps.format == null) {
            return "".concat(formValues[SearchFormElements.STEPPER]);
        }
        return stepperProps.format(formValues[SearchFormElements.STEPPER]);
    };
    var getPriceFormattedValue = function () {
        if (priceProps.format == null) {
            return "".concat(formValues[SearchFormElements.PRICE]);
        }
        return priceProps.format(formValues[SearchFormElements.PRICE]);
    };
    var getDatepickerFormattedValue = function () {
        if (datepickerProps.format == null) {
            return formValues[SearchFormElements.DATEPICKER];
        }
        return datepickerProps.format(formValues[SearchFormElements.DATEPICKER]);
    };
    var selectedDate = new Date(formValues[SearchFormElements.DATEPICKER]);
    var closeElement = function (elementToClose) {
        setElementOpened(function (openedElement) {
            // Make sure we are still on the element we want to close.
            // We don't want to close another element.
            if (openedElement === elementToClose) {
                return null;
            }
            return openedElement;
        });
    };
    var datepickerConfig = {
        title: getDatepickerFormattedValue(),
        name: 'datepicker',
        initialDate: selectedDate,
        initialMonth: selectedDate,
        onChange: function (_a) {
            var value = _a.value;
            closeElement(SearchFormElements.DATEPICKER);
            setFormValues(function (currentFormValues) {
                var _a;
                return (__assign(__assign({}, currentFormValues), (_a = {}, _a[SearchFormElements.DATEPICKER] = value, _a)));
            });
        },
        renderDatePickerComponent: renderDatePickerComponent,
    };
    var stepperConfig = {
        name: 'stepper',
        min: stepperProps.min,
        max: stepperProps.max,
        itemTitle: getStepperFormattedValue(),
        title: stepperProps.title,
        increaseLabel: stepperProps.increaseLabel,
        decreaseLabel: stepperProps.decreaseLabel,
        value: formValues[SearchFormElements.STEPPER],
        onChange: function (_a) {
            var value = _a.value;
            closeElement(SearchFormElements.STEPPER);
            setFormValues(function (currentFormValues) {
                var _a;
                return (__assign(__assign({}, currentFormValues), (_a = {}, _a[SearchFormElements.STEPPER] = value, _a)));
            });
        },
    };
    var priceConfig = {
        name: 'price',
        min: priceProps.min,
        max: priceProps.max,
        itemTitle: getPriceFormattedValue(),
        title: priceProps.title,
        increaseLabel: priceProps.increaseLabel,
        decreaseLabel: priceProps.decreaseLabel,
        value: formValues[SearchFormElements.PRICE],
        onChange: function (_a) {
            var value = _a.value;
            closeElement(SearchFormElements.PRICE);
            setFormValues(function (currentFormValues) {
                var _a;
                return (__assign(__assign({}, currentFormValues), (_a = {}, _a[SearchFormElements.PRICE] = value, _a)));
            });
        },
    };
    var autocompleteFromConfig = {
        name: 'from',
        placeholder: autocompleteFromPlaceholder,
        renderAutocompleteComponent: renderAutocompleteFrom,
        onSelect: function (value) {
            setFormValues(function (currentFormValues) {
                var _a;
                return (__assign(__assign({}, currentFormValues), (_a = {}, _a[SearchFormElements.AUTOCOMPLETE_FROM] = value, _a)));
            });
            // We only open the destination when it doesn't have a value on large media.
            if (isLargeMediaSize && !initialTo && !formValues[SearchFormElements.AUTOCOMPLETE_TO]) {
                setElementOpened(SearchFormElements.AUTOCOMPLETE_TO);
            }
            else {
                closeElement(SearchFormElements.AUTOCOMPLETE_FROM);
            }
        },
    };
    var autocompleteToConfig = {
        name: 'to',
        placeholder: autocompleteToPlaceholder,
        renderAutocompleteComponent: renderAutocompleteTo,
        onSelect: function (value) {
            setFormValues(function (currentFormValues) {
                var _a;
                return (__assign(__assign({}, currentFormValues), (_a = {}, _a[SearchFormElements.AUTOCOMPLETE_TO] = value, _a)));
            });
            // As the date have a default value we cannot check whether it was
            // changed by the user.
            if (isLargeMediaSize) {
                setElementOpened(SearchFormElements.DATEPICKER);
            }
            else {
                closeElement(SearchFormElements.AUTOCOMPLETE_TO);
            }
        },
    };
    var transitionSectionConfig = {
        classNames: transitionConfig_1.TRANSITION_SECTION_CLASS_NAME,
        timeout: transitionConfig_1.transitionSectionTimeout,
        mountOnEnter: true,
        unmountOnExit: true,
    };
    var invertFromTo = function () {
        // Trigger the animation for the next update.
        animationKey.current += 1;
        setFormValues(function (currentFormValues) {
            var _a;
            return (__assign(__assign({}, currentFormValues), (_a = {}, _a[SearchFormElements.AUTOCOMPLETE_FROM] = formValues[SearchFormElements.AUTOCOMPLETE_TO], _a[SearchFormElements.AUTOCOMPLETE_TO] = formValues[SearchFormElements.AUTOCOMPLETE_FROM], _a)));
        });
    };
    var autocompleteFromValue = formValues[SearchFormElements.AUTOCOMPLETE_FROM];
    var autocompleteToValue = formValues[SearchFormElements.AUTOCOMPLETE_TO];
    var doShowInvertButton = showInvertButton &&
        (formValues[SearchFormElements.AUTOCOMPLETE_FROM] != null ||
            formValues[SearchFormElements.AUTOCOMPLETE_TO] != null);
    return (react_1.default.createElement(SearchForm_style_1.StyledSearchForm, { action: "", noValidate: true, className: (0, classcat_1.default)(['kirk-searchForm', className]), role: "search", method: "post", onSubmit: function (evt) {
            evt.preventDefault();
            onSubmit(formValues);
        }, "$isSmallDisplay": isSmallDisplay, "$isLargeDisplay": isLargeDisplay, "$showDateField": showDateField, "$showAddon": Boolean(addon) },
        react_1.default.createElement("div", { className: "kirk-searchForm-from-container" },
            react_1.default.createElement("div", { className: "kirk-searchForm-from" },
                react_1.default.createElement(SlideSwitchTransition_1.SlideSwitchTransition, { side: isSmallMediaSize ? SlideSwitchTransition_1.SlideSwitchTransitionSide.BOTTOM : SlideSwitchTransition_1.SlideSwitchTransitionSide.RIGHT, childrenKey: animationKey.current },
                    react_1.default.createElement("button", { type: "button", className: "kirk-search-button", onClick: function () { return setElementOpened(SearchFormElements.AUTOCOMPLETE_FROM); }, disabled: disabledFrom },
                        react_1.default.createElement("span", { className: "kirk-bullet--searchForm" },
                            react_1.default.createElement(bullet_1.Bullet, { type: bullet_1.BulletTypes.SEARCH })),
                        react_1.default.createElement(title_1.TextTitle, { className: (0, classcat_1.default)([
                                'kirk-search-ellipsis',
                                { 'kirk-search-placeholder': !autocompleteFromValue && !initialFrom },
                            ]) }, getPlaceholderText(initialFrom, autocompleteFromValue === null || autocompleteFromValue === void 0 ? void 0 : autocompleteFromValue.item.label, autocompleteFromPlaceholder))))),
            react_1.default.createElement("div", { className: "kirk-searchForm-invert" },
                react_1.default.createElement("button", { type: "button", className: "kirk-search-button", onClick: invertFromTo, 
                    // We need to keep it the DOM to preserve the form size.
                    disabled: !doShowInvertButton },
                    react_1.default.createElement(doubleArrowIcon_1.DoubleArrowIcon, { iconColor: branding_1.color.blue })))),
        react_1.default.createElement(SearchFormDivider_1.ResponsiveDivider, { "$isSmallDisplay": isSmallDisplay, "$isLargeDisplay": isLargeDisplay }),
        react_1.default.createElement(overlay_3.Overlay, { shouldDisplay: isLargeMediaSize && elementOpened === SearchFormElements.AUTOCOMPLETE_FROM, closeOnBlur: function () { return closeElement(SearchFormElements.AUTOCOMPLETE_FROM); }, className: "kirk-searchForm-overlay kirk-searchForm-autocomplete-from" },
            react_1.default.createElement(overlay_1.AutoCompleteOverlay, __assign({}, autocompleteFromConfig))),
        isSmallMediaSize &&
            exenv_1.canUseDOM &&
            (0, react_dom_1.createPortal)(react_1.default.createElement(react_transition_group_1.CSSTransition, __assign({ in: elementOpened === SearchFormElements.AUTOCOMPLETE_FROM }, transitionSectionConfig),
                react_1.default.createElement(section_1.AutoCompleteSection, __assign({}, autocompleteFromConfig, { onClose: function () { return closeElement(SearchFormElements.AUTOCOMPLETE_FROM); } }))), document.body),
        react_1.default.createElement("div", { className: "kirk-searchForm-to" },
            react_1.default.createElement(SlideSwitchTransition_1.SlideSwitchTransition, { side: isSmallMediaSize ? SlideSwitchTransition_1.SlideSwitchTransitionSide.TOP : SlideSwitchTransition_1.SlideSwitchTransitionSide.LEFT, childrenKey: animationKey.current },
                react_1.default.createElement("button", { type: "button", className: "kirk-search-button", onClick: function () { return setElementOpened(SearchFormElements.AUTOCOMPLETE_TO); }, disabled: disabledTo },
                    react_1.default.createElement("span", { className: "kirk-bullet--searchForm" },
                        react_1.default.createElement(bullet_1.Bullet, { type: bullet_1.BulletTypes.SEARCH })),
                    react_1.default.createElement(title_1.TextTitle, { className: (0, classcat_1.default)([
                            'kirk-search-ellipsis',
                            { 'kirk-search-placeholder': !autocompleteToValue && !initialTo },
                        ]) }, getPlaceholderText(initialTo, autocompleteToValue === null || autocompleteToValue === void 0 ? void 0 : autocompleteToValue.item.label, autocompleteToPlaceholder))))),
        react_1.default.createElement(SearchFormDivider_1.ResponsiveDivider, { "$isSmallDisplay": isSmallDisplay, "$isLargeDisplay": isLargeDisplay }),
        react_1.default.createElement(overlay_3.Overlay, { shouldDisplay: isLargeMediaSize && elementOpened === SearchFormElements.AUTOCOMPLETE_TO, closeOnBlur: function () { return closeElement(SearchFormElements.AUTOCOMPLETE_TO); }, className: "kirk-searchForm-overlay kirk-searchForm-autocomplete-to" },
            react_1.default.createElement(overlay_1.AutoCompleteOverlay, __assign({}, autocompleteToConfig))),
        isSmallMediaSize &&
            exenv_1.canUseDOM &&
            (0, react_dom_1.createPortal)(react_1.default.createElement(react_transition_group_1.CSSTransition, __assign({ in: elementOpened === SearchFormElements.AUTOCOMPLETE_TO }, transitionSectionConfig),
                react_1.default.createElement(section_1.AutoCompleteSection, __assign({}, autocompleteToConfig, { onClose: function () { return closeElement(SearchFormElements.AUTOCOMPLETE_TO); } }))), document.body),
        react_1.default.createElement("div", { className: "kirk-searchForm-dateSeat-container" },
            (isLargeDisplay || showDateField) && (react_1.default.createElement(react_1.Fragment, null,
                react_1.default.createElement("div", { className: "kirk-searchForm-date" },
                    react_1.default.createElement("button", { type: "button", className: "kirk-search-button", onClick: function () { return setElementOpened(SearchFormElements.DATEPICKER); } },
                        react_1.default.createElement(calendarIcon_1.CalendarIcon, null),
                        react_1.default.createElement(title_1.TextTitle, { className: "kirk-search-ellipsis" }, getDatepickerFormattedValue()))),
                react_1.default.createElement(overlay_3.Overlay, { shouldDisplay: isLargeMediaSize && elementOpened === SearchFormElements.DATEPICKER, closeOnBlur: function () { return closeElement(SearchFormElements.DATEPICKER); }, className: "kirk-searchForm-overlay kirk-searchForm-datepicker" },
                    react_1.default.createElement(overlay_2.DatePickerOverlay, __assign({}, datepickerConfig))),
                isSmallMediaSize &&
                    exenv_1.canUseDOM &&
                    (0, react_dom_1.createPortal)(react_1.default.createElement(react_transition_group_1.CSSTransition, __assign({ in: elementOpened === SearchFormElements.DATEPICKER }, transitionSectionConfig),
                        react_1.default.createElement(section_2.DatePickerSection, __assign({}, datepickerConfig, { onClose: function () { return closeElement(SearchFormElements.DATEPICKER); } }))), document.body),
                react_1.default.createElement(SearchFormDivider_1.VerticalDivider, null))),
            react_1.default.createElement("div", { className: "kirk-searchForm-seats" },
                react_1.default.createElement("button", { type: "button", className: "kirk-search-button", onClick: function () { return setElementOpened(SearchFormElements.STEPPER); } },
                    react_1.default.createElement(standardSeat_1.StandardSeatIcon, null),
                    react_1.default.createElement(title_1.TextTitle, { className: "kirk-search-ellipsis" }, getStepperFormattedValue()))),
            react_1.default.createElement(overlay_3.Overlay, { shouldDisplay: isLargeMediaSize && elementOpened === SearchFormElements.STEPPER, closeOnBlur: function () { return closeElement(SearchFormElements.STEPPER); }, className: "kirk-searchForm-overlay kirk-searchForm-stepper" },
                react_1.default.createElement(overlay_5.StepperOverlay, __assign({}, stepperConfig, { onChange: function (_a) {
                        var value = _a.value;
                        setFormValues(function (currentFormValues) {
                            var _a;
                            return (__assign(__assign({}, currentFormValues), (_a = {}, _a[SearchFormElements.STEPPER] = value, _a)));
                        });
                    } }))),
            isSmallMediaSize &&
                exenv_1.canUseDOM &&
                (0, react_dom_1.createPortal)(react_1.default.createElement(react_transition_group_1.CSSTransition, __assign({ in: elementOpened === SearchFormElements.STEPPER }, transitionSectionConfig),
                    react_1.default.createElement(section_4.StepperSection, __assign({}, stepperConfig, { confirmLabel: stepperProps.confirmLabel, onClose: function () { return closeElement(SearchFormElements.STEPPER); } }))), document.body),
            react_1.default.createElement(SearchFormDivider_1.VerticalDivider, null),
            react_1.default.createElement("div", { className: "kirk-searchForm-price" },
                react_1.default.createElement("button", { type: "button", className: "kirk-search-button", onClick: function () { return setElementOpened(SearchFormElements.PRICE); } },
                    react_1.default.createElement(standardSeat_1.StandardSeatIcon, null),
                    react_1.default.createElement(title_1.TextTitle, { className: "kirk-search-ellipsis" }, getPriceFormattedValue()))),
            react_1.default.createElement(overlay_3.Overlay, { shouldDisplay: isLargeMediaSize && elementOpened === SearchFormElements.PRICE, closeOnBlur: function () { return closeElement(SearchFormElements.PRICE); }, className: "kirk-searchForm-overlay kirk-searchForm-price" },
                react_1.default.createElement(overlay_4.PriceOverlay, __assign({}, priceConfig, { onChange: function (_a) {
                        var value = _a.value;
                        setFormValues(function (currentFormValues) {
                            var _a;
                            return (__assign(__assign({}, currentFormValues), (_a = {}, _a[SearchFormElements.PRICE] = value, _a)));
                        });
                    } }))),
            isSmallMediaSize &&
                exenv_1.canUseDOM &&
                (0, react_dom_1.createPortal)(react_1.default.createElement(react_transition_group_1.CSSTransition, __assign({ in: elementOpened === SearchFormElements.PRICE }, transitionSectionConfig),
                    react_1.default.createElement(section_3.PriceSection, __assign({}, priceConfig, { confirmLabel: priceProps.confirmLabel, onClose: function () { return closeElement(SearchFormElements.PRICE); } }))), document.body)),
        isSmallDisplay && addon && (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(SearchFormDivider_1.ResponsiveDivider, { "$isSmallDisplay": isSmallDisplay, "$isLargeDisplay": isLargeDisplay }),
            react_1.default.createElement("div", { className: "kirk-searchForm-addon" }, addon))),
        react_1.default.createElement("div", { className: "kirk-searchForm-submit" },
            react_1.default.createElement("button", { type: "submit", className: "kirk-search-button", "data-testid": "kirk-search-form-submit-buttom", ref: submitButtonRef },
                (isLargeDisplay || !submitButtonText) && (react_1.default.createElement(searchIcon_1.SearchIcon, { iconColor: branding_1.color.white, strokeWidth: "2" })),
                submitButtonText && isSmallDisplay && (react_1.default.createElement(title_1.TextTitle, { isInverted: true }, submitButtonText))))));
};
exports.SearchForm = SearchForm;
