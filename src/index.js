import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from 'react-router-scroll-top';
import {BrowserRouter as Router} from 'react-router-dom';
// import './i18next';

ReactDOM.render(
  <React.StrictMode>
        <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
