import * as React from 'react';
import classNames from 'classnames';

import { cloneElement } from '../../_util/reactNode';
import Looper from '../Indicator/Looper';

export interface IndicatorProps {
	prefixCls?: string;
	indicator?: React.ReactNode;
	percent?: number;
}

export default function Indicator(props: IndicatorProps) {
	const { prefixCls, indicator, percent } = props;
	const dotCls = `${prefixCls}-dot`;

	if (indicator && React.isValidElement<{ className?: string }>(indicator)) {
		return cloneElement(indicator, {
			className: classNames(indicator.props?.className, dotCls),
			percent,
		});
	}
	return <Looper prefixCls={prefixCls} percent={percent} />;
}
