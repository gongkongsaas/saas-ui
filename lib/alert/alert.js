"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var prefixCls = 'saas-alert';
var kinds = {
  info: '#5352ed',
  positive: '#2ed573',
  negative: '#ff4757',
  warning: '#ffa502'
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      _ref$kind = _ref.kind,
      kind = _ref$kind === void 0 ? 'info' : _ref$kind,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "kind"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: prefixCls,
    style: {
      background: kinds[kind]
    }
  }, rest), children);
};

Alert.propTypes = {
  kind: _propTypes.default.oneOf(['info', 'positive', 'negative', 'warning'])
};
var _default = Alert;
exports.default = _default;