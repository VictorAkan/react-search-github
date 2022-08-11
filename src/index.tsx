import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GithubProvider } from './context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Auth0Provider
      domain="dev-ahf-15uc.us.auth0.com"
      clientId="UMJwZiWSSPYyhUw1LXbFYiwC8XOpEe0M"
      cacheLocation='localstorage'
      redirectUri={window.location.origin}
      >
        <BrowserRouter>
          <GithubProvider>
            <App />
          </GithubProvider>
        </BrowserRouter>
      </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
