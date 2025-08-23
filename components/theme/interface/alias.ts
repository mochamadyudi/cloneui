import * as React from 'react';

import { MapToken } from './maps';

// ======================================================================
// ==                           Alias Token                            ==
// ======================================================================
// 🔥🔥🔥🔥🔥🔥🔥 DO NOT MODIFY THIS. PLEASE CONTACT DESIGNER. 🔥🔥🔥🔥🔥🔥🔥
export interface AliasToken extends MapToken {
  linkDecoration: React.CSSProperties['textDecoration'];
  linkHoverDecoration: React.CSSProperties['textDecoration'];
  linkFocusDecoration: React.CSSProperties['textDecoration'];
  colorTextDisabled: string;
}
