import Hero from "../components/hero"
import Nav from "../components/nav"
import Welcome from "../components/welcome"
import Event from "../components/event"
import Gallery from "../components/gallery"
import Track from "../components/track"
import Latest from "../components/latest"
import Testemonials from "../components/testemonials"
import Blog from "../components/blog"
import NewsLetter from "../components/newsletter"
import Footer from "../components/footer"

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
      <Blog blog={props.blog} />
      <NewsLetter />
      <Footer />
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

  const blogUrl = "http://localhost:4000/blog-posts"
  const blog = await getData(blogUrl)

  return {
    props: {
      gallery,
      testemonials,
      blog,
    },
  }
}
