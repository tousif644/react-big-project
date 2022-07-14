import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment,refetch }) => {
    const { _id, name, slots, price } = treatment;


    const formattedDate = format(date, "PP");
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value;
            const bookingData = {
                treatmentId: _id,
                treatmentName: name,
                date: formattedDate,
                slot,
                patientName: user.displayName,
                patientEmail: user.email,
                phone,
                price : price

            }
        console.log(bookingData);
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                } else {
                    toast.error(`Already have an appointment  on , ${data.booking?.date} at ${data.booking?.slot}`)

                }
                refetch();
                setTreatment(null);
            })
    }



    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">Booking for : <span className='text-secondary'>{name}</span></h3>
                    <form onSubmit={handleBooking}>
                        <div>
                            <input type="text" disabled value={`${format(date, "PP")}`} className="input input-bordered input-md w-full  my-2" />

                            {/* <input type="text" value={`${slots[0]}`} className="input input-bordered input-md w-full  my-2" /> */}
                            <select name="slot" className="select select-bordered w-full">
                                {slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}

                                <option disabled></option>
                            </select>
                        </div>

                        <div>
                        <input type="text" placeholder="Full Name" className="input input-bordered input-md w-full  my-2" name="name" disabled value= {`Price : ${price}`} />
                            <input type="text" placeholder="Full Name" className="input input-bordered input-md w-full  my-2" name="name" disabled value={`${user?.displayName || ''}`} />

                            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-md w-full  my-2" />
                            <input type="text" placeholder="Email" className="input input-bordered input-md w-full  my-2" value={`${user?.email || ''}`} disabled />
                        </div>
                        <button className='btn btn-accent w-full'>Submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;