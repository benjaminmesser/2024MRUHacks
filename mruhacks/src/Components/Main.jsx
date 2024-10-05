import React, { useState } from 'react';
import './Main.css'; // Assuming you'll use an external CSS file
import QuestManager from './QuestManager';
import CalendarComponent from './Calender';
import Rewards from './Rewards';

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date

  const handleDateChange = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]); // Update the selected date
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="p-3 border bg-light">
            <QuestManager selectedDate={selectedDate} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border bg-light">
            <CalendarComponent onDateChange={handleDateChange} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-3 border bg-light">
            <Rewards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
