import * as React from 'react';
import classNames from 'classnames';
import { debounce } from 'throttle-debounce';

import { useComponentConfig } from '../app-provider/context';
import usePercent from './hooks/usePercent';
import Indicator from './Indicator';
import { SpinProps } from './interface';

let defaultIndicator: React.ReactNode | undefined;

function shouldDelay(spinning?: boolean, delay?: number): boolean {
	return !!spinning && !!delay && !Number.isNaN(Number(delay));
}

const Spin: React.FC<React.PropsWithChildren<SpinProps>> = (props) => {
	const {
		prefixCls: customizePrefixCls,
		classNames: ctxClassNames,
		styles,
		size,
		color,
		percent = 0,
		fullscreen,
		indicator,
		delay = 0,
		spinning: customSpinning = true,
		children,
	} = props;
	// =========================== Ref ===========================
	const rootRef = React.useRef<HTMLDivElement>(null);
	const spinRef = React.useRef<HTMLDivElement>(null);

	const {
		getPrefixCls,
		direction,
		className: ctxClassName,
		style: ctxStyle,
		indicator: ctxIndicator,
	} = useComponentConfig('spin');

	const prefixCls = getPrefixCls('spin', customizePrefixCls);

	const [spinning, setSpinning] = React.useState(() => {
		return customSpinning && !shouldDelay(customSpinning, delay);
	});

	React.useEffect(() => {
		if (customSpinning) {
			const showSpinning = debounce(delay, () => {
				setSpinning(true);
			});
			showSpinning();
			return () => {
				showSpinning?.cancel?.();
			};
		}
		setSpinning(false);
	}, [delay, customSpinning]);

	const rootClsString = classNames(prefixCls, ctxClassNames?.root);
	const spinClsString = classNames(
		prefixCls,
		ctxClassName,
		`${prefixCls}-spin-${color}`,
		{
			[`${prefixCls}-sm`]: size === 'small',
			[`${prefixCls}-lg`]: size === 'large',
			[`${prefixCls}-spinning`]: spinning,
			[`${prefixCls}-rtl`]: direction === 'rtl',
		},
		ctxClassNames?.spin
	);
	const isNestedChildren = React.useMemo<boolean>(
		() => typeof children !== 'undefined',
		[children]
	);

	const mergedPercent = usePercent(spinning, percent ?? 0);
	const mergedIndicator = indicator ?? ctxIndicator ?? defaultIndicator;
	const mergedStyle: React.CSSProperties = { ...ctxStyle, ...styles?.spin };

	const spinElement: React.ReactNode = (
		<div
			{...props}
			ref={spinRef}
			className={spinClsString}
			style={mergedStyle}
			aria-live="polite"
			aria-busy={spinning}
		>
			<Indicator
				prefixCls={prefixCls}
				indicator={mergedIndicator}
				percent={mergedPercent}
			/>
		</div>
	);

	if (isNestedChildren) {
		return (
			<div
				className={classNames(
					rootClsString,
					`${prefixCls}-nested-loading`,
					ctxClassNames?.root,
					{
						[`${prefixCls}-fullscreen-show`]: spinning,
					},
					ctxClassNames?.root
				)}
			>
				{spinning && <div key="loading">{spinElement}</div>}
				{children}
			</div>
		);
	}

	if (fullscreen) {
		return (
			<div
				className={classNames(
					rootClsString,
					`${prefixCls}-fullscreen`,
					{
						[`${prefixCls}-fullscreen-show`]: spinning,
					},
					ctxClassNames?.root
				)}
			>
				{spinElement}
			</div>
		);
	}

	return (
		<div
			{...props}
			ref={rootRef}
			className={rootClsString}
			style={styles?.root}
		>
			{spinElement}
		</div>
	);
};

export type { SpinProps };

export default Spin;
