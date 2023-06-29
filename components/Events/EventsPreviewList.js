import React from 'react'
import EventsPreviewItem from './EventsPreviewItem';

function EventsPreviewList({events}) {

    const renderedEvents = events.map((event) => {
      const featuredMedia = event['_embedded']['wp:featuredmedia']?.[0] || null;
        return <EventsPreviewItem event={event} 
          featuredMedia={featuredMedia} 
          key={event.id} 
          />;
      });
      
  return (
    <div>
        {renderedEvents}
    </div>
  )
}

export default EventsPreviewList