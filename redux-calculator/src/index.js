import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CalculatorContainer from './containers/CalculatorContainer';
import reducer from './reducers'

import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>,
  document.getElementById('root')
);
