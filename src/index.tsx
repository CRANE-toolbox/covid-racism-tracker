import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Main } from './pages/MasterPage';
import { HashRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Main />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

WebFont.load({
  google: {
    families: ['Martel Sans:300,400,700', 'sans-serif', 'Playfair Display', 'serif', 'Montserrat:300,600,800', 'sans-serif', 'Roboto:400,600,800', 'sans-serif'],
  },
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
