import { DateUtils } from 'react-day-picker';
import { tokenizeDate } from '../utils/tokenizeDate';

const selectedDays = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DAY':
            return [...state, action.day];
        case 'REMOVE_DAY':
            let newState = [...state];
            newState.splice(action.selectedIndex, 1);
            return newState;
        case 'SELECT_ALL':
            let {month: startDate_month, day: startDate_day, year: startDate_year } = tokenizeDate(action.startDate);
            let {month: endDate_month, day: endDate_day, year: endDate_year } = tokenizeDate(action.endDate);
            let startDate = new Date(startDate_year, startDate_month, startDate_day);
            let endDate = new Date(endDate_year, endDate_month, endDate_day);
            let dateArray = [];
            while (startDate <= endDate) {
                dateArray.push(new Date (startDate));
                startDate.setDate(startDate.getDate() + 1);
            }
            return dateArray;
        case 'SET_START_DATE':
            let {month: newStartDate_month, day: newStartDate_day, year: newStartDate_year } = tokenizeDate(action.startDate);
            let newStartDate = new Date(newStartDate_year, newStartDate_month, newStartDate_day);
            let newSelectedStartDates = state.filter((day) => 
                DateUtils.isDayBefore(newStartDate, day) ||
                DateUtils.isSameDay(newStartDate, day)
            );
            return newSelectedStartDates;
        case 'SET_END_DATE':
            let {month: newEndDate_month, day: newEndDate_day, year: newEndDate_year } = tokenizeDate(action.endDate);
            let newEndDate = new Date(newEndDate_year, newEndDate_month, newEndDate_day);
            let newSelectedEndDates = state.filter((day) => 
                DateUtils.isDayAfter(newEndDate, day) ||
                DateUtils.isSameDay(newEndDate, day)
            );
            return newSelectedEndDates;                               
        case 'UNSELECT_ALL':
            return [];      
        default:
            return state;
    }
  }
  
export default selectedDays;
