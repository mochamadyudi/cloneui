import type { HTMLAttributes, ReactNode } from 'react';

interface CommonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
	title?: string | ReactNode;
	bordered?: boolean;
	extra?: ReactNode;
}

interface CardFooterProps {
	className?: string;
	children?: ReactNode;
}

export interface CardProps extends CommonProps {
	children?: ReactNode;
	classNames?: {
		root?: string;
		header?: string;
		content?: string;
	};
	footer?: CardFooterProps;
}
