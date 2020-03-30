import React, { useState, useEffect } from 'react';
import Items from './items/itemsIndex';
import Inputs from '../inputs/inputs';
import Results from './result';
import PageWrapper from '../calculatorPageWrapper';

// pages
const [HOME, INPUT, RESULTS] = ['HOME', 'INPUT', 'RESULTS'];

export default function Calculator() {
  const [page, setPage] = useState(HOME);

  const usePageEffect = (stateSlice, page) => useEffect(() => {
    if (stateSlice) {
      setPage(page);
    }
  }, [stateSlice]);

  const [selectedItem, setItem] = useState('');
  usePageEffect(selectedItem, INPUT);

  const [results, setResults] = useState(null);
  usePageEffect(results, RESULTS);

  const goHome = () => {
    setPage(HOME);
    setResults(null);
    setItem('');
  };

  const pageProps = { selectedItem, goHome };
  const pageMap = {
    [HOME]: () => <Items goHome={goHome} onClick={item => { setItem(item); }} />,
    [INPUT]: () => (
      <PageWrapper {...pageProps}>
        <Inputs onSubmit={setResults} />
      </PageWrapper>
    ),
    [RESULTS]: () => (
      <PageWrapper {...pageProps}>
        <Results results={results} goBack={() => setPage(INPUT)}/>
      </PageWrapper>
    ),
  }

  const Page = pageMap[page]

  return (
    <div>
      <Page />
    </div>
  );
}
