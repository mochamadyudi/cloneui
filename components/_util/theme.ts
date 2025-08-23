import { PresetColorKey } from 'cloneui';

import {
  defaultPresetColors,
  DefaultPresetColorValue,
} from '../theme/themes/seed';

export function getPresetColor(
  color?: PresetColorKey
): DefaultPresetColorValue {
  if (typeof color === 'undefined') return defaultPresetColors.blue;
  if (typeof defaultPresetColors[color] === 'undefined')
    return defaultPresetColors.blue;
  return defaultPresetColors[color];
}
