"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useForm;

var _react = _interopRequireDefault(require("react"));

var _simpleReactValidator = _interopRequireDefault(require("simple-react-validator"));

var _activity_dialog = require("activity_dialog");

var _snackbar = require("snackbar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useForm(_ref) {
  var init = _ref.init,
      validatorProps = _ref.validatorProps,
      headers = _ref.headers,
      url_params = _ref.url_params,
      name = _ref.name,
      initAction = _ref.initAction,
      afterValidate = _ref.afterValidate;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isEditing = _React$useState2[0],
      setIsEditing = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(init),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      formState = _React$useState4[0],
      setFormState = _React$useState4[1];

  var _React$useRef = _react["default"].useRef(new _simpleReactValidator["default"](validatorProps)),
      validator = _React$useRef.current;

  var _React$useState5 = _react["default"].useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      forceUpdate = _React$useState6[0],
      setForceUpdate = _React$useState6[1];

  var _React$useState7 = _react["default"].useState({}),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      errors = _React$useState8[0],
      setErrors = _React$useState8[1];

  var _React$useState9 = _react["default"].useState(),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      formResult = _React$useState10[0],
      setFormResult = _React$useState10[1];

  var _React$useState11 = _react["default"].useState(),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      editUrl = _React$useState12[0],
      setEditUrl = _React$useState12[1];

  var _React$useState13 = _react["default"].useState(initAction),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      action = _React$useState14[0],
      setAction = _React$useState14[1];

  var _React$useState15 = _react["default"].useState(),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      valid = _React$useState16[0],
      setValid = _React$useState16[1];

  var formStateRef = _react["default"].useRef();

  var showActivityDialog = _react["default"].useContext(_activity_dialog.ShowActivityDialogDispatch);

  var hideActivityDialog = _react["default"].useContext(_activity_dialog.HideActivityDialogDispatch);

  var documentSnackbarSuccessfulMessage = _react["default"].useContext(_snackbar.DocumentSnackbarSuccessfulMessageDispatch);

  var documentSnackbarErrorMessage = _react["default"].useContext(_snackbar.DocumentSnackbarErrorMessageDispatch);

  var onSetIsEditing = function onSetIsEditing(state, url) {
    setIsEditing(true);
    setFormState(state);
    setEditUrl(url || state.url);
  };

  var onClearForm = function onClearForm() {
    setIsEditing(false);
    setFormState(init);
  };

  var onBlur = function onBlur(_ref2) {
    var target = _ref2.target;
    var value = state[target.name];
    validator.showMessageFor(value); // show the error for that value
  };

  var onSetImage = function onSetImage(_ref3, file) {
    var target = _ref3.target;
    var name = target.name;
    setFormState(_objectSpread(_objectSpread({}, formStateRef.current), {}, _defineProperty({}, name, file)));
  };

  var onChange = function onChange(_ref4) {
    var target = _ref4.target;
    var name = target.name,
        value = target.value,
        checked = target.checked;
    var actual = target.type === "checkbox" ? checked : value;
    setFormState(_objectSpread(_objectSpread({}, formStateRef.current), {}, _defineProperty({}, name, actual)));
  };

  var onValidate = function onValidate() {
    if (validator.allValid()) return true;else {
      validator.showMessages();
      setForceUpdate(!forceUpdate);
      return false;
    }
  };

  var formHelper = function formHelper(field, name, rule) {
    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var help = opts.help,
        errorField = opts.errorField; // errorField is to be displayed if it is not null

    if (errorField) {
      var error = validator.messageWhenPresent(errorField);
      if (error) return error;
    }

    if (rule) {
      error = validator.message(name, field, rule);
      if (error) return error;
    }

    return help;
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!onValidate()) return;
    afterValidate();
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    if (!onValidate()) return;
    showActivityDialog("Requesting");
    var method = isEditing ? "put" : "post";
    var a = isEditing ? editUrl : action;
    Client({
      action: a,
      method: method,
      params: name ? _defineProperty({}, name, formState) : formState,
      headers: headers
    }).then(function (res) {
      setFormResult(res);
      var status = res.status,
          response = res.response,
          headers = res.headers;

      if (status === 200 || status === 201 || status === 204) {
        documentSnackbarSuccessfulMessage("Success");
      } else if (status === 422) {
        documentSnackbarErrorMessage("Kindly correct form errors");
        var body = JSON.parse(response);
        setErrors(body.errors);
        validator.showMessages();
        setForceUpdate(!forceUpdate);
      } else {
        throw Error;
      }
    })["catch"](function (err) {
      return documentSnackbarErrorMessage("An error unoccured");
    })["finally"](function () {
      return hideActivityDialog();
    });
  };

  _react["default"].useEffect(function () {
    formStateRef.current = formState;
  }, [formState]);

  return {
    formState: formState,
    isEditing: isEditing,
    validator: validator,
    onSetIsEditing: onSetIsEditing,
    onChange: onChange,
    onSetImage: onSetImage,
    onSubmit: onSubmit,
    formHelper: formHelper,
    onValidate: onValidate,
    setFormState: setFormState,
    errors: errors,
    formResult: formResult,
    onClearForm: onClearForm,
    setEditUrl: setEditUrl,
    valid: valid,
    handleSubmit: handleSubmit
  };
}

;