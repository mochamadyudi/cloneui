import process from 'node:process';
import * as React from 'react';
import classNames from 'classnames';

import { useCardPostContext } from './context';

interface CommonPostFooterProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {}

export interface CardPostFooterProps extends CommonPostFooterProps {
	children: React.ReactNode;
}

const PostFooter: React.FC<CardPostFooterProps> = (props) => {
	const { children, style, className, ...restProps } = props;

	const ctx = useCardPostContext();
	const componentRef = React.useRef<HTMLDivElement>(null);

	const mergedStyle = { ...style };

	const prefixCls = `${ctx.prefixCls}-footer`;

	const rootClassString = classNames(`${prefixCls}`, className);
	React.useEffect(() => {
		ctx.setHasFooter(true);
		return;
	}, []);

	return (
		<div
			{...restProps}
			className={rootClassString}
			style={mergedStyle}
			ref={componentRef}
		>
			{children}
		</div>
	);
};

if (process.env.NODE_ENV !== 'production') {
	PostFooter.displayName = 'PostFooter';
}

export default PostFooter;
