import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import appointmentBg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Appointment = ({ date, setDate }) => {


    return (
        <div style={
            {
                background: `url(${appointmentBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                backgroundPosition: 'center'
            }
        }>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-36">
                    <img src={chair} className="rounded-lg shadow-2xl " width={550} />
                    <div>
                        {/* <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button> */}
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;