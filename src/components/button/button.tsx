import clsx from 'clsx';
import React from 'react';
import './button.css';

/**
 * Props for the Button component.
 */
interface ButtonProps extends React.ComponentProps<'button'> {
  /**
   * Specifies whether the button is in an active state.
   */
  active?: boolean;

  /**
   * Specifies whether the button is focused.
   */
  focused?: boolean;

  /**
   * The text or content to be displayed inside the button.
   */
  children: React.ReactNode;
}

/**
 * A Win98 themed button React component.
 *
 * This component extends the native HTML `button` element with additional props.
 *
 * @remarks
 * - You can use the `active` prop to set the button's active state.
 * - The `focused` prop can be used to indicate whether the button is currently focused.
 *
 * @example Creating a button
 *
 * ```tsx
 * <Button onClick={handleClick} disabled>Click me</Button>
 * ```
 */
const Button = ({
  active,
  children,
  className,
  focused,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className={clsx(className, active && 'active', focused && 'focused')}
    >
      {children}
    </button>
  );
};

export default Button;
