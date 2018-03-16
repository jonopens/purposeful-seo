import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer.js'

import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store={ store }>
		<Router>
			<App />
		</Router>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
