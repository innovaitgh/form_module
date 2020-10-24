"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _resource = require("resource");

var _router = require("router");

var _ui = require("ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(Component, _ref) {
  var newPath = _ref.newPath,
      editPath = _ref.editPath;
  return function (props) {
    var _React$useState = _react["default"].useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isFetching = _React$useState2[0],
        setIsFetching = _React$useState2[1];

    var match = props.match;

    var showActivity = function showActivity() {
      return setIsFetching(true);
    };

    var hideActivity = function hideActivity() {
      return setIsFetching(false);
    };

    var resource = (0, _resource.useResource)({
      showActivity: showActivity,
      hideActivity: hideActivity
    });
    var fetchResource = resource.fetchResource;

    _react["default"].useEffect(function () {
      if (window.location.pathname !== newPath) {
        var keys = (0, _router.urlResourceExtractor)(match, ["id"]);
        var action = (0, _router.buildRoute)(editPath, keys);
        fetchResource(action);
      }
    }, []);

    if (isFetching) return /*#__PURE__*/_react["default"].createElement(_ui.Activity, null);
    return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, resource, props));
  };
};

exports["default"] = _default;