import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// Provider (react-redux library): makes Redux store available to any nested components - generally placed in top level (App)
  // if React-Router also used - it also wraps around BrowserRouter
// createStore (redux): creates Redux store that holds complete state tree of app - one per app
// composeWithDevTools: pass as second arg of createStore to have access to devtools - same as window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() from other tut