import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const main_app = require('./modules/application.js');
const app = main_app.module.application();
const data = {};
app.initialize(data);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
