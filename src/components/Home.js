import React from 'react';
import Companies from '../containers/Companies';

const headingStyles = {
  textAlign: 'center',
  marginTop: 80,
  marginBottom: 80,
};

const Component = () => (
  <main>
    <h1 style={headingStyles}>What company are you looking for?</h1>
    <Companies />
  </main>
);

export default Component;
