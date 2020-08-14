# Projekt-Dokumentation - Night-Club - jonas-Nielsen

Dokumentation for terminsprøve Night-Club - jonas-Nielsen - 14-08-2020

## Valgte Teknologier & Stack

> ### React.js - Library

jeg har valgt at bruge React.js som mit javascript framework ( eller biblotek i det her tilfælde ) fordi det gør det let at arbejde i et modulært work flow. Alle de komponenter jeg laver, kan jeg genbruge hvor jeg vil. Det gør arbejdes proccesen hurtigere og nemmere for mig. jeg er også meget bekvemt med React.js, det spiler en stor rolle når man har en deadline. React er også så udbredt, at chancerne er hvis man støder ind i et problem man simpelhent ikke kan løse selv, er der nok nogle på nettet der har.

> ### Next.js - FrameWork

jeg har valgt at bruge Next.js - som er et react ssr / ssg framework. Der er nogle forskellige grunde til jeg har valgt at bruge et React framework. Den primare grund til jeg har valgt det er på grund af det er hurtigt at sætte op og komme igang, lidt ligesom create-react-app.

Udover det, har Next.js nogle features der gør det tiltalende at arbejde med, blandt andet:

- Pre-Rendered Data
- SSR / SSG
- Page-Routing
- Hurtig Performance

> ### Styled-Components - CSS-in-js

Styled-Components er CSS i javascript for React. Det gør det muligt at gøre dine komponenter endnu mere modulært, ved at have din logik, markdown og styling i en fil. Det har mange features fks - Global-Styling, ThemeContext og ikke mindst muligheden for at style dynamisk med i gennem props.

Grunden til at jeg valgte Styled-Components, er netop for at spare tid, krafter og gøre det mere overskugeligt i ens fil struktur.

> ### React-Hook-Form - Form Validation

React-Hook-Form er en form validerings pakke for react. Det gør det hurtigt og sikkert at validere en form ved hjælp af hooks. Det er også grunden til at jeg har valgt det, i stedet for at side og bruge tid på at validere det selv, som sikkert ikke bliver lige så godt.

> ### SWR - React Hook Library

SWR (stale-while-revalidate) er et React Hook library for data fetching. Det er hurtigt og lightweight og gør det nemt at hente data via client side. Komponenter kan nemt hente data hvor end fra via dette hook.

## Teknisk Dokumentation

> ### Pre-Rendered Data

Pre-Rendered Data gør det muligt at hente data før din app bliver renderet. Det forhindre at din App bliver renderet før din data er tilgængelig, så ens bruger ikke kommer ind til en tom side.

```ruby
const getData = async url => {
  const res = await fetch(url)
  const data = await res.json()

  return data
}

export async function getStaticProps() {
  const eventsURL = "http://localhost:4000/events"
  const events = await getData(eventsURL)

  const galleryURL = "http://localhost:4000/gallery-photos"
  const gallery = await getData(galleryURL)

  const testemonialsURL = "http://localhost:4000/testemonials"
  const testemonials = await getData(testemonialsURL)

  const blogUrl = "http://localhost:4000/blog-posts"
  const blog = await getData(blogUrl)

  return {
    props: {
      events,
      gallery,
      testemonials,
      blog,
    },
  }
}
```

Alt det data du henter bliver tilgængeligt i sidens props.

> ### React-Hook-Form

Her et simpelt submit post ved brug af react-hook-form

```ruby
  const { handleSubmit, register, errors } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data, e) => {
    fetch("http://localhost:4000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: `${data.name}`,
        email: `${data.email}`,
        website: `${data.website}`,
        message: `${data.message}`,
      }),
    })
      .then(function (response) {})
      .catch(function (error) {
        console.error(error)
      })
    setSubmitted(true)
    e.target.reset()
    console.log(submitted)
  }
```

et input tag kunne ligne noget som der her

```ruby
   <input
          name="email"
          maxLength={32}
          placeholder="Your Email"
          ref={register({
            required: " ",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "E-Mail doesn't seem valid",
            },
          })}
        />
```

> ### useSWR

Nedenunder kan man se et eksempel på hvor let det er at bruge SWR for client side data fetching.

```ruby
const fetcher = (...args) => fetch(...args).then(res => res.json())

const EventCard = ({ asset, description, location, title }) => {

  const [active, setActive] = useState(false)
  const url = `http://localhost:4000/assets/${asset}`
  const { data: result, error } = useSWR(url, fetcher)
```

## Soft Dokumentation

> Når du loader siden, kommer du ind til hero sectionen, som er forsiden på home siden med et baggrunds billede og Night-Clubs logo. Scroller du ned på siden, kommer navigations baren og sætter sig i toppen af siden, indtil du scroller op igen til hero sectionen. Navigations baren indeholder links til de andre sider på Night-Club. Alle de undersider links i baren, bliver til en burger menu hvis du er på telefon, hvor du kan klikke på iconet og få vist alle de links siden har igen (er ikke færdig endnu, så navigations baren er ikke klar endnu på mobilen, men er på desktop)

> Det næste du ser er welcome sectionen. Her kan du holde musen over billederne for at får information om det billedet indeholder.

> Så kommer events sektionen, hvor du kan se de forskellige events med et billede galleri. Ligesom welcome sektionen, kan du holde musen over billederne og få vidste information om dem. Hvis du klikker på en af de små iconer under billeder i midten, kan du skifte mellem billederne. Via telefon kan du swipe for at se det næste event.

> Næste sektion er galleri sektionen. Her er billeder fra Night-Club lagt ud ved siden af hinanden.

> Du kan se tracks og lytte (virker ikke endnu med lyd) til dem i den næste sektion. Hold musen over billderne, så kan du klikke på dem og afspille det track. Du kan også skifte numre ved hjælp af pil ikonerne på siden af billederne.

> I latest video sektionen kan man se de nyeste videoer og afspille dem ved at klikke på afspil ikonnet, som kommer frem når musen er over billedet.

> I newsletter kan du skrive din email addrese i feltet og klikke subscribe. Din mail bliver sent til Night-Club og du vil få de seneste nyheder fra Night-Club.

> I bunden af siden kan du se alle de praktiske informationer som åbningstider, lokation og de seneste indslag fra Night-Club. Sociale links er nederst på alle sider.

> På contact siden kan du skrive dit navn, mail, hjemmeside og en besked til nightclub. Den bliver sendt ind til Night-Club, hvorefter de kan vende tilbage så hurtigt som muligt.

## Arbejdesprocessen

> Min tanke var at sætte projektet op og klaregøre alt som fks fonte, farve tema, layouts og bootstrape mit projekt. jeg ville prøve at lave hver sektionen 80%, og når jeg så var færdig kunne jeg komme tilbage og fine tune de sidste ting på de sektioner der mangler noget.

> jeg prøvede at lave så mange ting som kompnenter som kunne genbruges, for så at kunne spare noget tid.

> Til sidst ville jeg lave animationerne hvis der var tid til det.

### dag oversigt man - fre

1. Læse opgave beskrivelse i gennem - beslutte det bedste stack - sætte projekt op

2. Få hul i gennem endpoints på API - lave markdown på de første sektioner

3. Lave nogle af ekstra opgaverne, som nok skulle være gemt til sidst...

4. Færdigøre forsiden med footern til sidst.

5. Validere newsletter og contact siden - skrive dokumentation.

## Sidste Ord

jeg kom lidt sløvt i gang og fik først rigtig fat til sidst. jeg kunne have brugt mere tid på at læse opgaven ordenligt, da jeg fik spildt måske lidt tid på nogle ekstra opgaver som førte til lidt stress til sidst.

Ved ikke om dokumnetationen er for lang da det er i markdown, men håber det okay.

Tak for du læste min dokumentation for termins prøven Night-Club.

jonas
