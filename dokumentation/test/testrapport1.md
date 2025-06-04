## Testrapport 1

**Datum:** 2025-04-29
**Version:** `v0.0` – Endast en spelare, första implementation av spelet.\
**Testmiljö:** Körd i produktionssatt miljö via Vercel i Chrome.

---

### Testfall och resultat

| Testfall | Use case | Status | Kommentar |
|----------|----------|--------|-----------|
| TC1 – Rörelse | UC1 | :white_check_mark: OK | Spelaren kunde röra sig i alla riktningar |
| TC2 – Väggkollision | UC1 | :x: Fail | Väggar existerar inte. |
| TC3 – Målidentifiering | UC2 | :x: Fail | Mål existerar inte. |

---

### Automatiserade tester

**Ej implementerat vid tidpunkten för denna testkörning**. Endast manuell testning genomfördes.

---

### Förbättringspunkter

Framför allt att implementera mer funktion i spelet

---

### Analys

Inte mycket är implementerat i detta skede. Det enda som fungerar i nuläget är att flytta karaktären i fyra riktningar
