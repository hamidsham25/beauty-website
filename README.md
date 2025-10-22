# Beauty Website - Praxis Center Weiss

Eine moderne, responsive Website für eine Naturheilkunde-Praxis, entwickelt mit Next.js und Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimiert für alle Geräte (Desktop, Tablet, Mobile)
- **Moderne UI**: Sauberes und professionelles Design mit Tailwind CSS
- **Performance**: Schnelle Ladezeiten durch Next.js
- **Komponentenbasierte Architektur**: Wiederverwendbare React-Komponenten

## 📋 Seiten

- **Startseite**: Hero-Sektion mit Willkommensnachricht
- **Über uns**: Informationen über die Praxis und das Team
- **Leistungen**: Übersicht der angebotenen Behandlungen
- **Galerie**: Bildergalerie der Praxisräume
- **Kontakt**: Kontaktformular und Standortinformationen

## 🛠️ Technologien

- **Next.js 14**: React-Framework für die Webentwicklung
- **TypeScript**: Typsichere JavaScript-Entwicklung
- **Tailwind CSS**: Utility-first CSS-Framework
- **React**: JavaScript-Bibliothek für Benutzeroberflächen

## 🚀 Installation und Setup

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder yarn

### Installation

1. Repository klonen:
```bash
git clone https://github.com/hamidsham25/beauty-website.git
cd beauty-website
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

4. Website im Browser öffnen:
```
http://localhost:3000
```

## 📁 Projektstruktur

```
beauty-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Startseite
├── components/            # React-Komponenten
│   ├── About.tsx          # Über uns Sektion
│   ├── Contact.tsx        # Kontakt Sektion
│   ├── Footer.tsx         # Footer
│   ├── Gallery.tsx        # Galerie
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Hero-Sektion
│   └── Services.tsx       # Leistungen
├── public/               # Statische Dateien
├── package.json          # Projekt-Abhängigkeiten
├── tailwind.config.js    # Tailwind CSS Konfiguration
└── tsconfig.json         # TypeScript Konfiguration
```

## 🎨 Anpassung

### Farben ändern
Die Farben können in der `tailwind.config.js` angepasst werden.

### Inhalte bearbeiten
Die Inhalte befinden sich direkt in den jeweiligen Komponenten-Dateien im `components/` Ordner.

### Bilder hinzufügen
Neue Bilder können im `public/` Ordner abgelegt werden.

## 📱 Responsive Design

Die Website ist vollständig responsive und funktioniert optimal auf:
- Desktop-Computern
- Tablets
- Smartphones

## 🚀 Deployment

### Vercel (Empfohlen)
1. Repository mit Vercel verbinden
2. Automatisches Deployment bei jedem Push

### Andere Plattformen
Die Website kann auf jeder Plattform deployed werden, die Node.js unterstützt.

## 📄 Lizenz

Dieses Projekt ist für die Praxis Center Weiss entwickelt worden.

## 👥 Kontakt

Bei Fragen oder Problemen wenden Sie sich an das Entwicklungsteam.

---

Entwickelt mit ❤️ für Praxis Center Weiss
