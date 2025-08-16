import * as React from 'react';
import { SpinProps } from 'kui';

import { LayoutProps } from '../layout';

export const defaultPrefixCls = 'kui';
const EMPTY_OBJECT = {};

export type DirectionType = 'ltr' | 'rtl' | undefined;

export interface AppComponentStyle {
	className?: string;
	style?: React.CSSProperties;
}

export type SpinConfig = AppComponentStyle & Pick<SpinProps, 'indicator'>;
export type LayoutConfig = AppComponentStyle &
	Pick<LayoutProps, 'className' | 'style'>;

export interface AppComponentProps {
	spin?: SpinConfig;
	layout?: LayoutConfig;
}

export interface AppConsumerProps extends AppComponentProps {
	rootPrefixCls?: string;
	getPrefixCls: (suffix?: string, customizePrefixCls?: string) => string;
	direction?: DirectionType;
}

type GetClassNamesOrEmptyObject<Config extends { classNames?: any }> =
	Config extends {
		classNames?: infer ClassNames;
	}
		? ClassNames
		: object;

type GetStylesOrEmptyObject<Config extends { styles?: any }> = Config extends {
	styles?: infer Styles;
}
	? Styles
	: object;

type ComponentReturnType<T extends keyof AppComponentProps> = Omit<
	NonNullable<AppComponentProps[T]>,
	'classNames' | 'styles'
> & {
	// @ts-ignore
	classNames: GetClassNamesOrEmptyObject<NonNullable<AppComponentProps[T]>>;
	direction: AppConsumerProps['direction'];
	getPrefixCls: AppConsumerProps['getPrefixCls'];
	// @ts-ignore
	styles: GetStylesOrEmptyObject<AppComponentProps[T]>;
};

const defaultGetPrefixCls = (
	suffixCls?: string,
	customizePrefixCls?: string
) => {
	if (customizePrefixCls) return customizePrefixCls;
	return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};

export const AppContext = React.createContext<AppConsumerProps>({
	getPrefixCls: defaultGetPrefixCls,
	rootPrefixCls: defaultPrefixCls,
	spin: undefined,
});

export function useComponentConfig<T extends keyof AppComponentProps>(
	propName: T
) {
	const ctx = React.useContext(AppContext);
	const { getPrefixCls, direction } = ctx;
	const propValue = ctx[propName];

	return {
		className: EMPTY_OBJECT,
		styles: EMPTY_OBJECT,
		...propValue,
		getPrefixCls,
		direction,
	} as ComponentReturnType<T>;
}
