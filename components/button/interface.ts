import * as React from 'react';
import { theme } from 'cloneui';

import type { SizeType } from '../app-provider';

const buttonType = ['primary', 'default', 'dashed', 'danger', 'link'] as const;
const buttonShapes = ['default', 'circle', 'round'] as const;
const buttonHtmlType = ['submit', 'button', 'reset'] as const;
const variants = [
	'outlined',
	'dashed',
	'solid',
	'filled',
	'text',
	'link',
] as const;
const colors = ['default', 'primary', 'danger', ...theme.PresetColors] as const;

export type ButtonType = (typeof buttonType)[number];
export type ButtonShape = (typeof buttonShapes)[number];
export type ButtonHtmlType = (typeof buttonHtmlType)[number];
export type ButtonVariant = (typeof variants)[number];
export type ButtonColorType = (typeof colors)[number];

export interface ButtonBaseProps
	extends React.HTMLAttributes<HTMLButtonElement> {
	loading?: boolean;
	type?: ButtonType;
	size?: Omit<SizeType, 'medium'> | 'default';
	htmlType?: ButtonHtmlType;
	icon?: React.ReactNode;
	shape?: ButtonShape;
	ghost?: boolean;
	disabled?: boolean;
}

// aturan khusus variant & color
type VariantWithoutColor = {
	variant?: undefined;
	color?: ButtonColorType;
};

type VariantWithColor = {
	variant: ButtonVariant;
	color: ButtonColorType; // ⬅️ wajib
};

export type ButtonProps = ButtonBaseProps &
	(VariantWithoutColor | VariantWithColor);
