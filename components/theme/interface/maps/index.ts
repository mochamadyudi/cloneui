import type { ColorPalettes } from '../presetColors';
import type { SeedToken } from '../seeds';
import type { ColorMapToken } from './colors';
import { FontMapToken } from './font';
import { HeightMapToken, SizeMapToken } from './size';
import { StyleMapToken } from './style';

export interface CommonMapToken extends StyleMapToken {
  // TODO: implementation for animation
}

export interface MapToken
  extends CommonMapToken,
    SeedToken,
    ColorPalettes,
    SizeMapToken,
    StyleMapToken,
    HeightMapToken,
    FontMapToken,
    ColorMapToken {}

export {
  ColorMapToken,
  HeightMapToken,
  SizeMapToken,
  StyleMapToken,
  FontMapToken,
  ColorPalettes,
  SeedToken,
};
