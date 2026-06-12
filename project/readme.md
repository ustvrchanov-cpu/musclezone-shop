# MuscleZone Design System

Design-System für den MuscleZone Online-Shop (Fitness-Supplements, Wien) — „Hard Mono + 1 Signal“: Schwarz/Weiß aus dem Logo, Power-Rot als einzige Signalfarbe, Dark Mode als Standard.

## Verwendung

1. `styles.css` einbinden — enthält alle Tokens, Basis-Styles und Komponenten-CSS (Präfix `mz-`).
2. Komponenten aus dem Bundle lesen: `const { Button, ProductCard } = window.MuscleZoneDesignSystem_e8992e;` (React 18 vorher laden).
3. Theme: `<html data-theme="dark">` ist der Shop-Standard; Toggle wechselt auf `data-theme="light"`. Niemals Farben hartkodieren — immer `var(--…)`.

## Tokens (Kurzreferenz)

- **Farben**: `--bg`, `--surface`, `--surface-2`, `--ink`, `--ink-muted`, `--line`, `--accent`, `--accent-strong`, `--on-accent`, `--success`, `--danger`
- **Schrift**: `--font-display` / `--font-body` (Archivo), `--font-mono` (IBM Plex Mono — nur für Werte, Preise, Labels). Display: stretch 125 %, Weight 900, Uppercase, nur H1/H2 + große Zahlen.
- **Spacing**: `--space-1…8` (4/8/12/16/24/32/48/64), Radii `--radius-sm/md/lg/pill`, `--border-w: 1.5px`, `--tap-min: 44px`, `--container: 1200px`.

## Komponenten

| Komponente | Zweck |
|---|---|
| `Button` | primary (Rot, Conversion-CTA) · secondary (Ink) · ghost · Größen sm/md/lg/icon |
| `Input` | Formularfeld mit Mono-Label, Hint, Fehlerzustand |
| `ZoneBadge` | Signature-Stempel: `shape="arc"` (Logo-Bogen) oder `pill` |
| `DataStrip` | Signature-Datenleiste in Mono („24 g Protein · 1,12 €/Portion“) |
| `ProductCard` | Produktkarte mit Grundpreis (Pflicht!), Daten-Leiste, Stempel, Abhol-Status |
| `ShippingBar` | Gratisversand-Fortschritt („Noch 4,10 € bis Gratisversand“) |

## Regeln

- Microcopy: Deutsch (AT), Du-Form, aktiv, konkret. Keine Health-Claims („verbrennt Fett“ etc. verboten).
- Grundpreis (€/kg bzw. €/100 g) überall anzeigen, wo ein Preis steht — gesetzliche Pflicht.
- Touch-Ziele ≥ 44 px, Fokus sichtbar (Accent-Ring), `prefers-reduced-motion` wird global respektiert.
- Accent sparsam: CTAs, Punkte, Fortschritt, Stempel — nicht für Deko-Flächen.
