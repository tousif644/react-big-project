import React from 'react';
import appointmentBg from "../../../assets/images/appointment.png";
const ContactUs = () => {
    return (
        <div>
            <section style={{
                background: `url(${appointmentBg})`
            }}>
                <div className='py-12'>
                    <h1 className='text-center font-bold text-secondary '>Contact Us</h1>
                    <h1 className='text-white text-3xl text-center'>Stay connected with us</h1>
                </div>

                {/* Form */}
                <form >
                    <div className='grid grid-cols-1 justify-items-center'>
                        <div>
                            <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-md my-2" />

                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-md mb-2" />

                            <div>
                                <textarea className='text-area w-full max-w-md p-2 rounded' placeholder='Your Message' rows={6} />


                            </div>

                        </div>
                        <button className="bg-gradient-to-r from-primary to-secondary btn btn-primary capitalize text-white border-0 my-3 mb-3">Submit</button>
                    </div>
                </form>
                {/* Form */}
            </section>

        </div>
    );
};

export default ContactUs;