import * as React from 'react';
import classNames from 'classnames';
import AppProvider from 'cloneui/es/app-provider';

interface ParagraphProps extends React.HTMLAttributes<HTMLDivElement> {}

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { className, style, children, ...otherProps } = props;

  const ctx = React.useContext(AppProvider.Context);
  const { getPrefixCls } = ctx;
  const prefixCls = getPrefixCls('typography');

  const mergeStyle = { ...style };
  const classString = classNames(className, `${prefixCls}-paragraph`);

  return React.createElement('p', {
    ...otherProps,
    style: mergeStyle,
    className: classString,
    children: children,
  });
};

export default Paragraph;
