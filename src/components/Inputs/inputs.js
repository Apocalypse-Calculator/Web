import React from 'react';
import PropTypes from 'prop-types';
import CalculateButton from '../Calculator/calculateButton';


export default function Inputs({ item, onSubmit, goHome }) {
  return (
    <div>
      <h1>{item}</h1>
      <input />
      <br />
      <CalculateButton onClick={onSubmit}/>
      <br />
      <button onClick={goHome}>back</button>
    </div>
  )
}

Inputs.propTypes = {
  item: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired,
};
