import React, { useState } from 'react';
import './Main.css'; // Assuming you'll use an external CSS file
import QuestManager from './QuestManager';
import CalendarComponent from './Calender';
import Rewards from './Rewards';

const Main = () => {
  //props = props.rewardData, props.questData
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date

  const handleDateChange = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]); // Update the selected date
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column" style={{ paddingTop: '50px' }}>
      <div className="row flex-grow-1">
        {/* QuestManager column */}
        <div className="col-md-3 d-flex">
          <div className="p-3 border bg-light w-100">
            <QuestManager selectedDate={selectedDate} questData={props.questData}/>
          </div>
        </div>
        {/* CalendarComponent column */}
        <div className="col-md-6 d-flex">
          <div className="p-3 border bg-light w-100">
            <CalendarComponent onDateChange={handleDateChange} />
          </div>
        </div>
        {/* Rewards column */}
        <div className="col-md-3 d-flex">
          <div className="p-3 border bg-light w-100">
            <Rewards rewardData={props.rewardData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
