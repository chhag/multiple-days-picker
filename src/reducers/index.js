import { combineReducers } from 'redux';
import selectedDays from './selectedDays';
import allDaysSelected from './allDaysSelected'
import startDate from './startDate'
import endDate from './endDate'


export default combineReducers({
  selectedDays,
  allDaysSelected,
  startDate,
  endDate,
})
