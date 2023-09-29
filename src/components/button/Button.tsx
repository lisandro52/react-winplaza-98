import clsx from 'clsx';
import React from 'react';
import './button.scss';

/**
 * Props for the Button component.
 */
export interface ButtonProps extends React.ComponentProps<'button'> {
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
  children: string;
}

/** *
 * This component represents a button element that can be 
 * configured using the provided props.
 *
 * @example Creating a button
 *
 * ```tsx
 * <Button onClick={handleClick} disabled>Click me</Button>
 * ```
 *
 * @remarks
 * - You can use the `active` prop to set the button's active state.
 * - The `focused` prop can be used to indicate whether the button is currently focused.
 */
export const Button = ({
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
