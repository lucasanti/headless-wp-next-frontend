
import Head from 'next/head';

import { getNavigation, getEvents, getPosts, getPeople } from '../utils/wordpress';

import Post from '../components/Post';
import Event from '../components/Event';
import People from '../components/People';
import Header from '../components/Header/Header';
import EventsPreviewList from '../components/Events/EventsPreviewList';

export default function Home({ navigation, posts, events, people }) {

  const renderedPosts = posts.map((post) => {
    const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
    return <Post 
      post={post} 
      featuredMedia={featuredMedia} 
      key={post.id} 
      />;
  });

  


  const renderedPeople = people.map((person) => {
    const featuredMedia = person['_embedded']['wp:featuredmedia'][0];
    return <People 
      person={person} 
      featuredMedia={featuredMedia}
      key={person.id}
    />;
  })

  return (
    <>
      <Head>
        <title>Headless Wordpress - Test</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="pb-3">All latest news</h2>
            { renderedPosts }
          </div>
          <div className="col-lg-4">
            <h2 className="pb-3">Our upcoming events</h2>
            {  }

            <EventsPreviewList events={events}/>

          </div>
        </div>
        <div className='row'>
          <div className='col-12'><h2 className='pb-3'>Our people</h2></div>
        </div>
        <div className='row '>
        { renderedPeople }
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const events = await getEvents();
  const people = await getPeople();
  const navigation = await getNavigation();
  // console.log(navigation);

  return {
    props: {
      navigation,
      posts,
      events,
      people
      // media
    },
    revalidate: 600, // In seconds
  };
}