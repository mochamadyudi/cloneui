// ======================================================================
// ==                          Map Color                               ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT ME. 🔥🔥🔥🔥🔥🔥🔥

export interface ColorNeutralMapToken {
	/**
	 * @internal
	 */
	colorTextBase: string;
	colorBgBase: string;

	// ---------- Text ---------- //
	colorText: string;
	colorTextSecondary: string;
	colorTextTertiary: string;
	colorTextQuaternary: string;
	colorBorder: string;
	colorBorderSecondary: string;
	colorFill: string;
	colorFillSecondary: string;
	colorFillTertiary: string;
	colorFillQuaternary: string;
	colorBgLayout: string;
	colorBgContainer: string;
	colorBgElevated: string;
	colorBgSpotlight: string;
	colorBgBlur: string;
	colorBgSolid: string;
	colorBgSolidActive: string;
	colorBgSolidHover: string;
}
export interface ColorPrimaryMapToken {
	colorPrimary: string;
	colorPrimaryBg: string;
	colorPrimaryBgHover: string;
	colorPrimaryBorder: string;
	colorPrimaryBorderHover: string;
	colorPrimaryHover: string;
	colorPrimaryActive: string;
	colorPrimaryTextHover: string;
	colorPrimaryText: string;
	colorPrimaryTextActive: string;
}
export interface ColorSuccessMapToken {
	colorSuccess: string;
	colorSuccessBg: string;
	colorSuccessBgHover: string;
	colorSuccessBorder: string;
	colorSuccessBorderHover: string;
	colorSuccessHover: string;
	colorSuccessActive: string;
	colorSuccessTextHover: string;
	colorSuccessText: string;
	colorSuccessTextActive: string;
}
export interface ColorWarningMapToken {
	colorWarning: string;
	colorWarningBg: string;
	colorWarningBgHover: string;
	colorWarningBorder: string;
	colorWarningBorderHover: string;
	colorWarningHover: string;
	colorWarningActive: string;
	colorWarningTextHover: string;
	colorWarningText: string;
	colorWarningTextActive: string;
}
export interface ColorInfoMapToken {
	colorInfo: string;
	colorInfoBg: string;
	colorInfoBgHover: string;
	colorInfoBorder: string;
	colorInfoBorderHover: string;
	colorInfoHover: string;
	colorInfoActive: string;
	colorInfoTextHover: string;
	colorInfoText: string;
	colorInfoTextActive: string;
}
export interface ColorErrorMapToken {
	colorError: string;
	colorErrorBg: string;
	colorErrorBgHover: string;
	colorErrorBorder: string;
	colorErrorBorderHover: string;
	colorErrorHover: string;
	colorErrorActive: string;
	colorErrorTextHover: string;
	colorErrorText: string;
	colorErrorTextActive: string;
}
export interface ColorLinkMapToken {
	colorLink: string;
	colorLinkBg: string;
	colorLinkBgHover: string;
	colorLinkBorder: string;
	colorLinkBorderHover: string;
	colorLinkHover: string;
	colorLinkActive: string;
	colorLinkTextHover: string;
	colorLinkText: string;
	colorLinkTextActive: string;
}

export interface ColorMapToken
	extends ColorNeutralMapToken,
		ColorPrimaryMapToken,
		ColorSuccessMapToken,
		ColorWarningMapToken,
		ColorInfoMapToken,
		ColorErrorMapToken,
		ColorLinkMapToken {
	/**
	 * @desc Pure white color don't changed by theme
	 * @default  #FFFFFF
	 */
	colorWhite: string;

	/**
	 * @desc The background color of the mask, used to cover the content below the mask, Modal, Drawer and other components use this token.
	 */
	colorBgMask: string;
}
