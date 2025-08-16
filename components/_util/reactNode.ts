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
