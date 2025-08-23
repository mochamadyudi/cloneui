import * as React from 'react';
import type { Theme } from '@ant-design/cssinjs';

import { AliasToken, MapToken, OverrideToken, SeedToken } from './interface';
import defaultSeedToken from './themes/seed';

export const defaultConfig = {
  token: defaultSeedToken,
  override: { override: defaultSeedToken },
  hashed: true,
};

export type ComponentsToken = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    theme?: Theme<SeedToken, MapToken>;
  };
};

export interface DesignTokenProviderProps {
  token: Partial<AliasToken>;
  theme?: Theme<SeedToken, MapToken>;
  components?: ComponentsToken;

  override: { override: Partial<AliasToken> } & ComponentsToken;
  hashed?: string | boolean;
  cssVar?: {
    prefix?: string;
    key?: string;
  };
}

export const DesignTokenContext =
  React.createContext<DesignTokenProviderProps>(defaultConfig);

export function useTheme() {
  return React.useContext(DesignTokenContext);
}
