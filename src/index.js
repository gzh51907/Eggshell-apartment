import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root'));


serviceWorker.unregister();
