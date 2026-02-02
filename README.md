# Ferienwohnung Eden

Eine moderne Single-Page-Application für eine Ferienwohnung in Bamberg, entwickelt mit Angular 21 und Angular Material.

## 🌐 Live Demo

Die Anwendung ist live unter [https://juckybbg.github.io/ferienwohnung-eden/](https://juckybbg.github.io/ferienwohnung-eden/) verfügbar.

## 📋 Projektübersicht

Diese Website präsentiert die Ferienwohnung Eden mit folgenden Bereichen:

- **Home** – Bildergalerie mit Swiper-Slider und Ausstattungsübersicht
- **Lage und Umgebung** – Informationen zur Location
- **Preis und Buchung** – Preisdetails und Buchungsinformationen
- **Interessantes in Bamberg** – Sehenswürdigkeiten und Tipps
- **Kontakt** – Kontaktformular und Ansprechpartner
- **Impressum** – Rechtliche Informationen

## 🛠️ Technologie-Stack

- **Framework:** Angular 21.1
- **UI-Library:** Angular Material 21.1
- **Styling:** SCSS
- **Slider:** Swiper 12.1
- **Testing:** Vitest 4.0
- **Deployment:** GitHub Pages via angular-cli-ghpages

## 🚀 Entwicklung

### Voraussetzungen

- Node.js (empfohlen: aktuelle LTS-Version)
- npm 11.6.2 oder höher

### Installation

```bash
npm install
```

### Development Server starten

```bash
npm start
```

Die Anwendung ist dann unter `http://localhost:4200/` erreichbar. Die App lädt automatisch neu bei Änderungen.

### Lokale Preview der Production-Build

```bash
npm run preview
```

Startet einen lokalen http-server mit der gebauten Anwendung auf Port 8080.

## 🏗️ Build & Deployment

### Production Build erstellen

```bash
npm run build
```

Die Build-Artefakte werden im `dist/ferienwohnung-eden/` Verzeichnis gespeichert.

### Zu GitHub Pages deployen

```bash
npm run deploy
```

Dieser Befehl erstellt automatisch einen Production-Build und deployed ihn zum `gh-pages` Branch.

## 🧪 Testing

```bash
npm test
```

Führt die Unit-Tests mit Vitest aus.

## 📁 Projektstruktur

```
src/
├── app/
│   ├── components/
│   │   └── header/          # Header-Komponente mit Navigation
│   ├── pages/               # Seiten-Komponenten
│   │   ├── home/
│   │   ├── lage-umgebung/
│   │   ├── preis-buchung/
│   │   ├── interessantes-bamberg/
│   │   ├── kontakt/
│   │   └── impressum/
│   ├── models/              # TypeScript-Interfaces
│   ├── cards-service.ts     # Service für Card-Daten
│   ├── app.routes.ts        # Routing-Konfiguration
│   └── app.ts               # Root-Komponente
└── assets/
    └── images/              # Bilder und Medien
```

## 🔧 Wichtige Konfigurationen

- **Base Href:** `/ferienwohnung-eden/` (für GitHub Pages Subdirectory)
- **Output Path:** `dist/ferienwohnung-eden/`
- **Build Target:** Browser (Application Builder)

## 📝 Weitere Informationen

- [Angular CLI Dokumentation](https://angular.dev/tools/cli)
- [Angular Material Dokumentation](https://material.angular.io/)
- [Swiper Dokumentation](https://swiperjs.com/)
