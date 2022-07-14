import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
const CheckoutForm = ({ bookingData }) => {
    const stripe = useStripe();
    const element = useElements();
    const [transiction, setTransiction] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState('');
    const { _id, price, patientName, patientEmail } = bookingData;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)

                }
            })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !element) {
            return;
        }
        //getting card information
        const card = element.getElement(CardElement);
        console.log(card);

        // defining Card
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (card == null) {
            return;
        }

        if (error) {
            toast.error(error?.message || "");
            // toast.error(error.type);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);
        // confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail
                    },
                },
            },

        );
        if (intentError) {
            toast.error(intentError?.message);
            setProcessing(false)
        } else {
            setSuccess("Congratulation Payment done !");
            toast.success(success.toString());
            console.log(paymentIntent);
            setTransiction(paymentIntent.id);

            // store payment data
            const paymentDetails = {
                appointment: _id,
                transictionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentDetails)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data);
                })
        }

    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '50px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-success text-white my-4' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {success && <p>Your transiction id : <span className='text-purple-400 text-xl'>{transiction}</span></p>}
        </>
    );
};

export default CheckoutForm;

/**
 *** PAYMENT STEPS ***
 * 
 *
 * 
 * 
 * Visit stripe -> stripe.com/stripe-js/react
 * tarpor okhane giye npm install stripe js install kore nite hobe
 * create an Account on stripe website 
 * get published key on stripe
 * 
 * 
 * *** Code ***
 * created an Element Wrapper using publishbale keys
 * created checkoutForm using CardElement -> {cardElement , stripe, useElement}
 *  checking card valid or not or card found or not
 * Showing card error or display error by toast 
 * installing stripe on server
 * 
 * 
 * 
 * *** Server Code ***
 * get client secret from backend via payment Intent post api
 * require stripe
 * / store client secret by a payment intent api
 * 
 * 
 */