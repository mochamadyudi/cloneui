import * as React from 'react';
import { ButtonProps, LayoutProps, SpinProps } from 'cloneui';

import {
  AliasToken,
  MappingAlgorithm,
  OverrideToken,
} from '../theme/interface';

export const defaultPrefixCls = 'cloneui';
const EMPTY_OBJECT = {};

export type DirectionType = 'ltr' | 'rtl' | undefined;
type ComponentConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};

export interface ThemeConfig {
  token?: Partial<AliasToken>;
  components?: ComponentConfig;
  algorithm?: MappingAlgorithm | MappingAlgorithm[];
  hashed?: boolean;
  theme?: ThemeConfig;
  direction?: DirectionType;
}

export interface AppComponentStyle {
  className?: string;
  style?: React.CSSProperties;
}

// ================================ Config Component ================================
// >>>>> General
export type ButtonConfig = AppComponentStyle & Pick<ButtonProps, 'size'>;

// >>>>> feedback
export type SpinConfig = AppComponentStyle & Pick<SpinProps, 'indicator'>;

// >>>>> layout
export type LayoutConfig = AppComponentStyle &
  Pick<LayoutProps, 'className' | 'style'>;

export interface AppComponentProps {
  spin?: SpinConfig;
  layout?: LayoutConfig;
}

export interface AppConsumerProps extends AppComponentProps {
  rootPrefixCls?: string;
  getPrefixCls: (suffix?: string, customizePrefixCls?: string) => string;
  direction?: DirectionType;

  theme?: ThemeConfig;
}

type GetClassNamesOrEmptyObject<Config extends { classNames?: any }> =
  Config extends {
    classNames?: infer ClassNames;
  }
    ? ClassNames
    : object;

type GetStylesOrEmptyObject<Config extends { styles?: any }> = Config extends {
  styles?: infer Styles;
}
  ? Styles
  : object;

type ComponentReturnType<T extends keyof AppComponentProps> = Omit<
  NonNullable<AppComponentProps[T]>,
  'classNames' | 'styles'
> & {
  // @ts-ignore
  classNames: GetClassNamesOrEmptyObject<NonNullable<AppComponentProps[T]>>;
  direction: AppConsumerProps['direction'];
  getPrefixCls: AppConsumerProps['getPrefixCls'];
  // @ts-ignore
  styles: GetStylesOrEmptyObject<AppComponentProps[T]>;
};

const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string
) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};

export const AppContext = React.createContext<AppConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
  rootPrefixCls: defaultPrefixCls,
  spin: undefined,
});

export function useComponentConfig<T extends keyof AppComponentProps>(
  propName: T
) {
  const ctx = React.useContext(AppContext);
  const { getPrefixCls, direction } = ctx;
  const propValue = ctx[propName];

  return {
    className: EMPTY_OBJECT,
    styles: EMPTY_OBJECT,
    ...propValue,
    getPrefixCls,
    direction,
  } as ComponentReturnType<T>;
}
