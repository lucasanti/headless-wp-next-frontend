import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaMapPin } from "react-icons/fa";

function EventsPreviewItem({ event, featuredMedia }) {
  const eventUrl = `/events/${event.slug}`;
  const imgSrc = featuredMedia["media_details"].sizes.medium["source_url"];

  return (
    
      <div className="row align-items-center mb-4">
        <div className="col" >
            <Link href={eventUrl} className="mb-4">
                <Image className="card-img img-thumb" src={imgSrc} width={180} height={180} alt={featuredMedia['alt_text']}/>
            </Link>
        </div>
        <div className="col">
            <Link href={eventUrl} className="">
            <h3 className="card-title">{event.title.rendered}</h3>
            </Link>
          <div className="row mb-3">
            <div className="col d-flex align-items-center">
            <span className="me-2 alig-itmes-center" style={{fontSize: '0.8em'}}><FaCalendarAlt /></span> {event.acf.date}
            </div>
            <div className="col d-flex align-items-center">
              <span className="me alig-itmes-center-2" style={{fontSize: '0.8em'}}><FaMapPin /></span> {event.acf.location}
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
