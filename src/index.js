import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import { createStore } from 'redux'
import siteReducer from './reducers/siteReducer.js'
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'

const store = createStore(siteReducer)


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
