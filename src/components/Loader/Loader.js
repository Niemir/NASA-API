import React from 'react';
import { Spinner } from './Loader.styles';

const Loader = () => (
  <Spinner className="loader">
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </Spinner>
);
export default Loader;
