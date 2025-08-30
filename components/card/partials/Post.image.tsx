import process from 'node:process';
import * as React from 'react';
import classNames from 'classnames';

import { useCardPostContext } from './context';

interface CommonPostImageProps
	extends Pick<
			React.ImgHTMLAttributes<any>,
			'src' | 'srcSet' | 'sizes' | 'alt' | 'dir' | 'loading'
		>,
		React.HTMLAttributes<HTMLDivElement> {}

interface CardPostImageProps extends CommonPostImageProps {
	children: React.ReactNode;
}

const PostImage: React.FC<CardPostImageProps> = (props) => {
	const {
		children,
		style,
		className,
		src,
		sizes,
		srcSet,
		alt,
		dir,
		loading,
		...restProps
	} = props;

	const ctx = useCardPostContext();
	const componentRef = React.useRef<HTMLDivElement>(null);

	const mergedStyle = { ...style };

	const prefixCls = `${ctx.prefixCls}-img`;

	const rootClassString = classNames(`${prefixCls}`, className);
	const imgClassString = classNames(`${prefixCls}--img`);

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
			{/**TODO: Will implement component image**/}
			<img
				alt={alt}
				src={src}
				sizes={sizes}
				srcSet={srcSet}
				loading={loading}
				className={imgClassString}
			/>
			{children}
		</div>
	);
};

if (process.env.NODE_ENV !== 'production') {
	PostImage.displayName = 'PostImage';
}

export type { CardPostImageProps };
export default PostImage;
