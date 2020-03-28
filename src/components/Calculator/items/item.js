import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ item, onClick }) {
  return <h1 onClick={onClick}>{item}</h1>;
}

Item.propTypes = {
  item: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
