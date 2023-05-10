import { getNavigation, getEvents, getPosts, getPeople } from '../../utils/wordpress';

function index() {
  return (
    <div>posts</div>
  )
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const navigation = await getNavigation();
  // console.log(navigation);

  return {
    props: {
      navigation,
      posts,
      // media
    },
    revalidate: 600, // In seconds
  };
}
export default index