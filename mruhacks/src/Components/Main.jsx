import React from 'react';
import './Main.css'; // Assuming you'll use an external CSS file
import TaskManager from './TaskManager';
import CalendarComponent from './Calender';
import Rewards from './Rewards';

const Main = () => {
return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <div className="p-3 border bg-light">
                    <TaskManager />
                </div>
            </div>
            <div className="col-md-6">
                <div className="p-3 border bg-light">
                    <CalendarComponent />
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
