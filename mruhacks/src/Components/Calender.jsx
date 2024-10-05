import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Call the callback function with the selected date
  };

  return (
    <div>
      <h3>Calender</h3>
      <Calendar onChange={handleDateChange} value={selectedDate} />
    </div>
  );
};

export default CalendarComponent;
