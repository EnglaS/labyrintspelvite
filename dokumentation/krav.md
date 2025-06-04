## Epic: Grundläggande Spelmekanik
### **PB1: Spelarkontroll och rörelse**
 - **Beskrivning**: Som spelare vill jag kunna styra karaktären med tangentbord eller kontroll så att jag smidigt kan navigera genom labyrinten.
 - **Acceptanskriterier**: Karaktären rör sig i alla riktningar, reagerar korrekt på användarinput och har en naturlig rörelse.
 - **Prioritet**: Hög


### **PB2: Kollisionsdetektion**
 - **Beskrivning**: Som spelare ska karaktären inte kunna passera genom väggar eller hinder, utan istället hindras av korrekt implementerad kollisionslogik.
 - **Acceptanskriterier**: Kollisionssystemet upptäcker och hanterar alla kollisioner med fasta och rörliga objekt på ett smidigt sätt.
 - **Prioritet**: Hög



## Epic: Labyrint och Nivådesign
### **PB3: Grundläggande labyrintnivå**
 - **Beskrivning**: Som spelare vill jag att labyrinten har en tydlig och funktionell layout med väggar och öppna passager som möjliggör navigering.
 - **Acceptanskriterier**: En första version av labyrinten är klar med fungerande strukturer och passager.
 - **Prioritet**: Hög


### **PB4: Procedurmässig labyrintgenerator**
 - **Beskrivning**: Som utvecklare vill jag implementera en algoritm som genererar labyrinter slumpmässigt så att varje spelomgång känns unik.
 - **Acceptanskriterier**: Varje genererad nivå är spelbar och erbjuder en varierande layout.
 - **Prioritet**: Medium



## Epic: Interaktiva Objekt och Pussellösningar
**PB5: Plocka upp objekt**
 Beskrivning: Som spelare vill jag kunna plocka upp olika objekt (t.ex. nycklar, verktyg) som senare används för att lösa pussel och låsa upp nya områden i labyrinten.
 Acceptanskriterier: Spelaren kan interagera med objekt och se en visuell bekräftelse när objektet plockas upp.
 Prioritet: Hög


**PB6: Miljöbaserade pussel**
 Beskrivning: Som spelare vill jag interagera med miljöpussel (t.ex. tryckplattor, växlande väggar) som kräver att jag planerar mina rörelser för att öppna dolda passager eller inaktivera fällor.
 Acceptanskriterier: Minst ett pussel finns implementerat i en nivå där mekaniker som tryckplattor påverkar labyrintens struktur.
 Prioritet: Hög


**PB7: Kombinera objekt**
 Beskrivning: Som spelare vill jag kunna kombinera olika uppsamlade objekt för att skapa verktyg eller lösa särskilda utmaningar i spelet.
 Acceptanskriterier: Ett enkelt system för att kombinera objekt är på plats, med visuell feedback när kombinationen lyckas.
 Prioritet: Medium



## Epic: Dynamiska Miljöer och Begränsad Sikt
**PB8: Begränsad sikt och ljuseffekt**
 Beskrivning: Som spelare vill jag att spelet använder ljus- och skuggeffekter för att begränsa min sikt, vilket ökar känslan av mystik och spänning.
 Acceptanskriterier: Implementera ett ljussystem där spelaren endast ser en begränsad omgivning, med möjlighet att justera ljusradius vid behov.
 Prioritet: Hög


**PB9: Dynamiska labyrinteelement**
 Beskrivning: Som spelare vill jag att delar av labyrinten förändras under spelets gång (t.ex. rörliga väggar eller aktiverade fällor), vilket skapar oförutsägbarhet och utmaning.
 Acceptanskriterier: Mindre delar av labyrinten animeras och förändras under en spelsession, vilket påverkar navigeringen.
 Prioritet: Medium



## Epic: Användargränssnitt och Upplevelse
**PB10: Huvudmeny och spelgränssnitt**
 Beskrivning: Som spelare vill jag ha en intuitiv startmeny och ett spelgränssnitt med tydliga navigationsalternativ (starta nytt spel, paus, instruktioner) för att enkelt kunna interagera med spelet.
 Acceptanskriterier: Huvudmeny och grundläggande UI-element är designade och fungerar på både dator och mobila enheter.
 Prioritet: Hög


**PB11: Ljud- och musikdesign**
 Beskrivning: Som spelare vill jag ha ljud- och musikeffekter som matchar spelets tema för att öka inlevelsen och den atmosfäriska upplevelsen.
 Acceptanskriterier: Ljudspår och effekter är integrerade och kan anpassas efter spelets situationer (t.ex. lugn musik i trygga områden, intensiva effekter vid faror).
 Prioritet: Medium



## Epic: Testning och Integration
**PB12: Enhetstester för kärnkomponenter**
 Beskrivning: Som utvecklare vill jag implementera enhetstester för att säkerställa att grundläggande funktioner som spelarkontroll, kollisionsdetektion och interaktioner fungerar som tänkt.
 Acceptanskriterier: Testsviter är skapade och körs automatiskt vid varje commit via CI/CD-pipeline.
 Prioritet: Hög


**PB13: CI/CD-integration**
 Beskrivning: Som utvecklare vill jag ha en kontinuerlig integrations- och leveransprocess för att säkerställa en stabil utvecklingsmiljö och snabba feedbackloopar.
 Acceptanskriterier: CI/CD-pipeline är konfigurerad för automatisk byggnation, testning och driftsättning (till exempel via GitLab).
 Prioritet: Medium



**Epic: Extra Funktioner och Feedback**
**PB14:** Spelarprogression och uppgraderingssystem
 Beskrivning: Som spelare vill jag se en utveckling genom spelets gång, med möjlighet att låsa upp nya förmågor eller uppnå högre poäng, för att skapa motivation och långvarigt spelintresse.
 Acceptanskriterier: Ett enkelt progressionssystem är implementerat där prestationer belönas med visuella och funktionella uppgraderingar.
 Prioritet: Låg


**PB15: Highscore och achievements**
 Beskrivning: Som spelare vill jag kunna se mina prestationer och jämföra mina resultat med tidigare omgångar eller andra spelare, för att öka utmaningsmomentet.
 Acceptanskriterier: Ett highscore-system är på plats och achievements visas efter genomspelade nivåer.
 Prioritet: Låg
