import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import saga from './saga'
import App from './page/App';
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware(saga)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
)

const store = createStore(
    reducer,
    enhancer
)

sagaMiddleware.run(saga)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
