import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import App from './App';

import { RootReducer } from './reducers/RootReducer';
import { Store, createStore } from 'redux'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { RegStoreState } from './store/RegStoreState';

const baseUrl: string = document.getElementsByTagName('base')[0].getAttribute('href') || '';
const rootElement = document.getElementById('root');

const store: Store<RegStoreState> = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
    <App />
    </BrowserRouter>
  </Provider>,
  rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
