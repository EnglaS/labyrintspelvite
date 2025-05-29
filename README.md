# Labyrintspelet

Ett 2D-labyrintspel byggt med **Phaser 3** där spelaren navigerar genom nivåer, samlar nycklar och låser upp dörrar för att nå målet.

**Spela spelet live:**  
👉 [https://labyrintspelvite.vercel.app](https://labyrintspelvite.vercel.app)

---

## Projektstatus

| Statusområde           | Detaljer                                                                 |
|------------------------|--------------------------------------------------------------------------|
| Spelmekanik            | Rörelse, kollision, mål, nyckel och dörr är implementerade              |
| Nivåsystem          | Tre nivåer stöds med nivåbyte och återställning                         |
| Tester              | Enhetstester (Vitest), manuell testning, statisk kodanalys (ESLint)     |
| CI/CD               | GitHub Actions för test och lint vid varje push ska fixas                         |
| Ej färdigt           | Slutskärm + automatiska E2E-tester med Cypress                          |
| Status              | Projektet är i QA-fasen inför leverans                                   |

---

## Implementerade funktioner

- Spelare styrs med piltangenter
- Kollisioner med väggar
- Målflagg för nivåavslut
- Nyckel plockas upp och lagras i tillstånd
- Dörr blockeras tills nyckel är hämtad
- Nivåväxling med automatisk återställning
- Knapp för att byta nivå manuellt (testsyfte)
- Meny + återgång till start

---

## Kvar att implementera

- Slutskärm när sista nivån är klar
- E2E-tester med Cypress
- Visuella förbättringar av meny och UI
- Begränsad sikt i labyrinten
- Ev. ljud och effekter

---

## Teststatus

| Testtyp               | Verktyg       | Status     |
|-----------------------|---------------|------------|
| Enhetstester          | Vitest        | ✅ 2 tester (tile-logik) |
| Statisk kodanalys     | ESLint        | ⏳ ska implementeras i CI                        |
| Manuella tester       | –             | ✅ för UC1–UC4                     |
| E2E-tester            | Cypress       | ⏳ planeras                         |

> Alla funktionella krav PB1–PB6 är testade med minst ett manuellt test. Vissa tester är automatiserade.

---

## Kom igång lokalt

```bash
git clone https://github.com/ditt-namn/labyrintspel.git
cd labyrintspel
npm install
npm run dev
```
