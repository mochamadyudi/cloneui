import * as process from 'node:process';
import * as React from 'react';
import classNames from 'classnames';

import { isValidElement } from '../../_util/reactNode';
import Typography from '../../typography';
import { useCardPostContext } from './context';

/**
 * Content properties for title and summary
 * @template T - Type of content (string or ReactNode)
 */
type ContentProps<T = string | React.ReactNode> = {
	/** Title content */
	title?: T;
	/** Summary content */
	summary?: T;
};

interface CommonPostContentProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'className'>,
		ContentProps {}

/**
 * Properties for the PostContent component
 * @interface CardPostContentProps
 * @extends {CommonPostContentProps}
 * @example
 * ```tsx
 * <Card.Post>
 *   <Card.PostContent
 *     title="Post Title"
 *     summary="Post summary text"
 *     ellipsis={{ title: true, summary: true }}
 *     classNames={{ root: 'custom-root', title: 'custom-title' }}>
 * 	  <p>Post content goes here</p>
 *		</Card.PostContent>
 * 	</Card.Post>
 * ```
 */
export interface CardPostContentProps extends CommonPostContentProps {
	/** Content of the post */
	children: React.ReactNode;
	/** Enable text ellipsis for title and/or summary */
	ellipsis?: ContentProps<boolean>;
	/** Custom class names for different parts */
	classNames?: {
		root?: string;
		title?: string;
		header?: string;
		summary?: string;
		content?: string;
	};
	/** Custom styles for different parts */
	styles?: {
		root?: React.CSSProperties;
		title?: React.CSSProperties;
		header?: React.CSSProperties;
		summary?: React.CSSProperties;
		content?: React.CSSProperties;
	};
	/** Extra content to be rendered */
	extra?: React.ReactNode;
	/** Maximum lines for title and/or summary */
	maxLine?: ContentProps<number>;
	/** Content to be rendered after title/summary */
	addonAfter?: ContentProps;
	/** Content to be rendered before title/summary */
	addonBefore?: ContentProps;
}

/**
 * PostContent component for displaying post-like content with title, summary, and body
 * @component
 * @param {CardPostContentProps} props - Component props
 * @returns {React.ReactElement} Rendered PostContent component
 */
const PostContent: React.FC<CardPostContentProps> = (props) => {
	const {
		children,
		classNames: customClassNames,
		styles: customStyles,
		style,
		ellipsis,
		title,
		summary,
		extra,
		addonBefore,
		addonAfter,
		...restProps
	} = props;

	const ctx = useCardPostContext();
	const contentRef = React.useRef<HTMLDivElement>(null);

	const mergedStyle = { ...style };

	const prefixCls = `${ctx.prefixCls}-content`;
	const rootClassString = classNames(
		prefixCls,
		customClassNames?.root as string
	);
	const headerClassString = classNames(`${prefixCls}-header`);
	const titleClassString = classNames(`${prefixCls}-title`);
	const summaryClassString = classNames(`${prefixCls}-summary`);
	const contentClassString = classNames(`${prefixCls}-container`);

	React.useEffect(() => {
		ctx.setHasContent(true);
		return;
	}, []);

	return (
		<div
			{...restProps}
			className={rootClassString}
			style={mergedStyle}
			ref={contentRef}
		>
			<div className={headerClassString}>
				<div className={titleClassString} style={customStyles?.title}>
					{addonBefore?.title}
					{isValidElement(title) ? (
						title
					) : (
						<Typography.Title level={3}>{title}</Typography.Title>
					)}
					{addonAfter?.title}
				</div>
				<div className={summaryClassString}>
					{addonBefore?.summary}
					{isValidElement(summary) ? (
						summary
					) : (
						<Typography.Text>{summary}</Typography.Text>
					)}
					{addonAfter?.summary}
				</div>
			</div>
			<div className={contentClassString}>{children}</div>
		</div>
	);
};

if (process.env.NODE_ENV !== 'production') {
	PostContent.displayName = 'PostContent';
}

export default PostContent;
