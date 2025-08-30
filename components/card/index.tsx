import InternalCard from './InternalCard';
import { Post, PostContent, PostFooter, PostImage } from './partials';

type CardType = typeof InternalCard;

type CompoundedComponent = CardType & {
	Post: typeof Post;
	PostContent: typeof PostContent;
	PostFooter: typeof PostFooter;
	PostImage: typeof PostImage;
	/**
	 * @internal
	 * @private
	 */
	__INTERNAL_PREFIX?: 'card';
};

const Card = InternalCard as CompoundedComponent;

Card.Post = Post;
Card.PostContent = PostContent;
Card.PostFooter = PostFooter;
Card.PostImage = PostImage;

Card.__INTERNAL_PREFIX = 'card';

if (process.env.NODE_ENV !== 'production') {
	Card.displayName = 'Card';
}

export type { CardProps } from './interface';
export type {
	CardPostContentProps,
	CardPostFooterProps,
	CardPostImageProps,
	CardPostProps,
} from './partials';
export default Card;
