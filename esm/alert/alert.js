import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import t from 'prop-types';
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
      rest = _objectWithoutProperties(_ref, ["children", "kind"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: prefixCls,
    style: {
      background: kinds[kind]
    }
  }, rest), children);
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
};
export default Alert;