import {
	createContext,
	useContext,
	useState,
	type FC,
	type ReactNode,
} from 'react';
import * as React from 'react';

import AppProvider, { type DirectionType } from '../../app-provider';

type CardPostKey = 'Header' | 'Footer' | 'Image' | 'Content';

type CardPostFlags<K extends string> = {
	[P in K as `has${P}`]: boolean;
} & {
	[P in K as `setHas${P}`]: (value: boolean) => void;
};

type ExpandedCardPostFlags = CardPostFlags<CardPostKey>;

interface CardPostContextProps extends ExpandedCardPostFlags {
	direction?: DirectionType;
	prefixCls?: string;
}

type CardPostState = Omit<
	CardPostContextProps,
	'setHasHeader' | 'setHasFooter' | 'setHasImage' | 'setHasContent'
>;

const DefaultCardPostProps: CardPostContextProps = {
	hasImage: false,
	hasContent: false,
	hasHeader: false,
	hasFooter: false,
	setHasHeader: () => {},
	setHasFooter: () => {},
	setHasImage: () => {},
	setHasContent: () => {},
};
export const CardPostContext =
	createContext<CardPostContextProps>(DefaultCardPostProps);

export const useCardPostContext = () => useContext(CardPostContext);

export const CardPostProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const ctx = React.useContext(AppProvider.Context);
	const { getPrefixCls, direction } = ctx;
	const prefixCls = getPrefixCls('card-post');

	const [state, setState] = useState<CardPostState>({
		hasImage: false,
		hasContent: false,
		hasHeader: false,
		hasFooter: false,
	});

	const setHasHeader = (value: boolean): void => {
		setState((prevState) => ({ ...prevState, hasHeader: value }));
	};

	const setHasFooter = (value: boolean): void => {
		setState((prevState) => ({ ...prevState, hasFooter: value }));
	};

	const setHasImage = (value: boolean): void => {
		setState((prevState) => ({ ...prevState, hasImage: value }));
	};

	const setHasContent = (value: boolean): void => {
		setState((prevState) => ({ ...prevState, hasContent: value }));
	};

	return (
		<CardPostContext.Provider
			value={{
				...state,
				direction,
				prefixCls,
				setHasImage,
				setHasFooter,
				setHasHeader,
				setHasContent,
			}}
		>
			{children}
		</CardPostContext.Provider>
	);
};
