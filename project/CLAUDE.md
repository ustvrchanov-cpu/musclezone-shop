# MuscleZone Design System — Arbeitsregeln & Entscheidungen

## Arbeitsweise (vom Inhaber vorgegeben — immer einhalten)
1. Vor jeder technischen Implementierung: Vorhaben zuerst in einfacher Sprache erklären (als würde man es einer jüngeren Person ohne Vorkenntnisse erklären). Erst nach OK umsetzen.
2. Schrittweise: erst Struktur/Konzept, dann Design-System, dann Komponenten/Seiten. Nie alles auf einmal.
3. Designentscheidungen kurz begründen; bei wichtigen Weichenstellungen 2–3 Varianten anbieten.
4. Proaktiv auf rechtliche Pflichten in Österreich hinweisen: Impressum, DSGVO, 14-tägiges Widerrufsrecht inkl. Ausnahme § 18 FAGG (entsiegelte Lebensmittel/Supplements), AGB, Preisangaben inkl. Grundpreis (€/kg bzw. €/100 g), LMIV (Zutaten + Nährwerte vor Kaufabschluss online einsehbar), Health-Claims-Verordnung bei Microcopy.

## Kontext
- MuscleZone: lokales Fitness-Supplement-Geschäft in Wien + Online-Shop, verbunden über Loyalty-Ökosystem (Punkte kanalübergreifend).
- Kassensystem: HelloCash (REST, Basic Auth). Bestehendes internes Dashboard: React + Vite + Tailwind, Node/Express-Proxy auf Railway, Vercel-Deployment.
- Hosting: one.com (FTP, PHP+SQLite), Vercel, Railway. Payment-Entscheidung: **Mollie**.
- Punkte-Architektur: append-only Punkte-Ledger in eigener DB = einzige Source of Truth. HelloCash ist nur Sync-Ziel (Kundenanlage) + Ereignisquelle (Beleg → Punktebuchung), nie Punkte-Speicher.

## Designentscheidungen (fixiert)
- **Farbschema „Hard Mono + 1 Signal“**: Schwarz/Weiß aus dem Logo + Signalfarbe **Power-Rot** (`#D9342C` light / `#E8453C` dark). Alle Farben nur über Tokens in `styles.css`, nie hartkodiert.
- **Dark Mode**: Pflicht, via `[data-theme="dark"]`-Token-Overrides. **Standard ist Dunkel.**
- **Typografie**: Archivo (Display: stretch 125 %, 800–900; Body: 400–600) + IBM Plex Mono (Utility: Preise, Nährwerte, Punkte, Labels, Bestellnummern).
- **Signature-Elemente**: ① Zone-Stempel — **gerade & umrandet** (Display 900, Stretch 125 %, 13 px, Tracking 0,03 em, Rahmen 2 px solid currentColor, Ecken 2 px, Drehung 0° Standard; gebogene Arc-Form wurde verworfen) ② Mono-Datenleiste auf Produktkarten (`24 G PROTEIN · 1,12 €/PORTION · HEUTE ABHOLBAR`).
- **Design-Handschrift: V2 „Hart & Klar“ gewählt** — sichtbare 1,5-px-Rahmen, moderate Radien (lg 12 px für Karten), flach, kein Schatten.
- **Ansprache**: Du, deutsch (AT), aktiv, konkret, conversion-orientiert. Keine Health-Claims-Verstöße.
- **Spacing**: 4-px-Raster (4/8/12/16/24/32/48/64). Touch-Ziele ≥ 44 px, sichtbarer Fokus, `prefers-reduced-motion` respektieren.
- **Produktfotos**: noch keine vorhanden → gestreifte Platzhalter mit Mono-Label (z. B. „PACKSHOT“).
- Sortiment zum Start: ca. 200 Produkte. Mobile-first.

## Konventionen
- Tokens & Komponenten-CSS leben in `styles.css` (Klassen-Präfix `mz-`).
- Komponenten: `components/<Name>/<Name>.jsx` + `.d.ts` + `@dsCard`-HTML.
- Microcopy-Beispiele: „In den Warenkorb“, „Noch 12 € bis Gratisversand“, „Heute bestellt, Montag da“, „Heute ab 14 Uhr abholbar“, „Konto anlegen? Deine Punkte warten schon“.
