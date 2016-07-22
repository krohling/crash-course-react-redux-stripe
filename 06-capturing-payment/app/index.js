import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import ProductList from 'components/product-list';
import Checkout from 'components/checkout'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from 'reducers';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

const store = applyMiddleware(ReduxPromise)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ProductList} />
                <Route path="checkout" component={Checkout} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);