import Hero from "../components/hero"
import Nav from "../components/nav"
import Welcome from "../components/welcome"
import Event from "../components/event"
import Gallery from "../components/gallery"
import Track from "../components/track"
import Latest from "../components/latest"
import Testemonials from "../components/testemonials"

export default function Home(props) {
  return (
    <>
      <Hero />
      <Nav />
      <Welcome />
      <Event />
      <Gallery gallery={props.gallery} />
      <Track />
      <Latest />
      <Testemonials testemonials={props.testemonials} />
    </>
  )
}

const getData = async url => {
  const res = await fetch(url)
  const data = await res.json()

  return data
}

export async function getStaticProps() {
  const galleryURL = "http://localhost:4000/gallery-photos"
  const gallery = await getData(galleryURL)

  const testemonialsURL = "http://localhost:4000/testemonials"
  const testemonials = await getData(testemonialsURL)

  return {
    props: {
      gallery,
      testemonials,
    },
  }
}
