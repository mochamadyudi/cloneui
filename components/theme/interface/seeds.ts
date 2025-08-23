// ======================================================================
// ==                            Seed Token                            ==
// ======================================================================

import { PresetColorType } from './presetColors';

export interface SeedToken extends PresetColorType {
	colorPrimary: string;
	colorSuccess: string;
	colorWarning: string;
	colorDanger: string;
	colorInfo: string;
	colorTextBase: string;
	colorBgBase: string;
	colorLink: string;
	fontFamily: string;
	fontFamilyCode: string;
	fontSize: number;
	lineWidth: number;
	lineType: string;
	borderRadius: number;
	sizeUnit: number;
	sizeStep: number;
	sizePopupArrow: number;
	controlHeight: number;
	zIndexBase: number;
	zIndexPopupBase: number;

	// TODO: implement motion
}
