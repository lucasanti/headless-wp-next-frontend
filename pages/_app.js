import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout navigation={pageProps.navigation}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
