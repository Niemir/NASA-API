import styled from 'styled-components';
import breakpoints from '../../global/breakpoints';

const { MEDIUM } = breakpoints;
export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 3.2rem;
  margin: 1rem 0;
  color: white;
  font-family: 'Zen Dots', 'Roboto', sans-serif;
  text-transform: uppercase;
  @media screen and (min-width: ${MEDIUM}) {
    font-size: 4.8rem;
  }
`;
export const StyledSubtitle = styled.p`
  text-align: center;
  font-size: 1.8rem;
  color: white;
  line-height: 1.5;
  margin-bottom: 2rem;
  @media screen and (min-width: ${MEDIUM}) {
    font-size: 2rem;
  }
`;
export const Logo = styled.div`
  img {
    display: block;
    margin: 0 auto;
  }
`;
