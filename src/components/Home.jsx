import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './Home.css';
import Places from './Places';
import SearchBar from './SearchBar';

const libraries = ['places'];
const mapContainerStyle = {
  width: '1200px',
  height: '600px',
};

const Home = () => {
  const logout = () => {
    localStorage.clear();
  }
  const [userLocation, setUserLocation] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB9olf9UScOGxqnfOHN2hdAZBs8isl7X2c',
    libraries,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  const handlePlaceSelected = (place) => {
    setSearchedLocation({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }


  
  return (
    <>
      <div id="root">
        <div className="uwa-capture" style={{ display: "inline" }}>
          <div id="wrapper">
            <div className="_css-dqxzrQ">
              <div className="_css-hDnAKM">
                <span className="_css-vBAaC">
                  <div className="_css-fakebm">
                    <div className="_css-llANtD">
                      <header className="_css-kxLvak">
                        <nav>
                          <ul className="_css-jwtMDx">
                            <li className="_css-dKApdt">
                              <a data-baseweb="button" data-buttonkey="//ride" href="//ride" className="_css-crytCy">NexWave</a>
                            </li>
                            <li className="_css-dKApdt">
                              <a data-baseweb="button" data-buttonkey="//ride" href="//ride" className="_css-hMztfJ">
                                <div className="_css-hdjfHk">
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <title>Car front</title>
                                    <path d="m20.9 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.9 0-1.6.5-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2.1ZM5 14h4v2H5v-2Zm10 2v-2h4v2h-4ZM7.1 6h9.7l1.3 4H5.8l1.3-4Z" fill="currentColor"></path>
                                  </svg>
                                </div>Ride
                              </a>
                            </li>
                            <li className="_css-dKApdt">
                              <a data-baseweb="button" data-buttonkey="//connect/pickup" href="//connect/pickup" className="_css-iVmyvQ">
                                <div className="_css-hdjfHk">
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <title>Box isometric package</title>
                                    <g fill="currentColor">
                                      <path d="M21.9 6.4 12 1.5 8.1 3.4l9.9 5 3.9-2ZM2.1 6.4l3.8-1.9 9.9 5-3.8 1.9-9.9-5ZM11 23 1 18V8.1l10 5V23ZM19 13.8v-3.7l4-2V18l-10 5v-9.9l4-2v3.7l2-1Z"></path>
                                    </g>
                                  </svg>
                                </div>Package
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <div className="_css-ckOzdo">
                          <div className="_css-mqlUy"></div>
                          <li className="_css-dKApdt">
                            <a data-baseweb="button" data-buttonkey="https://riders.uber.com/trips" href="https://riders.uber.com/trips" className="_css-jpkatb">
                              <div className="_css-hdjfHk">
                                <button
                                  data-baseweb="button"
                                  aria-label="Sign up to ride, drive, and get delivery"
                                  className="css-ljsRJZ"
                                  onClick={logout}
                                >
                                  <Link to="/" >Log Out</Link>
                                </button>
                              </div>
                            </a>
                          </li>

                        </div>
                      </header>
                    </div>
                  </div>
                </span>
                <main id=" " className='_css-jbpKMl'>
                  <div id="" class="_css-egXzQg">

                    <div className='container1'>
                      <h1 class="_css-hXFNgB">Get a ride</h1>
                      <SearchBar onPlaceSelected={handlePlaceSelected} />
              <button>Search</button>
                    </div>


                    <div>
                    <GoogleMap
  mapContainerStyle={mapContainerStyle}
  zoom={userLocation ? 15 : 10}
  center={userLocation || { lat: 7.2905715, lng: 80.6337262 }}
>
  {userLocation && <Marker position={userLocation} />}
  {searchedLocation && <Marker position={searchedLocation} />}
</GoogleMap>

    </div>

                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;