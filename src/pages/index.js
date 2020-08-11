import Hero from "../components/hero"
import Nav from "../components/nav"
import Welcome from "../components/welcome"
import Event from "../components/event"

export default function Home({ allData }) {
  return (
    <>
      <Hero />
      <Nav />
      <Welcome />
      <Event events={allData} />
    </>
  )
}

const getData = async url => {
  const res = await fetch(url)
  const data = await res.json()

  return data
}

export async function getStaticProps() {
  const API = "http://10.64.192.59:4000/events"
  const allData = await getData(API)

  return {
    props: {
      allData,
    },
  }
}
