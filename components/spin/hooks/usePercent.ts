import * as React from 'react';

const AUTO_INTERVAL = 200;
const STEP_BUCKETS: [limit: number, step: number][] = [
	[30, 0.05],
	[70, 0.03],
	[96, 0.01],
];

export default function usePercent(
	spinning: boolean,
	percent?: number | 'auto'
): number | undefined {
	const [mockPercent, setMockPercent] = React.useState<number>(0);
	const mockIntervalRef = React.useRef<ReturnType<typeof setInterval>>(null);

	const isAuto = percent === 'auto';
	React.useEffect(() => {
		if (isAuto && spinning) {
			setMockPercent(0);

			// @ts-ignore
			mockIntervalRef.current = setInterval(() => {
				setMockPercent((prev) => {
					const restStep = 100 - prev;

					for (let i = 0; i < STEP_BUCKETS.length; i += 1) {
						const [limit, stepPtg] = STEP_BUCKETS[i];
						if (prev < limit) {
							return prev + restStep * stepPtg;
						}
					}

					return prev;
				});
			}, AUTO_INTERVAL);
		}
		return () => {
			clearInterval(mockIntervalRef?.current!);
		};
	}, [isAuto, spinning]);

	return isAuto ? mockPercent : percent;
}
