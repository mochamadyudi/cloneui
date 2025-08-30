import * as React from 'react';
import { StyleContextProvider } from 'cloneui/es/app-provider/StyleContext';
import useMemo from 'rc-util/lib/hooks/useMemo';

import { DesignTokenContext, DesignTokenProviderProps } from '../theme/context';
import defaultSeedToken from '../theme/themes/seed';
import {
	AppConsumerProps,
	AppContext,
	ButtonConfig,
	SpinConfig,
	ThemeConfig,
} from './context';
import { SizeType } from './interface';

export type {
	SizeType,
	AppConsumerProps,
	AppContext,
	ButtonConfig,
	SpinConfig,
};

export interface AppProviderProps {
	getTargetContainer?: () => HTMLElement | Window;
	prefixCls?: string;
	children?: React.ReactNode;
	theme?: ThemeConfig;

	spin?: SpinConfig;
	button?: ButtonConfig;
}

interface AppProviderChildrenProps extends AppProviderProps {
	parentContext: AppConsumerProps;
}

const AppProviderChildren: React.FC<AppProviderChildrenProps> = (props) => {
	const { children, parentContext, theme } = props;

	// ================================= Context =================================
	// const getPrefixCls = React.useCallback(
	//   (suffixCls?: string, customizePrefixCls?: string) => {
	//     const { prefixCls } = props;
	//     if (customizePrefixCls) {
	//       return customizePrefixCls;
	//     }
	//     const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
	//     return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
	//   },
	//   [parentContext.getPrefixCls, props.prefixCls]
	// );

	const config: AppConsumerProps = {
		...parentContext,
	};

	const memConfig = useMemo(
		() => config,
		config,
		(prev, current) => {
			const prevKeys = Object.keys(prev) as Array<keyof typeof config>;
			const currentKeys = Object.keys(current) as Array<keyof typeof config>;

			return (
				prevKeys.length !== currentKeys.length ||
				prevKeys.some((key) => prev[key] !== current[key])
			);
		}
	);

	const mergedTheme = { ...theme, ...parentContext?.theme };

	const memoTheme = React.useMemo(() => {
		const { algorithm, token, components, ...rest } = mergedTheme || {};
		const parsedComponents: any = { ...components };
		const mergedToken = {
			...defaultSeedToken,
			...token,
		};

		return {
			...rest,
			token: mergedToken,
			components: parsedComponents,
			override: {
				override: mergedToken,
				...parsedComponents,
			},
			cssVar: true,
		} as unknown as DesignTokenProviderProps;
	}, [mergedTheme]) as DesignTokenProviderProps;

	let childNode = <>{children}</>;

	if (theme) {
		childNode = (
			<DesignTokenContext.Provider value={{ ...memoTheme }}>
				{childNode}
			</DesignTokenContext.Provider>
		);
	}

	return (
		<AppContext.Provider value={memConfig}>
			<StyleContextProvider>{childNode}</StyleContextProvider>
		</AppContext.Provider>
	);
};

const AppProvider: React.FC<AppProviderProps> & {
	/** @private **/
	Context: typeof AppContext;
} = (props) => {
	const ctx = React.useContext<AppConsumerProps>(AppContext);
	return <AppProviderChildren parentContext={ctx} {...props} />;
};

AppProvider.Context = AppContext;

if (process.env.NODE_ENV !== 'production') {
	AppProvider.displayName = 'AppProvider';
}

export { DirectionType, ThemeConfig, AppComponentStyle } from './context';

export default AppProvider;
