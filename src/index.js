import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { GlobalStyle } from './styles/global';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = configureStore({ reducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
