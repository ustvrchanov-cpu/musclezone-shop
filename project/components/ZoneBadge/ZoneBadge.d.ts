import * as React from 'react';

export interface ZoneBadgeProps {
  /** Kurzes Label, z. B. "Bestseller", "Abholbereit", "−20 %" */
  children?: React.ReactNode;
  tone?: 'accent' | 'ink' | 'success';
  /** Gefüllt statt Outline — für Flächen auf Fotos */
  solid?: boolean;
  /** Optionale Stempel-Drehung in Grad (Standard: 0 = gerade) */
  rotate?: number;
}

export declare function ZoneBadge(props: ZoneBadgeProps): JSX.Element;
