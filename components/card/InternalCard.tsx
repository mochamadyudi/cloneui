import * as React from 'react';
import classNames from 'classnames';
import AppProvider from 'cloneui/es/app-provider';

import { isValidElement } from '../_util/reactNode';
import type { CardProps } from './interface';

/**
 * @name InternalCard
 * @description InternalCard default `Card`
 * @param {CardProps} props
 * @example
 * ```tsx
 * const App: React.FC = () => {
 *   return (
 *     <InternalCard bordered>
 *
 *     </InternalCard>
 *   )
 * }
 * ```
 * @returns {React.JSX.Element}
 * @constructor
 */
const InternalCard: React.FC<CardProps> = (props) => {
	const {
		bordered,
		title,
		extra,
		children,
		classNames: customClassNames,
		footer,
		style,
		...otherProps
	} = props;

	const ctx = React.useContext(AppProvider.Context);
	const { getPrefixCls } = ctx;
	const prefixCls = getPrefixCls('card');

	const isNestedHeader = !!title || !!extra;

	const isNestedFooter =
		footer &&
		typeof footer?.children !== 'undefined' &&
		isValidElement(footer?.children);

	const mergeStyle = { ...style };

	const classString = classNames(customClassNames?.root as string, prefixCls, {
		[`${prefixCls}-bordered`]: !!bordered,
		[`${prefixCls}-has-footer`]: !!footer && !!footer?.children,
	});

	const headerClassString = classNames(customClassNames?.header as string, {
		[`${prefixCls}-header`]: true,
		[`${prefixCls}-header-has-extra`]: !!extra,
	});

	const contentClassString = classNames(customClassNames?.content as string);

	return (
		<div {...otherProps} className={classString} style={mergeStyle}>
			{isNestedHeader && (
				<div className={headerClassString}>
					{title && <div className={`${prefixCls}-title`}>{title}</div>}
					{extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
				</div>
			)}
			<div className={contentClassString}>{children}</div>
			{isNestedFooter && (
				<div className={classNames(footer?.className, `${prefixCls}-footer`)}>
					{footer?.children}
				</div>
			)}
		</div>
	);
};

export default InternalCard;
