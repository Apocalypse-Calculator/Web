import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';

const ITEMS = ['toilet paper', 'hand sanny'];

export default function Items({ onClick }) {
 return (
   <div>
     {ITEMS.map(item => (
       <Item
        onClick={() => onClick(item)}
        key={item}
        item={item}
        />
      ))}
    </div>
  );
}

Items.propTypes = {
  onClick: PropTypes.func.isRequired,
};
