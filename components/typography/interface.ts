import { HTMLAttributes } from 'react';

export type TypographyLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface TypographyHeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  level: TypographyLevel;
}
