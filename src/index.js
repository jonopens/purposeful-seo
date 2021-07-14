import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import rootReducer from './reducers/root-reducer.js';

import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
