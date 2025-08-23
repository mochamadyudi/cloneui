import { DerivativeFunc } from '@ant-design/cssinjs';

import { MapToken } from './maps';
import { SeedToken } from './seeds';

export * from './presetColors';
export * from './seeds';
export * from './maps';
export * from './algorithm';

export type { ComponentTokenMap } from './components';

export type {
  GlobalToken,
  OverrideToken,
  FullToken,
  OverrideComponent,
  GetDefaultToken,
  GenStyleFn,
} from './cssinjs-utils';

export type { AliasToken } from './alias';

export type MappingAlgorithm = DerivativeFunc<SeedToken, MapToken>;

export type {
  PresetColorType,
  PresetColorKey,
  ColorPalettes,
} from './presetColors';
export { PresetColors } from './presetColors';
