import * as React from 'react';
import classNames from 'classnames';

export interface IndicatorProps {
	prefixCls?: string;
	percent?: number;
}

export default function Looper(props: IndicatorProps) {
	const { prefixCls, percent = 0 } = props;
	const dotCls = `${prefixCls}-dot`;
	const holderCls = `${dotCls}-holder`;
	const hiddenCls = `${holderCls}-hidden`;

	// =============== Render ===============
	return (
		<>
			<span className={classNames(holderCls, percent > 0 && hiddenCls)}>
				<span className={classNames(dotCls, `${prefixCls}-dot-spin`)}>
					{Array.from({ length: 4 }).map((i, index: number) => {
						return <i key={index} className={`${prefixCls}-dot-item`} />;
					})}
				</span>
			</span>
		</>
	);
}
