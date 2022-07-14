import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';

const AvailableAppointment = ({ date, setDate }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, "PP");
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res => res.json()).then(data => setServices(data))
    // }, [formattedDate])

    const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) { return <Loading></Loading> };
    let fetchError;
    if (error) {
        fetchError = error;
    }
    return (
        <div>
            <h1 className='text-xl text-center text-secondary my-4'>Available Appointments on {format(date, "PP")}</h1>
            {/* <p className='text-4xl text-center text-red-500 my-4'>{fetchError}</p> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 my-5'>
                {
                    services?.map(service => <Service key={service._id} service={service}
                        setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal refetch={refetch} setTreatment={setTreatment} treatment={treatment} date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;