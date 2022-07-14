import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51LHV3jIBnoUPe5R3c7bnaMMN4UWyxDH5oYhopuRxya3lG8RxGDWmpuXPTPagtIr0tB4mq6CHJPaBCYggagzHpxPZ00Iqqx9bvb');
const Payment = () => { 
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: bookingData, isLoading } = useQuery('bookingData', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl '>Please Pay for : <span className='text-accent'>{id}</span></h2>

            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    {/* <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                    <div class="card flex-shrink-0  shadow-xl bg-base-100">
                        <div class="card-body">
                            <div class="card  bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 className='text-xl text-purple-400'>Hello , {bookingData.patientName}</h2>
                                    <h2 class="card-title"> Pay for : <span className='text-orange-500'>{bookingData.treatmentName}</span></h2>
                                    <p>We will see you on <span className='text-orange-300'>{bookingData.date} at {bookingData.slot}</span></p>
                                    <p>Please Pay : <span className='text-red-400'>${bookingData.price}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm bookingData = {bookingData} />
                            </Elements>
                        </div>
                    </div>
                    {/* Gateway images */}

                </div>
            </div>
        </div>
    );
};

export default Payment;