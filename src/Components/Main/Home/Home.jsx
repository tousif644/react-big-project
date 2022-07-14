import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Reviews from '../Reviews/Reviews';
import Service from '../Services/Service';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Service></Service>
           <DentalCare></DentalCare>
           <MakeAppointment></MakeAppointment>
           <Reviews></Reviews>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;