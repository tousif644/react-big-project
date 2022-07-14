import React from 'react';
import InfoCard from './InfoCard';
import clock from "./../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard title='Opening Hours' img={clock} bgColor="bg-gradient-to-r from-primary to-secondary" description="Lorem Ipsum is simply dummy text of the pri"></InfoCard>
            <InfoCard img={marker} bgColor="bg-accent" title='Visit our location' description="Brooklyn, NY 10036, United States"></InfoCard>
            <InfoCard img={phone} title="Contact us now" bgColor='bg-gradient-to-r from-primary to-secondary' description="+000 123 456789"></InfoCard>
        </div>
    );
};

export default Info;