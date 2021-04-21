import {
  Grid,
  Paper,
  Container,
  Typography,
  FormControl,
  Input,
  InputLabel,
} from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const nasaToken = 'D7ghU9CQ6geQpqoAbw1tIPBO0R1v8VPhlgq0q2gC';

mapboxgl.accessToken =
  'pk.eyJ1IjoibmllbWlyIiwiYSI6ImNrbnJ0c3UwNzA2dG8ycm83NW5sdjd6eTQifQ.X7G46SsLiU90RrDMmwXSHQ';
var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  types: 'country,region,place,postcode,locality,neighborhood',
});

const SearchInput = () => {
  const [lang, setLang] = useState(null);
  const [lat, setLat] = useState(null);
  const [img, setImg] = useState(null);

  const initialRender = useRef(true);
  useEffect(() => {
    geocoder.addTo('#geocoder');
    // Get the geocoder results container.
    var results = document.getElementById('result');

    // Add geocoder result to container.
    geocoder.on('result', (e) => {
      // results.innerText = JSON.stringify(e.result, null, 2);
      // console.log(e.center[0]);
      setLang(e.result.center[0]);
      setLat(e.result.center[1]);
      // setLat()
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
        `https://api.nasa.gov/planetary/earth/imagery?lon=${lang}&dim=0.1&lat=${lat}&api_key=${nasaToken}`
      );
    }

    axios
      .get(
        `https://api.nasa.gov/planetary/earth/imagery?lon=${lang}&dim=0.1&lat=${lat}&api_key=${nasaToken}`
      )
      .then((response) => {
        console.log(response);
        // setImg();
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, [lang, lat]);

  return (
    <FormControl>
      <div id='geocoder'></div>
      <pre id='result'></pre>
      <div>
        {img ? <img width='600' height='400' src={img} alt='satelite' /> : null}
      </div>
    </FormControl>
  );
};
export default SearchInput;
