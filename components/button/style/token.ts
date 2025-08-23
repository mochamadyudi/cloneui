import type { CSSProperties } from 'react';
import { PresetColorKey } from 'cloneui';

import { FullToken, GenStyleFn } from '../../theme/interface';
import { mergeToken } from '../../theme/internal';

type ShadowColorMap = {
  /**
   * @desc 预设按钮的阴影色
   * @descEN Shadow colors of preset button
   */
  [Key in `${PresetColorKey}ShadowColor`]: string;
};

export interface ComponentToken {
  fontWeight: CSSProperties['fontWeight'];
  iconGap: CSSProperties['gap'];
  primaryColor: string;
  paddingInline: CSSProperties['paddingInline'];
  paddingInlineLG: CSSProperties['paddingInline'];
  paddingInlineSM: CSSProperties['paddingInline'];
  onlyIconSize: number | string;
}

export interface ButtonToken extends FullToken<'Button'>, ShadowColorMap {
  buttonPaddingHorizontal?: CSSProperties['paddingInline'];
  buttonPaddingVertical?: CSSProperties['paddingBlock'];
  buttonIconOnlyFontSize: number | string;
}

export const prepareToken: (
  token: Parameters<GenStyleFn<'Button'>>[0]
) => ButtonToken = (token) => {
  const { paddingInline, onlyIconSize } = token;

  const buttonToken = mergeToken<ButtonToken>(token, {
    buttonPaddingHorizontal: paddingInline,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: onlyIconSize,
  });
  return buttonToken;
};
