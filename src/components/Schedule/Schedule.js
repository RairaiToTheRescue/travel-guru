import React from 'react';
import { Link } from 'react-router-dom';
import './Schedule.css';

const Schedule = () => {
    return (
        <div className="schedule">
            <h2>SCHEDULE</h2>
            <input placeholder="ORIGIN" type="form"/>
            <br/>
            <br/>
            <input placeholder="DESTINATION" type="form"/>
            <br/>
            <br/>
            <input className='time-date' type="date" id=""/>
            <br/>
            <Link to="/login">
            <button className="schedule-btn">GO</button>
            </Link>           
        </div>
    );
};

export default Schedule;