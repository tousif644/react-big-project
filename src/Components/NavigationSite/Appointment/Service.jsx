import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto text-secondary">{name} </h2>
                    <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : "space"} available</p>
                    <p className='text-center'>
                        {
                            slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-slate-300'>No slot Available</span>
                        }
                    </p>
                    <p className='text-center my-2'>Price : <span className='text-secondary'>{price}</span></p>
                    <div className="card-actions justify-center">
                        <label htmlFor="booking-modal" className="bg-gradient-to-r from-primary to-secondary btn btn-primary capitalize text-white border-0" disabled={slots.length === 0} onClick={() => setTreatment(service)}>Book Appointment</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;