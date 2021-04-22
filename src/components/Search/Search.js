import React, { useEffect, useState, useRef } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from 'mapbox-gl';
import { Wrapper, Input } from './Search.styles';
import { ImageContainer } from '../ImageContainer/ImageContainer';

const nasaToken = process.env.REACT_APP_NASA_KEY;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_KEY;

const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  types: 'country,region,place,postcode,locality,neighborhood',
  placeholder: 'Search',
});

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [lang, setLang] = useState(null);
  const [lat, setLat] = useState(null);
  const [img, setImg] = useState(null);
  const initialRender = useRef(true);

  useEffect(() => {
    geocoder.addTo('#geocoder');
    // Get the geocoder results container.
    const results = document.getElementById('result');
    // Add geocoder result to container.
    geocoder.on('result', (e) => {
      setLang(e.result.center[0]);
      setLat(e.result.center[1]);
      setLoading(true);
    });

    // Clear results container when search is cleared.
    geocoder.on('clear', () => {
      results.innerText = '';
    });
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setImg(
        `https://api.nasa.gov/planetary/earth/imagery?lon=${lang}&dim=0.07&lat=${lat}&api_key=${nasaToken}`
      );
    }
  }, [lang, lat]);

  return (
    <Wrapper>
      <Input id='geocoder'></Input>
      <pre id='result'></pre>
      <ImageContainer
        loading={loading}
        img={img}
        setImgLoaded={setImgLoaded}
        imgLoaded={imgLoaded}
        setLoading={setLoading}
      />
    </Wrapper>
  );
};
export default Search;
