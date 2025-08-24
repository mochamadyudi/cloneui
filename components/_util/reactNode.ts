import * as React from 'react';

import type { AnyObject } from './type';

type RenderProps =
	| AnyObject
	| ((originProps: AnyObject) => AnyObject | undefined);

export const replaceElement = <P>(
	element: React.ReactNode,
	replaceElement: React.ReactNode,
	props?: RenderProps
) => {
	if (!React.isValidElement<P>(element)) {
		return replaceElement;
	}
	return React.cloneElement<P>(
		element,
		typeof props === 'function' ? props(element.props || {}) : props
	);
};

export function cloneElement<P>(element: React.ReactNode, props?: RenderProps) {
	return replaceElement<P>(element, element, props) as React.ReactElement<P>;
}

export function isValidElement(element: React.ReactNode) {
	return React.isValidElement(element);
}

function extractText(children: React.ReactNode): string {
	return React.Children.toArray(children)
		.map((child) => {
			if (typeof child === 'string' || typeof child === 'number') {
				return String(child);
			}
			if (React.isValidElement(child)) {
				return extractText(child.props.children);
			}
			return '';
		})
		.join('');
}

export function parseTitleChildren(
	props: string | number | React.ReactNode
): string {
	if (typeof props === 'string') return props;
	if (typeof props === 'number') return String(props);
	if (isValidElement(props) || Array.isArray(props)) {
		return extractText(props);
	}
	return '';
}
