// interface
import { defaultConfig, useTheme } from './context';
import { PresetColors } from './interface';

export type {
  ColorPalettes,
  PresetColorKey,
  PresetColorType,
} from './interface';

export default {
  useTheme,
  PresetColors,
  defaultSeed: defaultConfig.token,
};
