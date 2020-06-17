import React from 'react';
import { useParams } from 'react-router-dom';

const Component = () => {
  const { symbol } = useParams();

  return (
    <h1>
      Company with symbol
      {symbol}
    </h1>
  );
};

export default Component;
