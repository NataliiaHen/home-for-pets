import './index.scss';
import React from 'react';
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
// import { store } from './app/store';
import { Provider } from 'react-redux';
import { Root } from './Root';
import { PageSizeProvider } from './storage/PageSizeContext';
// import { ModalProvider } from './storage/ModalContext';
import { NotificationProvider } from './storage/NotificationContext';
import { FavProvider } from './storage/FavContext';
import { store } from './app/store';

{ /* <React.StrictMode>
  </React.StrictMode>, */ }

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NotificationProvider>
        <PageSizeProvider>
          <FavProvider>
            <Root />
          </FavProvider>
        </PageSizeProvider>
      </NotificationProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
