import Hero from "../components/hero"
import Nav from "../components/nav"
import Welcome from "../components/welcome"
import Event from "../components/event"
import Gallery from "../components/gallery"
import Track from "../components/track"

export default function Home({ allData }) {
  return (
    <>
      <Hero />
      <Nav />
      <Welcome />
      <Event events={allData} />
      <Gallery gallery={allData} />
      <Track />
    </>
  )
}

const getData = async url => {
  const res = await fetch(url)
  const data = await res.json()

  return data
}

export async function getStaticProps() {
  const API = "http://localhost:4000/gallery-photos"
  const allData = await getData(API)

  return {
    props: {
      allData,
    },
  }
}
