import Link from 'next/link';
import Image from 'next/image';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

export default function Event({ event, featuredMedia }) {
  return (
    <div className="card mb-3" >
      <Link href={`/events/${event.slug}`}>
        
          <Image
            src={featuredMedia['media_details'].sizes.medium['source_url']}
            width={288}
            height={190}
            alt={featuredMedia['alt_text']}
            className="card-img-top"
          />
        
      </Link>
      <div className="card-body">
        <h5 className="card-title">{event.title.rendered}</h5>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }}
        ></div>
        <p className="card-text">
          <small className="text-muted">{event.acf.event_date} at {event.acf.event_hour}</small>
        </p>
        <Link href={`/events/${event.slug}`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
  );
}