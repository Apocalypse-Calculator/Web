import React from 'react';
import PropTypes from 'prop-types';

export default function CalculatorPageWrapper({ selectedItem, goHome, children }) {

  return (
    <div>
      <h1>{selectedItem}</h1>
      {children}
      <button onClick={goHome}>home</button>
    </div>
  );
};

CalculatorPageWrapper.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  goHome: PropTypes.func.isRequired,
};
