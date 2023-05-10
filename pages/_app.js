import '../styles/globals.css'
import Layout from '../components/layout'
import { getNavigation } from '../utils/wordpress'

function MyApp({ Component, pageProps, navigation }) {
  return (
    <Layout navigation={ navigation }>
      <Component {...pageProps} />
    </Layout>
  )
}

export async function getServerSideProps({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const navigation = await getNavigation();

  return { props: { pageProps, navigation } };
}

export default MyApp;

