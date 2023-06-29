import Link from 'next/link';
import Image from 'next/image';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import { getDate } from '../utils/utils';

export default function Post({ post, featuredMedia }) {

  const featuredMediaUrl = featuredMedia ? featuredMedia['media_details'].sizes.medium['source_url'] : '/images/fallback-posts.jpg';
  const altText = featuredMedia ? featuredMedia['alt_text'] : 'Fallback Image';

  return (
    <div className="card mb-3" >
      <div className="row g-0">
        
          <Link href={`/news/${post.slug}`} className='col-md-4 '>
            
              <Image
                src={featuredMediaUrl}
                width={400}
                height={200}  
                alt={altText}
                className='card-img fit-cover w-100 h-100 rounded-0 '
              />
            
            
          </Link>
        
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.title.rendered}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
            <p className="card-text">
              <small className="text-muted">On {getDate(post.modified)}</small>
            </p>
            <Link href={`/news/${post.slug}`} className="btn btn-primary">
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}