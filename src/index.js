import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import { createStore, applyMiddleware } from 'redux'
import siteReducer from './reducers/siteReducer.js'
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(siteReducer, applyMiddleware(thunk))


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
