import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaLaptop, FaMapPin } from "react-icons/fa";

function EventsPreviewItem({ event, featuredMedia }) {
  const eventUrl = `/events/${event.slug}`;
  // const imgSrc = featuredMedia["media_details"].sizes.medium["source_url"];
  const featuredMediaUrl = featuredMedia ? featuredMedia['media_details'].sizes.medium['source_url'] : '/images/fallback-events.jpg';
  const altText = featuredMedia ? featuredMedia['alt_text'] : 'Fallback Image';

  const eventLocation = <><span className="me align-items-center-2" style={{fontSize: '0.8em'}}><FaMapPin /></span> {event.acf.location}</>;
  const eventPlatform = <><span className="me align-items-center-2" style={{fontSize: '0.8em'}}><FaLaptop /></span> {event.acf.platform}</>;


  return (
    
      <div className="row align-items-center mb-4">
        <div className="col" >
            <Link href={eventUrl} className="mb-4">
                <Image className="card-img img-thumb" src={featuredMediaUrl} width={180} height={180} alt={altText}/>
            </Link>
        </div>
        <div className="col">
            <Link href={eventUrl} className="">
            <h3 className="card-title">{event.title.rendered}</h3>
            </Link>
          <div className="row mb-3">
            <div className="col d-flex flex-column justify-content-center">
            <div className="d-flex flex-row align-items-center"><span className="me-2" style={{fontSize: '0.8em'}}><FaCalendarAlt /></span> {event.acf.event_date}</div>
            <div className="d-flex flex-row align-items-center"><span className="me-2" style={{fontSize: '0.8em'}}><FaClock /></span> {event.acf.event_hour}</div>
            </div>
            <div className="col d-flex align-items-center">
              { event.acf.in_presence ? eventLocation : eventPlatform }
            </div>
          </div>
          <div className="">
            <Link 
                className="btn btn-outline-primary"
                href={eventUrl}
            >See more</Link>
          </div>
        </div>
      </div>
  );
}

export default EventsPreviewItem;
