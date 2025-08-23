import type { CSSObject } from '@ant-design/cssinjs';

import { AliasToken } from '../theme/interface';

// ellipsis
export const textEllipsis: CSSObject = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

// reset component
export const resetComponent = (
  token: AliasToken,
  useInheritFontFamily: boolean = false
): CSSObject => ({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  lineHeight: token.lineHeight,
  listStyle: 'none',
  fontFamily: useInheritFontFamily ? 'inherit' : token.fontFamily,
});

// Reset Icon css
// TODO: Will implement later if component `Icon` is ready.

// clear Fix
export const clearFix = (): CSSObject => ({
  '&::before': {
    display: 'table',
    content: '""',
  },
  '&::after': {
    display: 'table',
    clear: 'both',
    content: '""',
  },
});

// css link
export const genLinkStyle = (token: AliasToken): CSSObject => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: 'transparent',
    outline: 'none',
    cursor: 'pointer',
    '-webkit-text-decoration-skip': 'objects',
    '&:hover': {
      color: token.colorLinkHover,
    },
    '&:active': {
      color: token.colorLinkActive,
    },
    '&:active, &:hover': {
      textDecoration: token.linkHoverDecoration,
      outline: 0,
    },
    '&:focus': {
      textDecoration: token.linkFocusDecoration,
      outline: 0,
    },
    '&[disabled]': {
      color: token.colorTextDisabled,
      cursor: 'not-allowed',
    },
  },
});
