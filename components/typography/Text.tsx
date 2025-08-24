import * as React from 'react';
import classNames from 'classnames';
import AppProvider from 'cloneui/es/app-provider';

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {}

const Text: React.FC<TextProps> = (props) => {
  const { className, style, children, ...otherProps } = props;

  const ctx = React.useContext(AppProvider.Context);
  const { getPrefixCls } = ctx;
  const prefixCls = getPrefixCls('typography');

  const mergeStyle = { ...style };
  const classString = classNames(className, `${prefixCls}-text`);

  return React.createElement('span', {
    ...otherProps,
    style: mergeStyle,
    className: classString,
    children: children,
  });
};

export default Text;
