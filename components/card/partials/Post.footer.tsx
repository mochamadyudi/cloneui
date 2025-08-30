import process from 'node:process';
import * as React from 'react';
import classNames from 'classnames';

import { useCardPostContext } from './context';

/**
 * Common props interface for the PostFooter component
 * @interface
 * @extends {Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>}
 */
interface CommonPostFooterProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {}

/**
 * Props interface for the PostFooter component
 * @interface
 * @extends {CommonPostFooterProps}
 */
export interface CardPostFooterProps extends CommonPostFooterProps {
	/** The content to be rendered inside the footer */
	children: React.ReactNode;
}

/**
 * PostFooter component displays content at the bottom of a Card
 *
 * @example
 * ```tsx
 * import { Card } from 'cloneui';
 *
 * export default () => (
 *   <Card>
 *     <Card.Post>
 *       <Card.Post.Footer>
 *         Footer content here
 *       </Card.Post.Footer>
 *     </Card.Post>
 *   </Card>
 * );
 * ```
 */
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
