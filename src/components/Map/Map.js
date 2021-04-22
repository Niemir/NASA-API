import 'leaflet/dist/leaflet.css';
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import breakpoints from '../../global/breakpoints';
const { SMALL } = breakpoints;

const StyledMap = styled.div`
  width: 100%;
  z-index: 0;
  .leaflet-container {
    width: 100%;
    height: 100px;
    padding-top: 56.25%;
    @media screen and (min-width: ${SMALL}) {
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
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      ) : null}
    </StyledMap>
  );
};

export default Map;
