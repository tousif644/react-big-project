import React, { useState } from 'react';
import Appointment from '../Appointment/Appointment';
import AvailableAppointment from '../Appointment/AvailableAppointment';

const AppointmentMain = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Appointment date={date} setDate = {setDate}></Appointment>
            <AvailableAppointment date = {date} setDate={setDate}></AvailableAppointment>
        </div>
    );
};

export default AppointmentMain;