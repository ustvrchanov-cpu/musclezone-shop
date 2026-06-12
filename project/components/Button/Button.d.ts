import * as React from 'react';

export interface ButtonProps {
  /** Visuelle Rolle. primary = Conversion-CTA (Power-Rot), secondary = Ink, ghost = Outline. */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** sm 36px · md 44px (Touch-Minimum) · lg 52px · icon 44×44px */
  size?: 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  /** Pflicht bei size="icon" */
  ariaLabel?: string;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
