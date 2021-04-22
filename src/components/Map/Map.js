import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/layers.png';
import 'leaflet/dist/images/layers-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import Loader from '../Loader/Loader';

const StyledMap = styled.div`
  width: 100%;
  z-index: 0;
  .leaflet-container {
    width: 100%;
    height: 100px;
    padding-top: 56.25%;
    @media screen and (min-width: 768px) {
      padding-top: 100%;
    }
  }
`;

const Map = ({ lang, lat, img }) => {
  return (
    <StyledMap>
      {lang && lat && img ? (
        <MapContainer center={[lat, lang]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
        </MapContainer>
      ) : null}
    </StyledMap>
  );
};

export default Map;
