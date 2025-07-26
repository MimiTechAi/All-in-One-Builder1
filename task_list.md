# Task List – Natural Language Builder (Phase 1 MVP)

## Setup & Struktur
- [ ] Create full folder structure (src/, app/, prisma/, lib/, components/)
- [ ] Init Next.js App (App Router + TypeScript)
- [ ] TailwindCSS + shadcn/ui einbinden
- [ ] Zustand Store erstellen

## Auth
- [ ] Setup NextAuth mit Google & GitHub Provider
- [ ] Auth-Protect Dashboard & API-Routen

## Prompt Engine
- [ ] Eingabekomponente für Sprache/Text
- [ ] POST /api/generate → LLM call → Component JSON
- [ ] Render-Komponenten aus JSON generieren

## Backend & DB
- [ ] Prisma Schema definieren (User, Project, Page, Component)
- [ ] PostgreSQL einrichten und connecten
- [ ] CRUD API mit tRPC für alle Modelle

## Komponenten-Renderer
- [ ] Mapping von Prompt Output → React-Komponenten
- [ ] Live Preview Bereich
- [ ] Edit-Modus (per Props-Feld editierbar)

## Deployment
- [ ] Vercel-Konfig
- [ ] Dockerfile mit ENV-Files
- [ ] "Veröffentlichen"-Button → Static Export + Upload

## Bonus
- [ ] Live-Build-AI-Agent (z. B. `MiMiFlowGuide`)
- [ ] Hilfe-Modul mit Chat-Komponente (GPT-basiert)
- [ ] Multi-Projekt-Management für User

## Finalisierung
- [ ] Tests (auth, input → component, persistenz)
- [ ] UX Polish
- [ ] Security Check (auth, rate-limit, input sanitation)
