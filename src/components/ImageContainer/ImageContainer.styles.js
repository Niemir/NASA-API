import styled from 'styled-components';
import Zoom from '../../assets/zoom.svg';
import breakpoints from '../../global/breakpoints';
const { SMALL } = breakpoints;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  a {
    pointer-events: none;
    display: block;
    width: 100%;
  }
  a.with-img {
    pointer-events: all;
  }
  img {
    width: 100%;
  }
`;
export const Image = styled.div`
  padding-top: 56.25%;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${SMALL}) {
    padding-top: 100%;
    margin: 0 auto;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &::before {
    content: '';
    width: 50px;
    height: 50px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${Zoom});
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20%);
    opacity: 0;
    z-index: 2;
    transition: 0.2s 0.1s ease-out;
  }
  .with-img &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-content: center;
    justify-content: center;
    opacity: 0;
    transition: 0.2s ease-out;
  }
  .with-img &:hover::before {
    transform: translate(-50%, -50%);
  }
  .with-img &:hover::after,
  .with-img &:hover::before {
    opacity: 1;
  }
`;
