import * as React from 'react';
import classNames from 'classnames';
import { ButtonProps } from 'cloneui';

import AppProvider from '../app-provider';
import useStyle from './style';

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const {
    children,
    loading,
    className: customizeClassName,
    shape: customShape,
    color,
    size,
    type,
    htmlType,
    variant,
    ...restProps
  } = props;

  const btnRef = React.useRef<HTMLButtonElement>(null);
  // const themeCtx = useTheme();
  const ctx = React.useContext(AppProvider.Context);
  const { getPrefixCls, direction } = ctx;
  const prefixCls = getPrefixCls('btn');
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

  const mergedCls = classNames(
    prefixCls,
    hashId,
    cssVarCls,
    {
      [`${prefixCls}-loading`]: !!loading,
      [`${prefixCls}-${type}`]: type !== null,
      [`${prefixCls}-${size}`]: size !== null,
      [`${prefixCls}-variant`]: variant !== null,
      [`${prefixCls}-${color}`]: variant !== null && color !== null,
      [`${prefixCls}-${customShape}`]: customShape && customShape !== 'default',
    },
    customizeClassName
  );

  return wrapCSSVar(
    <button
      {...restProps}
      ref={btnRef}
      className={mergedCls}
      type={htmlType}
      dir={direction}
    >
      {children}
    </button>
  );
};

export default Button;
