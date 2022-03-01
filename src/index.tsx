import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './i18n';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize('G-GKGD78CS99');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);