import React from 'react';
import { Wrapper, Image } from './ImageContainer.styles';
import Loader from '../Loader/Loader';

export const ImageContainer = ({ loading, img, setImgLoaded, imgLoaded, setLoading }) => {
  const loadImageHanlder = () => {
    setImgLoaded(true);
    setLoading(false);
  };
  return (
    <Wrapper>
      {loading ? <Loader /> : null}
      <a href={imgLoaded ? img : ''} className={imgLoaded && img ? 'with-img' : ''} target="_blank" rel="noreferrer">
        <Image>{img ? <img className="img" src={img} alt="" onLoad={() => loadImageHanlder()} /> : null}</Image>
      </a>
    </Wrapper>
  );
};
