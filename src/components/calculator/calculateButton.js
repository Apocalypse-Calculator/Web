import React from 'react';
import PropTypes from 'prop-types';

export default function CalculateButton({ onClick }) {
  return <button onClick={onClick}>Calculate</button>;
}

CalculateButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
