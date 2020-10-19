"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _with_activity = _interopRequireDefault(require("with_activity"));

var _reactRouterDom = require("react-router-dom");

var _router = require("router");

var _async = _interopRequireDefault(require("../async"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(Component, _ref) {
  var createPath = _ref.createPath,
      updatePath = _ref.updatePath,
      keys = _ref.keys,
      init = _ref.init,
      newPath = _ref.newPath,
      _ref$validatorProps = _ref.validatorProps,
      validatorProps = _ref$validatorProps === void 0 ? {} : _ref$validatorProps,
      headers = _ref.headers;

  function withForm(props) {
    var match = props.match,
        toggleActivity = props.toggleActivity;

    var _useAsync = (0, _async["default"])(toggleActivity),
        _useAsync2 = _slicedToArray(_useAsync, 2),
        resourceRes = _useAsync2[0],
        fetchResource = _useAsync2[1];

    var _React$useState = _react["default"].useState(),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        action = _React$useState2[0],
        setAction = _React$useState2[1];

    var form = (0, _index["default"])({
      init: init,
      action: action,
      validatorProps: validatorProps,
      toggleActivity: toggleActivity,
      headers: headers
    });
    var formState = form.formState,
        isEditing = form.isEditing,
        validator = form.validator,
        handleIsEditing = form.handleIsEditing,
        onChange = form.onChange,
        onSubmit = form.onSubmit,
        result = form.result,
        formHelper = form.formHelper,
        onValidate = form.onValidate,
        setFormState = form.setFormState;

    _react["default"].useEffect(function () {
      if (!resourceRes) return;
      var status = resourceRes.status,
          response = resourceRes.response;
      if (status === 200) handleIsEditing(setState(JSON.parse(response)));
    }, [resourceRes]);

    _react["default"].useEffect(function () {
      if (newPath) {
        var params = (0, _router.urlResourceExtractor)(match, keys);
        var path = (0, _router.buildRoute)(newPath, params);
        var neW = path !== window.location.pathname;

        if (neW) {
          setAction(path);
          fetchResource({
            path: path,
            method: "get"
          });
        } else setAction((0, _router.buildRoute)(createPath, params));
      }
    }, []);

    return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, form));
  }

  return (0, _reactRouterDom.withRouter)((0, _with_activity["default"])(withForm));
}