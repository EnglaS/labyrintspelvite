## Testrapport 2

**Datum:** 2025-05-09\
**Version:** `v0.2` – Funktioner för rörelse och kollision på plats\
**Testmiljö:** Windows 10, Chrome, Vite, driftsatt via Vercel

---

### Testsviter och resultat

| Testsvit | UC1 (Rörelse & koll) | UC2 (Mål) | Status | Kommentar |
|----------|----------------------|-----------|--------|-----------|
| TC1 – Rörelse | :white_check_mark: |  | :white_check_mark: OK | Samtliga rörelser testade manuellt |
| TC2 – Kollisionsdetektion | :white_check_mark: |  | :white_check_mark: OK | Hörnkollision fungerar, men instruktion behöver förtydligas |
| TC3 – Målidentifiering |  | :x: | :x: Fail | Mål saknades i testnivån |

---

### Sammanfattning av testfall

#### :white_check_mark: **TC1.1 – Rörelse i alla riktningar**

* Spelaren rör sig korrekt med piltangenterna.
* Rörelsen är smidig och responsiv.
* Kommentar: _“Bra test. Allt ok.”_

#### :white_check_mark: **TC1.2 – Väggkollision**

* Spelaren hindras korrekt av väggar.
* Inga visuella glitchar vid kollision.
* Kommentar: _“Bra test. Allt ok.”_

#### :white_check_mark: **TC2.1 – Hörnkollision vid diagonalrörelse**

* Spelaren försöker gå diagonalt mot hörn.
* Beteendet är korrekt, men testbeskrivning behöver konkretisering.
* Kommentar: _“Förtydliga instruktioner: exempelvis 'gå till övre högra hörnet och håll in ↑ och → i 3 sek'.”_

#### :x: **TC3.1 – Målidentifiering**

* Inget mål fanns i labyrinten vid testtillfället.
* Funktionaliteten kunde därför inte verifieras.
* Kommentar: _“Misslyckas. Finns inget mål att finna.”_

---

### Förbättringspunkter

| Punkt | Varför |
|-------|--------|
| Lägg till mål i testnivån | Gör det möjligt att testa UC2 |
| Förtydliga testinstruktioner | Gör reproduktion enklare vid hörntester |
| Dokumentera nivåspecifika krav | Säkerställ att alla testnivåer innehåller relevanta objekt |

---

### Analys

Spelmekanik för rörelse och väggkollision fungerar enligt förväntan. Målhantering behöver säkerställas genom att rätt labyrintdata laddas. Testningen ger god grund inför nästa iteration, där även fler UC bör inkluderas (t.ex. nyckel och dörr).
