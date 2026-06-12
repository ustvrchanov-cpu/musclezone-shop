export interface ShippingBarProps {
  /** Aktueller Warenkorbwert in € */
  current?: number;
  /** Gratisversand-Schwelle in € (Default 49) */
  threshold?: number;
}

export declare function ShippingBar(props: ShippingBarProps): JSX.Element;
