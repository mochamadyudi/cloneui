import * as React from 'react';
import classNames from 'classnames';
import {
	CardPostProvider,
	useCardPostContext,
} from 'cloneui/es/card/partials/context';

export interface CardPostProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const CardPost: React.FC<CardPostProps> = (props) => {
	const { children, className: customClassName, style, ...restProps } = props;
	const ctx = useCardPostContext();

	const mergedStyle = { ...style };
	const rootCls = classNames(
		`${ctx.prefixCls}-root`,
		ctx.hasHeader && `${ctx.prefixCls}-post-has-header`,
		ctx.hasFooter && `${ctx.prefixCls}-post-has-footer`,
		customClassName
	);

	return (
		<div {...restProps} className={rootCls} style={mergedStyle}>
			{children}
		</div>
	);
};

const InternalComponent: React.FC<CardPostProps> = (props) => {
	const { children, ...restProps } = props;
	return (
		<CardPostProvider>
			<CardPost {...restProps}>{children}</CardPost>
		</CardPostProvider>
	);
};

export default InternalComponent;
