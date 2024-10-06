import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '/src/Components/Calender.css';

const CalendarComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); 
  };

  return (
    <div>
      <h3>Calendar</h3>
      <div className="calendar-container">
        <Calendar minDetail="month" onChange={handleDateChange} value={selectedDate} />
      </div>
    </div>
  );
};

export default CalendarComponent;
