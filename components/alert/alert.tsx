import React from 'react';
import t from 'prop-types';

import { AlertProps, KindMap } from './interface';

const prefixCls = 'saas-alert';

const kinds: KindMap = {
  info: '#5352ed',
  positive: '#2ed573',
  negative: '#ff4757',
  warning: '#ffa502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
