import React, { useState, useEffect } from 'react';

const Places = ({ setLat, setLng }) => {
  const [places, setPlaces] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    getPlaces();
  }, [value]);

  const getPlaces = async () => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1Ijoia3Jpc2huYTY2NDYiLCJhIjoiY2xxeHFyOGl3MGRrZTJqbnIyNGVmNncxZiJ9.NEiTw-eEXa9FWmPhPngdtQ`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch places');
      }

      const data = await response.json();
      setPlaces(data.features);
    } catch (error) {
      console.error('Error fetching places:', error.message);
    }
  };

  const handleClick = (place) => {
    setLng(place.geometry.coordinates[0]);
    setLat(place.geometry.coordinates[1]);
  };

  return (
    <div>
      <section>
        <article>
          <div className='input'>
            <input
              className='px-4 py-2'
              placeholder='Enter pickUp'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type='text'
              name='place'
              id='place'
            />
          </div>
          <article>
            {places?.map((item) => (
              <div key={item.id} onClick={() => handleClick(item)} className='g-col-2 gap-2'>
                <h4 className='fs-5'>{item.text}</h4>
                <p className='fs-6'>{item.place_name}</p>
              </div>
            ))}
          </article>
        </article>
      </section>
    </div>
  );
};

export default Places;
