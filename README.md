# React Prosjektoppgave: Nettbutikk

I denne oppgaven skal du bygge en fungerende nettbutikk med React. Du skal hente produktdata fra et eksternt API, la brukeren søke og filtrere, og bygge en handlekurv som husker hva brukeren har lagt i den.

Dette er en større oppgave enn de forrige, og du skal bruke omtrent en uke på den. Det betyr at planlegging og struktur er like viktig som koden i seg selv. Målet er ikke bare at appen skal fungere — den skal også være skrevet slik at en annen utvikler kan sette seg inn i prosjektet og bygge videre på det.

## API

Du skal bruke [DummyJSON](https://dummyjson.com/docs/products) som datakilde.

De viktigste endepunktene:
orute car
| Hva | Endepunkt |
| --- | --- |
| Alle produkter | `https://dummyjson.com/products` |
| Paginering | `https://dummyjson.com/products?limit=12&skip=24` |
| Søk | `https://dummyjson.com/products/search?q=phone` |
| Alle kategorier | `https://dummyjson.com/products/categories` |
| Produkter i en kategori | `https://dummyjson.com/products/category/smartphones` |
| Ett produkt | `https://dummyjson.com/products/1` |
| Sortering | `https://dummyjson.com/products?sortBy=price&order=asc` |

Merk deg to ting:

- Responsen fra `/products` er et objekt med feltene `products`, `total`, `skip` og `limit` — ikke et array direkte. `total` er det du trenger for å regne ut hvor mange sider du har.
- `/products/categories` returnerer objekter med `slug` og `name`. Du bruker `slug` i URL-en til API-kallet, men `name` er det som skal vises til brukeren.

Les dokumentasjonen før du begynner å kode. Det sparer deg for mye tid.

## Funksjonelle krav

### 1. Produktliste

- Vis produktene i et grid med bilde, tittel, pris og kategori.
- Implementer paginering med `limit` og `skip`. Brukeren skal kunne bla frem og tilbake, og se hvilken side hen er på.
- Vis en tydelig loading-tilstand mens data hentes, og en forståelig feilmelding hvis kallet feiler.

### 2. Søk

- Et søkefelt i headeren som lar brukeren søke etter produkter.
- Søkeresultatene vises i samme grid som produktlisten.
- Hvis søket ikke gir treff, skal brukeren få beskjed om det — ikke bare en tom skjerm.

### 3. Kategorier

- Hent kategoriene fra API-et i stedet for å hardkode dem.
- Brukeren skal kunne velge en kategori og se produktene som hører til.
- Det skal være tydelig hvilken kategori som er aktiv, og mulig å komme tilbake til alle produkter.

### 4. Produktdetaljside

Klikk på et produkt skal ta brukeren til en egen side på sin egen URL (f.eks. `/products/15`). Siden skal vise:

- Tittel, bilde, pris og beskrivelse
- Kategori og merke
- Rating og lagerbeholdning
- Knapp for å legge produktet i handlekurven

URL-en skal fungere direkte — hvis brukeren limer inn lenken i en ny fane, skal riktig produkt vises.

### 5. Handlekurv (Context)

Handlekurven skal ligge i en egen React Context, ikke sendes rundt som props.

- Legge til et produkt
- Fjerne et produkt
- Endre antall av et produkt (samme produkt to ganger skal bli antall 2, ikke to like rader)
- Vise totalsum og totalt antall varer
- Antall varer i kurven skal være synlig i headeren fra alle sider
- Handlekurven skal lagres i `localStorage`, slik at den overlever en refresh

Vær nøye med immutabilitet når du oppdaterer kurven. Dette er stedet i oppgaven hvor det er lettest å innføre bugs som er vanskelige å finne igjen.

### 6. Lys/mørk modus (Context)

- Egen Context for tema, adskilt fra handlekurven.
- En knapp i headeren som bytter mellom lys og mørk modus.
- Temaet skal gjelde hele applikasjonen, og lagres i `localStorage`.

## Tekniske krav

**Routing**

Bruk `createBrowserRouter` fra `react-router-dom`. Applikasjonen skal ha minst disse rutene:

- `/` — forside med produktliste
- `/products/:id` — produktdetaljer
- `/cart` — handlekurv
- `*` — 404-side

Header og navigasjon skal ligge i en layout-komponent med `<Outlet />`, slik at den alltid er synlig.

**Datahenting**

Du velger selv hvordan du henter data. Du kan bruke `fetch` med `useEffect`, eller Axios med TanStack Query (`useQuery`).

Anbefalingen er `Axios` + `useQuery`, fordi det er det du kommer til å møte ute i arbeidslivet. Du får caching, loading- og error-håndtering nesten gratis, og slipper å skrive den samme `useState`-triaden i hver eneste komponent. Velger du `fetch` og `useEffect` er det helt greit, men da må du håndtere de tilstandene selv — og gjøre det konsekvent.

**Styling**

Du står fritt: global CSS, CSS Modules, styled-components, Tailwind eller et komponentbibliotek som MUI.

Velg noe du allerede er komfortabel med. Denne uka skal ikke gå med til å lære et nytt CSS-rammeverk — den skal gå med til React-logikken og strukturen. Et prosjekt med enkel, ren CSS som fungerer er bedre enn et halvferdig prosjekt med Tailwind du kranglet med i tre dager.

Kravene til resultatet er de samme uansett hva du velger:

- Applikasjonen skal være responsiv og fungere på mobil
- Lys og mørk modus skal begge være lesbare, med tilstrekkelig kontrast
- Knapper og lenker skal ha synlig hover-tilstand

## Krav til prosjektstruktur

Dette teller like mye som funksjonaliteten. Vurderingen handler ikke om du har truffet nøyaktig de mappenavnene under, men om noen andre kan finne frem i prosjektet ditt uten hjelp.

Foreslått struktur:

```
src/
├── api/            # All kommunikasjon med DummyJSON
├── components/     # Gjenbrukbare komponenter (ProductCard, Header, Spinner...)
├── context/        # CartContext, ThemeContext
├── hooks/          # Egne hooks, f.eks. useLocalStorage
├── pages/          # En fil per rute (Home, ProductDetails, Cart, NotFound)
├── App.jsx
└── main.jsx
```

Konkrete krav:

- **API-kall skal ikke ligge inne i komponentene.** Samle funksjonene som snakker med DummyJSON i `src/api/`, og importer dem der du trenger dem. Da er det ett sted å endre hvis API-et endrer seg.
- **Én komponent per fil**, og filnavnet skal være det samme som komponenten.
- **Ingen komponent bør være over ca. 100 linjer.** Blir den lengre, er det som regel et tegn på at den gjør for mye — del den opp.
- **Ingen ubrukt kode i innleveringen.** Slett utkommentert kode, `console.log` og filer du ikke bruker.
- **Konsekvent navngiving.** Bruk engelske navn i koden og hold deg til en fast struktur gjennom hele prosjektet.

## README

Prosjektet skal ha en README som inneholder:

1. Kort beskrivelse av hva applikasjonen gjør
2. Hvilke teknologier og biblioteker du har brukt, og hvorfor du valgte dem
3. Hvordan man installerer og kjører prosjektet lokalt
4. Kort forklaring av mappestrukturen
5. Hva som eventuelt ikke er ferdig, eller hva du ville gjort videre

Punkt 5 er ikke en innrømmelse av nederlag, det er noe profesjonelle utviklere gjør hele tiden. Det er bedre å være ærlig om hva som gjenstår enn å la veilederen lete etter funksjonalitet som ikke finnes.

## Forslag til fremdrift

Du bestemmer selv rekkefølgen, men her er en plan som fungerer:

| Dag | Fokus                                                                   |
| --- | ----------------------------------------------------------------------- |
| 1   | Oppsett, mappestruktur, routing, layout med header. Få noe på skjermen. |
| 2   | Produktliste og API-lag. Loading og error på plass fra starten.         |
| 3   | Detaljside og kategorier.                                               |
| 4   | Handlekurv med Context og localStorage.                                 |
| 5   | Søk, paginering, tema.                                                  |
| 6   | Styling, responsivitet, rydding, README, deploy.                        |

Commit ofte og med beskrivende meldinger. Det gjør det mye enklere å finne tilbake når noe plutselig slutter å virke.

## Hvis du blir ferdig tidlig

Noen forslag til utvidelser:

- Sortering på pris eller rating med `sortBy` og `order`
- Bildekarusell på detaljsiden (produktene har flere bilder)
- "Nylig sett"-liste lagret i localStorage
- Debounce på søkefeltet, slik at du ikke fyrer av et API-kall per tastetrykk
- Skeleton-loading i stedet for en "Laster..."-tekst

## Innlevering

- Lenke til GitHub-repo
- Lenke til deployet versjon (GitHub Pages, Netlify eller Vercel)

Sørg for at den deployede versjonen faktisk fungerer. Test den i en privat nettleserfane før du leverer.

Lykke til! 🛒
