import process from 'node:process';
import * as React from 'react';
import classNames from 'classnames';

import { useCardPostContext } from './context';

/**
 * Common props interface for the PostImage component that includes HTML image and div attributes
 * @interface
 * @extends {Pick<React.ImgHTMLAttributes<any>, 'src' | 'srcSet' | 'sizes' | 'alt' | 'dir' | 'loading'>}
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 */
interface CommonPostImageProps
	extends Pick<
			React.ImgHTMLAttributes<any>,
			'src' | 'srcSet' | 'sizes' | 'alt' | 'dir' | 'loading'
		>,
		React.HTMLAttributes<HTMLDivElement> {}

/**
 * Props interface for the PostImage component
 * @interface
 * @extends {CommonPostImageProps}
 */
interface CardPostImageProps extends CommonPostImageProps {
	/** The content to be rendered inside the PostImage component */
	children: React.ReactNode;
}

/**
 * PostImage component for displaying images within a card post
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Card.Post>
 *   <Card.PostImage src="image.jpg" alt="Example image">
 *     <div>Optional overlay content</div>
 *   </Card.PostImage>
 * </Card.Post>
 *
 * // With additional attributes
 * <Card.Post>
 *   <Card.PostImage
 *     src="image.jpg"
 *     alt="Example image"
 *     loading="lazy"
 *     className="custom-class"
 *     style={{ maxHeight: '300px' }}
 *   >
 *     Content
 *   </Card.PostImage>
 * </Card.Post>
 * ```
 *
 * @param {CardPostImageProps} props - Component props
 * @returns {React.ReactElement} PostImage component
 */
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
