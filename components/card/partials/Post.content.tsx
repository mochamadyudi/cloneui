import * as process from 'node:process';
import * as React from 'react';
import classNames from 'classnames';

import { isValidElement } from '../../_util/reactNode';
import Typography from '../../typography';
import { useCardPostContext } from './context';

type ContentProps<T = string | React.ReactNode> = {
	title?: T;
	summary?: T;
};

interface CommonPostContentProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'className'>,
		ContentProps {}

export interface CardPostContentProps extends CommonPostContentProps {
	children: React.ReactNode;
	ellipsis?: ContentProps<boolean>;
	classNames?: {
		root?: string;
		title?: string;
		header?: string;
		summary?: string;
		content?: string;
	};
	styles?: {
		root?: React.CSSProperties;
		title?: React.CSSProperties;
		header?: React.CSSProperties;
		summary?: React.CSSProperties;
		content?: React.CSSProperties;
	};
	extra?: React.ReactNode;
	maxLine?: ContentProps<number>;
	addonAfter?: ContentProps;
	addonBefore?: ContentProps;
}

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
