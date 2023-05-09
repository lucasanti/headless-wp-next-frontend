import Link from 'next/link';
import Image from 'next/image';

export default function People({ person, featuredMedia }) {
  return (
    <div className='col'>
    <div className="card mb-3 py-3" style={{maxWidth: '300px'}}>
      <Link href={`/people/${person.slug}`} className='d-flex justify-content-center'>
        <div style={{maxWidth: '210px'}}>

          <Image
            src={featuredMedia['media_details'].sizes.medium['source_url']}
            width={210}
            height={210}
            alt={featuredMedia['alt_text']}
            className="card-img-top rounded-circle"
            />
        </div>
        
      </Link>
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{person.title.rendered}</h5>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: person.excerpt.rendered }}
        ></div>
        <p className="card-text">
          <small className="text-muted">{person.acf.role}</small><br />
          <small className="">{person.acf.dpt__dir}</small>
        </p>
        <Link href={`/people/${person.slug}`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
    </div>
  );
}