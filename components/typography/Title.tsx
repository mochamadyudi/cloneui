import * as React from 'react';
import classNames from 'classnames';
import AppProvider from 'cloneui/es/app-provider';

import { parseTitleChildren } from '../_util/reactNode';
import { TypographyHeadingProps, TypographyLevel } from './interface';

const Title: React.FC<React.PropsWithChildren<TypographyHeadingProps>> = (
	props
) => {
	const { className, style, children, level, ...otherProps } = props;

	const _level = level || 1;

	const ctx = React.useContext(AppProvider.Context);
	const { getPrefixCls } = ctx;
	const prefixCls = getPrefixCls('typography');

	const getElType = (_: TypographyLevel) => {
		switch (_) {
			case 2:
				return 'h2';
			case 3:
				return 'h3';
			case 4:
				return 'h4';
			case 5:
				return 'h5';
			case 6:
				return 'h6';
			case 1:
			default:
				return 'h1';
		}
	};

	const mergeStyle = { ...style };
	const classString = classNames(
		className,
		`${prefixCls}-title`,
		`${prefixCls}-level-${level}`
	);

	return React.createElement(getElType(_level), {
		...otherProps,
		style: mergeStyle,
		title: parseTitleChildren(children),
		className: classString,
		children: children,
	});
};

export default Title;
