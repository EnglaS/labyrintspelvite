# Testspecifikation

<table>
<tr></tr>
</table>

### Syfte

Dokumentera hur testning genomförs för det 2D-baserade labyrintspel vi utvecklar i Phaser 3, med fokus på spelmekanik, mål och interaktioner.

---

### Teststrategi

Vi har successivt utvecklat vår teststrategi. Från början låg fokus på **manuell testning**, men vi har nu kompletterat med **automatiserade enhetstester** och **statisk kodanalys**. End-to-end-tester är planerade men ej fullt implementerade.

#### Angreppssätt

| Angreppssätt | Beskrivning |
|--------------|-------------|
| Funktionsbaserad testning | Testfall baserade på användarfall: rörelse, kollision, mål, nycklar, dörrar |
| Negativ testning | Spelaren försöker göra otillåtna saker (t.ex. gå genom vägg utan nyckel) |
| Automatiserad enhetstestning | Tester av logikmoduler med [Vitest](https://vitest.dev) |
| Explorativ testning | Speltest av teammedlemmar och loggning av oväntade resultat |
| Statisk kodanalys | ESLint används löpande i CI för att hålla kodstil och struktur |

---

### Testtyper och verktyg

| Typ | Verktyg | När det körs |
|-----|---------|--------------|
| Enhetstester | **Vitest** | Vid commit/utveckling |
| Statisk kodanalys | **ESLint** | I CI + manuellt vid kodändring |
| Manuella tester | – | Löpande varje iteration |
| Explorativ testning | – | Under QA-veckan |
| E2E-tester _(planeras)_ | Cypress _(planeras)_ | Efter build inför leverans |

---

### Testområden (UC1–UC4)

| Testsvit | UC1 (Rörelse) | UC2 (Mål) | UC3 (Nyckel/Dörr) | UC4 (Nivåsystem) |
|----------|---------------|-----------|-------------------|------------------|
| TC1 – Rörelse | :white_check_mark: |  |  |  |
| TC2 – Väggkollision | :white_check_mark: |  |  |  |
| TC3 – Mål |  | :white_check_mark: |  | :white_check_mark: |
| TC4 – Nyckel |  |  | :white_check_mark: |  |
| TC5 – Dörr |  |  | :white_check_mark: | :white_check_mark: |


---

### Testsvit: TC1 – Rörelse

#### TC1.1 – Gå åt alla håll

- **Use case:** UC1 – Spelaren rör sig
- **Scenario:** Spelaren trycker på respektive piltangent.
- **Förkrav:** Spelet är igång, labyrint laddad.
- **Teststeg:**
  1. Starta spelet.
  2. Tryck ↑. Spelaren ska flytta sig upp.
  3. Tryck ↓. Spelaren ska flytta sig ner.
  4. Tryck ← och →. Spelaren ska röra sig vänster och höger.
- **Förväntat resultat:** Spelaren förflyttas exakt en cell i valt håll.

#### TC1.2 – Förhindra rörelse genom vägg

- **Use case:** UC1 – Spelaren rör sig
- **Scenario:** Spelaren försöker gå in i en väggtile.
- **Förkrav:** Spelaren står intill en vägg.
- **Teststeg:**
  1. Starta spelet.
  2. Placera spelaren intill vägg.
  3. Tryck mot väggen.
- **Förväntat resultat:** Spelaren förblir stilla, ingen genomgång.

---

### Testsvit: TC2 – Kollisionsdetektion

#### TC2.1 – Kantfall vid diagonalrörelse

- **Use case:** UC1
- **Scenario:** Spelaren försöker röra sig diagonalt mot ett hörn där två väggar möts.
- **Förkrav:** Spelaren är placerad diagonalt intill två väggar.
- **Teststeg:**
  1. Starta spelet.
  2. Tryck t.ex. ↑+→.
- **Förväntat resultat:** Spelaren rör sig ej genom hörnet; antingen förblir stilla eller rör sig längs en vägg.

---

### Testsvit: TC3 – Målidentifiering

#### TC3.1 – Nå målområdet

- **Use case:** UC2 – Spelaren når mål
- **Scenario:** Spelaren går in på målcellen.
- **Förkrav:** Spelet är igång, målplacering i labyrint.
- **Teststeg:**
  1. Navigera till målet.
- **Förväntat resultat:** Spelet visar “Nivå klar” och pausar.

---

### Exempel: TC4 – Plocka upp nyckel

* **Scenario**: Spelaren går över en nyckelruta.
* **Förväntat**: Nyckeln försvinner och en text “nyckel!” visas.
* **Verifieras**: Visuellt + via `scene.hasKey === true`

---

### Ej fullt testade delar

| Funktion | Orsak | Plan |
|----------|-------|------|
| Ljus/skugg-effekter | Ej implementerat än | Kommer i senare version |
| Automatisk nivågenerering | Delvis manuell | UC5 planeras för detta |
| Fullständiga E2E-tester | Ej på plats | Cypress setup påbörjas v.22 |

---

### Hur tester körs

#### Enhetstester (Vitest)

```bash
npm ci 
npm run test
```