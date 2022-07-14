import React from 'react';
import doctor from "../../../assets/images/doctor.png"
import appointment from "../../../assets/images/appointment.png";
const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center my-24' style={{
            background: `url(${appointment})`
        }}>
            <div className='hidden lg:block flex-1'>
                <img className='mt-[-150px] ' src={doctor} alt="" />
            </div>

            <div className='flex-1'>
                <h3 className='text-xl text-secondary '>Appointment</h3>
                <h2 className='text-3xl py-4 text-white'>Make an Appointment Today</h2>
                <p className='text-white py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, dolore enim adipisci quibusdam id architecto eveniet perferendis inventore molestias cum libero ipsa nam error asperiores. Consequatur corrupti impedit eum dolorem consectetur voluptates veniam reprehenderit, unde modi, cum exercitationem ullam labore.</p>
                <button className="bg-gradient-to-r from-primary to-secondary btn btn-primary uppercase text-white border-0 ">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;