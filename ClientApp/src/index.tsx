import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';

import { RootReducer } from './reducers/RootReducer';
import { IRegStoreState } from './store/RegStoreState';

const baseUrl: string =
  document.getElementsByTagName('base')[0].getAttribute('href') || '';

const store: Store<IRegStoreState> = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
