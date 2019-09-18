import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

import App from './components/App';
import rootReducer from './reducers';
import { setStartDate, setEndDate } from './actions';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
                rootReducer,
                composeEnhancers(applyMiddleware(
                thunkMiddleware, // lets us dispatch() functions
                )),
            );

window.setStartDateAPI = (startDate) => store.dispatch(setStartDate(startDate));
window.setEndDateAPI = (endDate) => store.dispatch(setEndDate(endDate));
window.getSelectedDaysAPI = () => store.getState().selectedDays

render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
 