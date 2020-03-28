import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Items from './items/itemsIndex';
import CalculateButton from './calculateButton';
import Inputs from '../Inputs/inputs';
import Results from './result';

// pages
const [HOME, INPUT, RESULTS] = ['HOME', 'INPUT', 'RESULTS'];

export default function Calculator() {
  const [page, setPage] = useState(HOME);

  const [selectedItem, setItem] = useState('');
  useEffect(() => {
    if (selectedItem) {
      setPage(INPUT);
    }
  }, [selectedItem])

  const [results, setResults] = useState('');
  useEffect(() => {
    if (results) {
      setPage(RESULTS);
    }
  }, [results])

  const goHome = () => {
    setPage(HOME);
    setResults('');
    setItem('');
  };


  const pageMap = {
    [HOME]: <Items goHome={goHome} onClick={item => { setItem(item); }} />,
    [INPUT]: <Inputs item={selectedItem} goHome={goHome} onSubmit={setResults} />,
    [RESULTS]: <Results item={selectedItem} results={results} goHome={goHome} />,
  }

  return (
    <div className='calculator'>
      {pageMap[page]}
    </div>
  );
}
