import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from 'reducers';

const store = applyMiddleware(ReduxPromise)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);