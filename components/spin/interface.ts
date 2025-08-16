import { CSSProperties, ReactElement } from 'react';
import { PresetColorKey } from 'kui';

import { SizeType } from '../app-provider';
import { AppComponentStyle } from '../app-provider/context';

export type SpinIndicator = ReactElement<HTMLElement>;

export interface SpinProps extends AppComponentStyle {
	classNames?: {
		root?: string;
		spin?: string;
	};
	prefixCls?: string;
	styles?: {
		root?: CSSProperties;
		spin?: CSSProperties;
	};
	// TODO: will implement delay time
	delay?: number;
	spinning?: boolean;
	size: SizeType | string;
	color?: PresetColorKey;
	indicator?: SpinIndicator;

	// TODO: will implement Display a backdrop with the `Spin` component
	fullscreen?: boolean;
	percent?: number | 'auto';
}
