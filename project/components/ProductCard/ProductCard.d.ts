import * as React from 'react';

export interface ProductCardProps {
  name: string;
  brand?: string;
  /** Formatierter Preis, z. B. "29,90 €" */
  price: string;
  /** Grundpreis (Pflicht in AT/EU!), z. B. "29,90 €/kg" */
  unitPrice?: string;
  /** Mono-Datenleiste (Signature), z. B. ["24 g Protein", "1,12 €/Portion"] */
  data?: string[];
  /** Stempel-Label, z. B. "Bestseller" */
  badge?: string;
  badgeTone?: 'accent' | 'ink' | 'success';
  /** Bild-URL; ohne Bild erscheint ein gestreifter PACKSHOT-Platzhalter */
  image?: string;
  /** z. B. "Heute ab 14 Uhr abholbar" */
  availability?: string;
  onAdd?: () => void;
  style?: React.CSSProperties;
}

export declare function ProductCard(props: ProductCardProps): JSX.Element;
