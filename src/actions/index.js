import { DateUtils } from 'react-day-picker';

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate,
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate,
});

const clickDay = (day, { selected, disabled }) => {
    return (dispatch, getState) => {
        if (disabled)
            return;
        if (selected) {
            const { selectedDays } = getState();
            const selectedIndex = selectedDays.findIndex(selectedDay => DateUtils.isSameDay(selectedDay, day));
            dispatch({
                type: 'REMOVE_DAY',
                selectedIndex
            });            
        } else {
            dispatch({
                type: 'ADD_DAY',
                day
            }); 
        }
    };
}

const clickSelectButton = (event) => {
    return (dispatch, getState) => {
        const { allDaysSelected, startDate, endDate } = getState();
        if (allDaysSelected) {
            dispatch({
                type: 'UNSELECT_ALL',
            });  
        } else {
            dispatch({
                type: 'SELECT_ALL',
                startDate,
                endDate
            });  
        }
        event.preventDefault();
    };
}

export { setStartDate, setEndDate, clickDay, clickSelectButton };
