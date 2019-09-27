import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { tokenizeDate, jsDate } from './utils/dates';


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

export default class MultiSelectDayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    let today = new Date();
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1);
    let yyyy = today.getFullYear();
    today.setMonth(today.getMonth()+3); // 3 months from today's date
    let dd1 = String(today.getDate());
    let mm1 = String(today.getMonth() + 1); 
    let yyyy1 = today.getFullYear();
    this.state = {
      selectedDays: [],
      allDaysSelected: false,
      startDate:  `${mm}/${dd}/${yyyy}`, //Pega format for dates
      endDate: `${mm1}/${dd1}/${yyyy1}`,
    };
  }

  getSelectedDays = () => {
    return this.state.selectedDays;
  }

  setStartDate = (startDate) => {
    let newStartDate = jsDate(tokenizeDate(startDate));
    let selectedDays = this.state.selectedDays.filter((day) => 
        DateUtils.isDayBefore(newStartDate, day) ||
        DateUtils.isSameDay(newStartDate, day)
    );
     ;
    this.setState({ startDate, selectedDays });
  }
  
  setEndDate = (endDate) => {
    let newEndDate = jsDate(tokenizeDate(endDate));
    let selectedDays = this.state.selectedDays.filter((day) => 
        DateUtils.isDayAfter(newEndDate, day) ||
        DateUtils.isSameDay(newEndDate, day)
    );
    this.setState({ endDate, selectedDays });
  }

  handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      return;
    }
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  }

  handleButtonClick(event) {
    event.preventDefault();
    if (this.state.allDaysSelected) {
      this.setState({ selectedDays: [], allDaysSelected: false});
      return;
    }
    let dateArray = [];
    let currentDate = jsDate(tokenizeDate(this.state.startDate));
    const endDate = jsDate(tokenizeDate(this.state.endDate));

    while (currentDate <= endDate) {
        dateArray.push(new Date (currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    this.setState({ selectedDays: dateArray, allDaysSelected: true});
  }
  
  render() {
    const {month: startDate_month, day: startDate_day, year: startDate_year } = tokenizeDate(this.state.startDate);
    const {month: endDate_month, day: endDate_day, year: endDate_year } = tokenizeDate(this.state.endDate);
    const startDate = new Date(startDate_year, startDate_month, startDate_day);
    const month = new Date(startDate_year, startDate_month);
    const fromMonth = new Date(startDate_year, startDate_month);
    const endDate = new Date(endDate_year, endDate_month, endDate_day);
    const toMonth = new Date(endDate_year, endDate_month);    
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
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
        />
        <button 
          style={{display: 'flex', marginLeft: '2em'}}
          onClick={(event) => this.handleButtonClick(event)}
        >
          {this.state.allDaysSelected && `Unselect All`}
          {!this.state.allDaysSelected && `Select All`}
        </button>
      </div>
    );
  }
}
