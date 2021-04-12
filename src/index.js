import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import history from './components/utilities/History';
import ErrorBoundary from './components/utilities/ErrorBoundary';
import { Auth0Provider } from '@auth0/auth0-react';
import { Router } from 'react-router-dom';

const onRedirectCallback = (appState) => {
  history.replace(appState?.returnTo || window.location.pathname);
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_auth0_domain}
      clientId={process.env.REACT_APP_auth0_clientID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
