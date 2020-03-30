import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { calculate } from '../../api/apiUtil';
import CalculateButton from '../calculator/calculateButton';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    value,
    <input value={value} onChange={event => { setValue(event.target.value); }} />,
  ];
}

export default function Inputs({ onSubmit }) {
  const [daysLeft, daysInput] = useInput(0);
  const [currentAmount, amountInput] = useInput(0);
  const [numPeople, numPeopleInput] = useInput(0);

  const onClick = () => calculate({
    daysLeft,
    currentAmount,
    numPeople
  }).then(results => { onSubmit(results); });

  return (
    <div>
      <p>
        Days left: {daysInput}
      </p>
      <p>
        Current count: {amountInput}
      </p>
      <p>
        Number of  People: {numPeopleInput}
      </p>
      <CalculateButton onClick={onClick}/>
      <br />
    </div>
  )
}

Inputs.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
