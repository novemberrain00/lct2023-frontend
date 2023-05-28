import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {HashRouter} from 'react-router-dom';
import Router from './router/router';
import {store} from './store';
import {Provider} from 'react-redux';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </HashRouter>
  </React.StrictMode>
);
