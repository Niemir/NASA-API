import styled from 'styled-components';
import breakpoints from '../../global/breakpoints';
const { SMALL, MEDIUM } = breakpoints;
export const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;
export const Row = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  @media screen and (min-width: ${SMALL}) {
    margin-top: 3rem;
  }
  @media screen and (min-width: ${MEDIUM}) {
    margin-top: 4rem;
  }
  > div {
    width: 100%;
    margin-bottom: 10px;
    @media screen and (min-width: ${SMALL}) {
      width: calc(50% - 10px);
      margin: 0 5px 10px;
    }
  }
`;
export const Input = styled.div`
  .mapboxgl-ctrl-geocoder {
    margin: 0 auto !important;
    width: 50%;
    z-index: 100;
    input {
      font-size: 12px;
    }
  }
`;
