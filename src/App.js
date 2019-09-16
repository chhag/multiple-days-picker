import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './App.css';


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
    this.state = {
      selectedDays: [],
      allDaysSelected: false
    };
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

  handleButtonClick() {
    if (this.state.allDaysSelected) {
      this.setState({ selectedDays: [], allDaysSelected: false});
      return;
    }
    let dateArray = [];
    let currentDate = new Date(this.props.startDate);
    while (currentDate <= this.props.endDate) {
        dateArray.push(new Date (currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    this.setState({ selectedDays: dateArray, allDaysSelected: true});
  }
  
  render() {
    // console.log('Selected Days: ', this.state.selectedDays);
    return (
      <div>
        <DayPicker
          month={this.props.month}
          fromMonth={this.props.fromMonth}
          toMonth={this.props.toMonth}
          disabledDays={[
            {
              before: this.props.startDate,
              after: this.props.endDate
            },
          ]}
          modifiersStyles={modifiersStyles}
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
        />
        <button 
          style={{display: 'flex', marginLeft: '2em'}}
          onClick={this.handleButtonClick}
        >
          {this.state.allDaysSelected && `Unselect All`}
          {!this.state.allDaysSelected && `Select All`}
        </button>
      </div>
    );
  }
}
