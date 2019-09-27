import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
        <App 
            ref={(MultiSelectCalendar) => {window.MultiSelectCalendar = MultiSelectCalendar}}
        />,
        document.getElementById('root')
     );

