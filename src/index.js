import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const startDate = new Date(2019, 8, 25);
const endDate = new Date(2019, 10, 9);
const month = new Date(2019, 8);
const fromMonth = new Date(2019, 8);
const toMonth = new Date(2019, 10);

ReactDOM.render(
        <App 
            startDate={startDate} 
            endDate={endDate} 
            month={month} 
            fromMonth={fromMonth} 
            toMonth={toMonth} 
        />,
        document.getElementById('root')
     );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
