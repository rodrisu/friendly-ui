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
exports.PhoneField = exports.FIELDS = void 0;
var react_1 = __importStar(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var lodash_isempty_1 = __importDefault(require("lodash.isempty"));
var lodash_isequal_1 = __importDefault(require("lodash.isequal"));
var country_telephone_data_1 = require("country-telephone-data");
var _utils_1 = require("../_utils");
var interfaces_1 = require("../_utils/interfaces");
var selectField_1 = require("../selectField");
var textField_1 = require("../textField");
var PhoneField_style_1 = require("./PhoneField.style");
var FIELDS;
(function (FIELDS) {
    FIELDS["PHONENUMBER"] = "phoneNumber";
    FIELDS["PHONEREGION"] = "phoneRegion";
})(FIELDS || (exports.FIELDS = FIELDS = {}));
var allCountryPhoneData = country_telephone_data_1.allCountries;
/* Format and keep only used data */
var formattedCountryPhoneData = allCountryPhoneData.map(function (countryData) { return ({
    name: countryData.name,
    iso2: countryData.iso2.toUpperCase(),
    dialCode: "+".concat(countryData.dialCode),
}); });
/**
 * Filter countries data according to whitelist
 * @param {Array} countryList in ISO2 format ex: ['FR', 'ES']
 * @return {formattedCountriesPhoneData}
 */
var filterIso2 = function (countryList) {
    return formattedCountryPhoneData.filter(function (country) { return countryList.includes(country.iso2); });
};
/**
 * Return country data according to ISO2 defaultValue
 * @param {string} countryDefault ISO2 format ex: 'FR'
 * @return {formattedCountriesPhoneData}
 */
var findIso2 = function (countryDefault) {
    return formattedCountryPhoneData.find(function (country) { return country.iso2 === countryDefault; });
};
var mapCountriesPhoneData = function (countryData, countryNames) {
    return countryData.map(function (data) { return ({
        value: data.iso2,
        label: "".concat(!(0, lodash_isempty_1.default)(countryNames[data.iso2]) ? countryNames[data.iso2] : data.name, " ").concat(data.dialCode),
    }); });
};
/* Alphabetically sorted */
var sortCountriesPhoneData = function (mappedCountryPhoneData) {
    return mappedCountryPhoneData.sort(function (a, b) {
        if (a.label < b.label) {
            return -1;
        }
        if (a.label > b.label) {
            return 1;
        }
        return 0;
    });
};
var iso2toDialCode = function (iso2Value) {
    if ((0, lodash_isempty_1.default)(iso2Value)) {
        return '';
    }
    var countryPhoneData = findIso2(iso2Value);
    if (countryPhoneData) {
        return countryPhoneData.dialCode;
    }
    return '';
};
var DisplayError = function (error) {
    var className = 'kirk-error-message';
    return react_1.default.isValidElement(error) ? (react_1.default.cloneElement(error, { className: className })) : (react_1.default.createElement("span", { role: "alert", className: className }, error));
};
var countryData = function (whitelist, countryNames) {
    if (!(0, lodash_isempty_1.default)(whitelist)) {
        var whiteListCountriesPhoneData = filterIso2(whitelist);
        var whitelistMapped = mapCountriesPhoneData(whiteListCountriesPhoneData, countryNames);
        return sortCountriesPhoneData(whitelistMapped);
    }
    var countriesDatasMapped = mapCountriesPhoneData(formattedCountryPhoneData, countryNames);
    return sortCountriesPhoneData(countriesDatasMapped);
};
/**
 * TODO: BBCSPA-3355 Fix A11y issues on label and error state
 */
var PhoneField = /** @class */ (function (_super) {
    __extends(PhoneField, _super);
    function PhoneField(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.state = (_a = {
                countryData: countryData(_this.props.countryWhitelist, _this.props.customCountryNames),
                countryWhitelist: _this.props.countryWhitelist
            },
            _a[FIELDS.PHONENUMBER] = _this.props.defaultPhoneValue,
            _a[FIELDS.PHONEREGION] = !(0, lodash_isempty_1.default)(_this.props.defaultRegionValue)
                ? _this.props.defaultRegionValue
                : '',
            _a.phonePrefix = iso2toDialCode(_this.props.defaultRegionValue),
            _a.completePhoneNumber = iso2toDialCode(_this.props.defaultRegionValue) + _this.props.defaultPhoneValue,
            _a.hasFocus = false,
            _a);
        _this.handleChange = function (_a) {
            var _b;
            var name = _a.name, value = _a.value;
            _this.setState((_b = {}, _b[name] = value, _b), function () {
                var _a;
                _this.props.onChange({
                    name: _this.props.name,
                    value: (_a = {},
                        _a[FIELDS.PHONENUMBER] = _this.state[FIELDS.PHONENUMBER],
                        _a[FIELDS.PHONEREGION] = _this.state[FIELDS.PHONEREGION],
                        _a.phonePrefix = iso2toDialCode(_this.state[FIELDS.PHONEREGION]),
                        _a.completePhoneNumber = iso2toDialCode(_this.state[FIELDS.PHONEREGION]) + _this.state[FIELDS.PHONENUMBER],
                        _a),
                });
            });
        };
        _this.onFocus = function () {
            _this.setState({ hasFocus: true });
        };
        _this.onBlur = function () {
            _this.setState({ hasFocus: false });
        };
        _this.ref = react_1.default.createRef();
        return _this;
    }
    PhoneField.getDerivedStateFromProps = function (props, state) {
        if (!(0, lodash_isequal_1.default)(props.countryWhitelist, state.countryWhitelist)) {
            return {
                countryData: countryData(props.countryWhitelist, props.customCountryNames),
                countryWhitelist: props.countryWhitelist,
            };
        }
        return null;
    };
    PhoneField.prototype.componentDidMount = function () {
        if (this.ref && this.props.focus) {
            this.ref.current.focus();
        }
    };
    PhoneField.prototype.componentDidUpdate = function (prevProps) {
        if (this.ref && this.props.focus && prevProps.focus !== this.props.focus) {
            this.ref.current.focus();
        }
    };
    PhoneField.prototype.render = function () {
        var _a = this.props, selectFieldLabel = _a.selectFieldLabel, textFieldTitle = _a.textFieldTitle, textFieldPlaceholder = _a.textFieldPlaceholder, defaultPhoneValue = _a.defaultPhoneValue, isInline = _a.isInline, selectAutoFocus = _a.selectAutoFocus, error = _a.error;
        var a11yAttrs = (0, interfaces_1.pickA11yProps)(this.props);
        var baseClassName = (0, classcat_1.default)([(0, _utils_1.prefix)({ phoneField: true })]);
        var wrapperClassName = "".concat(baseClassName, "-wrapper");
        var classNames = (0, classcat_1.default)([
            isInline ? "".concat(wrapperClassName, "--inline") : wrapperClassName,
            this.props.innerWrapperClassName,
            this.state.hasFocus && "".concat(wrapperClassName, "--hasFocus"),
        ]);
        return (react_1.default.createElement(PhoneField_style_1.StyledPhoneField, { className: (0, classcat_1.default)([baseClassName, (0, _utils_1.prefix)({ error: !!error }), this.props.className]) },
            react_1.default.createElement("div", __assign({ className: classNames }, a11yAttrs),
                react_1.default.createElement("div", { className: "".concat(wrapperClassName, "--background") },
                    react_1.default.createElement(selectField_1.SelectField, { name: FIELDS.PHONEREGION, options: this.state.countryData, "aria-label": selectFieldLabel, defaultValue: this.props.defaultRegionValue, onChange: this.handleChange, onFocus: this.onFocus, onBlur: this.onBlur, focusBorder: !isInline, autoFocus: selectAutoFocus, autoComplete: "tel-country-code", ref: this.ref }),
                    react_1.default.createElement(textField_1.TextField, { type: textField_1.inputTypes.TEL, name: FIELDS.PHONENUMBER, placeholder: textFieldPlaceholder, defaultValue: defaultPhoneValue, onChange: this.handleChange, title: textFieldTitle, onFocus: this.onFocus, onBlur: this.onBlur, focusBorder: !isInline, autoComplete: "tel-national" }))),
            !!error && DisplayError(error)));
    };
    PhoneField.defaultProps = {
        defaultRegionValue: '',
        defaultPhoneValue: '',
        countryWhitelist: [],
        customCountryNames: {},
        isInline: true,
    };
    return PhoneField;
}(react_1.PureComponent));
exports.PhoneField = PhoneField;
