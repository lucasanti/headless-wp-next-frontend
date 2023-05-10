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

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const navigation = await getNavigation();

  return { pageProps, navigation };
};


export default MyApp
