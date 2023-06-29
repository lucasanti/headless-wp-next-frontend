import Link from 'next/link';
import Image from 'next/image';

export default function People({ person, featuredMedia }) {

  const featuredMediaUrl = featuredMedia ? featuredMedia['media_details'].sizes.medium['source_url'] : '/images/fallback-people.jpg';
  const altText = featuredMedia ? featuredMedia['alt_text'] : 'Fallback Image';

  return (
    <div className='col'>
    <div className="card mb-3 py-3" style={{maxWidth: '300px'}}>
      <Link href={`/people/${person.slug}`} className='d-flex justify-content-center'>
        <div style={{maxWidth: '210px'}}>

          <Image
            src={featuredMediaUrl}
            width={210}
            height={210}
            alt={altText}
            className="card-img-top rounded-circle"
            />
        </div>
        
      </Link>
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{person.title.rendered}</h5>
        <p className="card-text">
          <small className="text-muted">{person.acf.role}</small><br />
          <small className="">{person.acf.department}</small>
        </p>

        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: person.excerpt.rendered }}
        ></div>
        
        <Link href={`/people/${person.slug}`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
    </div>
  );
}