import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // Import default styles

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar
        onChange={onChange}
        value={selectedDate}
      />
      <p>Selected Date: {selectedDate.toDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
