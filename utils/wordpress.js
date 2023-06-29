const BASE_URL = 'https://dev-b-headless-wp.pantheonsite.io/wp-json/wp/v2';

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + '/posts?_embed');
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}
export async function getEvents() {
  const eventsRes = await fetch(BASE_URL + '/events?_embed');
  const eventsData = await eventsRes.json();
  const events = eventsData.sort((event1, event2) => event1.acf.date > event2.acf.date ? -1 : 1);
  return events;
}

export async function getEvent(slug) {
  const events = await getEvents();
  const eventArray = events.filter((event) => event.slug == slug);
  const event = eventArray.length > 0 ? eventArray[0] : null;
  return event;
}

export async function getPeople(){
  const peopleRes = await fetch(BASE_URL + '/people?_embed');
  const people = await peopleRes.json();
  return people;
  
}

export async function getPerson(slug){
  const people = await getPeople();
  const peopleArray = people.filter((person) => person.slug == slug);
  const person = peopleArray.length > 0 ? peopleArray[0] : null;
  return person;
}

export async function getNavigation(){
  const navigationRes = await fetch(BASE_URL + '/navigation/32');
  const navigationData = await navigationRes.json();
  const navigation = navigationData.content.rendered;
  // console.log(navigation)
  return navigation;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case 'posts':
      elements = await getPosts();
      break;
    case 'events':
      elements = await getEvents();
      break;
    case 'people':
      elements = await getPeople();
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}