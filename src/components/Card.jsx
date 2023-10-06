import React from 'react';

export default function Card({ place }) {
  console.log(place);
  return (
    <>
      <div className='card'>
        <div className='card--img'>
          <img src={place.imageUrl} />
        </div>
        <div className='card--content'>
          <div className='card--info'>
            <p>⛳️ </p>
            <p className='card--info-place'>{place.location}</p>
            <a href={place.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h2 className='card--title'>{place.title}</h2>
          <p className='card--date'>
            {place.startDate} - {place.endDate}
          </p>
          <p className='card--description'>{place.description}</p>
        </div>
      </div>
    </>
  );
}
