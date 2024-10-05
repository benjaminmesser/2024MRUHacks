import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import QuestManager from './QuestManager';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <QuestManager selectedDate={selectedDate} />
    </div>
  );
};

export default CalendarComponent;
