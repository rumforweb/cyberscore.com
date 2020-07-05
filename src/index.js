import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n'
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './Сomponents/ScrollToTop/ScrollToTop'

const app = (
    <BrowserRouter>
        <ScrollToTop/>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();