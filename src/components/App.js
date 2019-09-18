import React from 'react';
import { connect } from 'react-redux'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import {clickDay, clickSelectButton} from '../actions';
import { tokenizeDate } from '../utils/tokenizeDate';


const modifiersStyles = {
  selected: {
    color: 'white',
    backgroundColor: '#24ad8b',
    borderRadius: 0,
    // fontWeight: 'bold'
  },
  outside: {
    backgroundColor: 'transparent'
  }
};

let MultiSelectDayPicker = (props) => {
    const {
      startDate, 
      endDate,
      month,
      fromMonth,
      toMonth,
      selectedDays,
      allDaysSelected,
      onDayClick,
      onSelectButtonClick,
    } = props;

    return (
      <div>
        <DayPicker
          month={month}
          fromMonth={fromMonth}
          toMonth={toMonth}
          disabledDays={[
            {
              before: startDate,
              after: endDate
            },
          ]}
          modifiersStyles={modifiersStyles}
          selectedDays={selectedDays}
          onDayClick={onDayClick}
        />
        <button 
          style={{display: 'flex', marginLeft: '2em'}}
          onClick={onSelectButtonClick}
        >
          {allDaysSelected && `Unselect All`}
          {!allDaysSelected && `Select All`}
        </button>
      </div>
    );
};



const mapStateToProps = (state) => {
  const {month: startDate_month, day: startDate_day, year: startDate_year } = tokenizeDate(state.startDate);
  const {month: endDate_month, day: endDate_day, year: endDate_year } = tokenizeDate(state.endDate);

  const startDate = new Date(startDate_year, startDate_month, startDate_day);
  const month = new Date(startDate_year, startDate_month);
  const fromMonth = new Date(startDate_year, startDate_month);
  const endDate = new Date(endDate_year, endDate_month, endDate_day);
  const toMonth = new Date(endDate_year, endDate_month);    

    return {
      startDate, 
      endDate,
      month,
      fromMonth,
      toMonth,
      selectedDays: state.selectedDays,
      allDaysSelected: state.allDaysSelected,
    };
}

const mapDispatchToProps = dispatch => ({
  onDayClick: (day, { selected, disabled }) => dispatch(clickDay(day, { selected, disabled })),
  onSelectButtonClick: (event) => dispatch(clickSelectButton(event))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiSelectDayPicker);
