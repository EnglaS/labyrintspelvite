## Testrapport 3

**Datum:** 2025-05-22\
**Version:** `v1.0` – Alla kärnfunktioner implementerade (rörelse, mål, nyckel, dörr, nivåbyte)\
**Testmiljö:** Windows 10, Chrome, driftsatt via Vercel

---

### Sammanställning av testresultat

| Testsvit | UC1 (Rörelse) | UC2 (Mål) | UC3 (Nyckel/Dörr) | UC4 (Nivåsystem) | Status | Kommentar |
|----------|---------------|-----------|-------------------|------------------|--------|-----------|
| TC1 – Rörelse | :white_check_mark: |  |  |  | :white_check_mark: OK | Rörelser i alla riktningar fungerar |
| TC2 – Väggkollision | :white_check_mark: |  |  |  | :white_check_mark: OK | Spelaren stoppas korrekt vid väggar |
| TC3 – Målidentifiering |  | :white_check_mark: |  | :white_check_mark: | :white_check_mark: OK | Målet fungerar efter dörrupplåsning |
| TC4 – Nyckelupptagning |  |  | :white_check_mark: |  | :white_check_mark: OK | Nyckeln försvinner och flaggas som plockad |
| TC5 – Dörrlogik |  |  | :white_check_mark: | :white_check_mark: | :white_check_mark: OK | Dörr öppnas bara med nyckel |

---

### Testkommentarer

#### **TC1 – Rörelse**

* Spelaren rör sig som förväntat i alla riktningar.
* Inga grafiska buggar observerades.
* Status: **Godkänt**

#### **TC2 – Väggkollision**

* Rörelse mot väggar blockeras korrekt.
* Diagonal kollision vid hörn testad – fungerade som förväntat.
* Status: **Godkänt**

#### **TC3 – Målidentifiering**

* Spelaren når målet efter att ha låst upp dörr.
* Meddelande “Mål uppnått” visas (bör ev. justeras till “Nivå klar”).
* Status: **Godkänt**, men instruktionstexten kan förtydligas.

#### **TC4 – Nyckelupptagning**

* Nyckel försvinner vid uppsamling.
* Texten “nyckel!” visas korrekt.
* `scene.hasKey` sätts som förväntat.
* Kommentar: Undvik kodspecifik formulering i testspec (t.ex. `scene.hasKey`)
* Status: **Godkänt**

#### **TC5 – Dörrlogik**

* Spelaren kan inte passera dörr utan nyckel.
* När nyckel är plockad öppnas dörren korrekt.
* Visuell bekräftelse visas (“öppen!”).
* Status: **Godkänt**

---

### Ej fullt testade delar

| Funktion | Orsak | Plan |
|----------|-------|------|
| Ljus- och skuggeffekter | Ej implementerat | Kommer i UC6 |
| Automatisk nivågenerering | Delvis manuell just nu | Planeras i UC5 |
| E2E-tester | Ej igång ännu | Cypress setup påbörjas v.22 |

### Automatiserade tester

Tester går igenom.

![image.png](uploads/62893bcfa49951ef83552b2d9e42c060/image.png){width="563" height="157"}

### Förbättringspunkter

Implementera mer funktion i spelet. Förbättra formuleringar och instruktioner i testspecifikationen.

---

### Analys

Systemet upplevs som stabilt och funktionsmässigt färdigt i sin kärna. Alla definierade testfall i testsviterna TC1–TC5 klarades utan större problem, vilket tyder på att spelets logik för rörelse, kollisioner, nyckel/dörr-interaktion och måluppfyllelse är robust.

Det är tydligt att teststrategin har mognat:

* Från enkel manuell testning i början av projektet till mer strukturerade tester, och viss automatisering.
* Välorganiserad kodstruktur har underlättat testbarheten, särskilt i logiska moduler.
* Testresultaten ger också förtroende för att spelet kan byggas vidare på utan att grundläggande funktioner bryts.

Vissa delar återstår dock att testa:

* E2E-testning är ännu inte implementerat, vilket begränsar möjligheten att automatiskt säkerställa flödet från start till mål.
* Vissa visuella och användargränssnittsrelaterade element är inte fullt testade (exempelvis ljuseffekter eller menylogik).

Överlag bedöms testresultaten ge **hög testtäckning för kärnfunktioner** och systemet känns redo för vidare polish eller paketering inför leverans.
