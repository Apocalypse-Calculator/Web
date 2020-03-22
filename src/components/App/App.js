import React from 'react';

import StyledApp from './App.styled.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

function App() {
  return (
    <StyledApp>
      <Helmet>
        <title>Apocalypse Calculator</title>
        <meta title='description' value='Apocalypse Calculator' />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </StyledApp>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default App;
