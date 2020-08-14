import Layout from "../components/layout"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
