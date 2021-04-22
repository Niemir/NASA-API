import React from 'react';
import { StyledTitle, StyledSubtitle, Logo } from './Heading.styles';
import NasaLogo from '../../assets/nasa.svg';
const Heading = () => {
  return (
    <>
      <Logo>
        <img src={NasaLogo} />
      </Logo>

      <StyledTitle>Satelife</StyledTitle>
      <StyledSubtitle>
        Enter any location and see what <br /> it looks like from the satellite
      </StyledSubtitle>
    </>
  );
};

export default Heading;
