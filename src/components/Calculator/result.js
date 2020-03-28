import React from 'react';
import PropTypes from 'prop-types';


export default function Result({ item, results, goHome }) {
  return (
    <div className='results-container'>
      <h1>{item}</h1>
      <p>{results}</p>
      <button onClick={goHome}>back</button>
    </div>
  )
}

Result.propTypes = {
  item: PropTypes.string.isRequired,
  results: PropTypes.string.isRequired,
  goHome: PropTypes.func.isRequired,
};
