import InternalButton from './Button';

type ButtonType = typeof InternalButton;

type CompoundedComponent = ButtonType & {
  __INTERNAL: any;
};

const Button = InternalButton as CompoundedComponent;
Button.__INTERNAL = null;

export type { ButtonProps } from './interface';

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}
export default Button;
