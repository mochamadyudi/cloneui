import type { PresetColorType } from 'kui';

export const defaultPresetColors: PresetColorType = {
	blue: '#1677FF',
	purple: '#722ED1',
	cyan: '#13C2C2',
	green: '#52C41A',
	magenta: '#EB2F96',
	/**
	 * @deprecated Use magenta instead
	 */
	pink: '#EB2F96',
	red: '#F5222D',
	orange: '#FA8C16',
	yellow: '#FADB14',
	volcano: '#FA541C',
	geekblue: '#2F54EB',
	gold: '#FAAD14',
	lime: '#A0D911',
};
export type DefaultPresetColorValue =
	(typeof defaultPresetColors)[keyof typeof defaultPresetColors];
