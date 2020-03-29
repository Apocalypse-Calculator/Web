import React from 'react';
import PropTypes from 'prop-types';


export default function Result({ results, goBack }) {
  const { amount, days } = results;
  return (
    <div className='results-container'>
      <p>{amount} bottles left</p>
      <p>{days} days left</p>
      <button onClick={goBack}>back</button>
    </div>
  )
}

Result.propTypes = {
  results: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired,
};
