import React from 'react';
import Services from './Services';
import flouride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
const Service = () => {
    return (
        <div >
            <div className='my-12'>
                <h1 className='text-center text-secondary text-2xl'>OUR SERVICES</h1>
                <h1 className='text-center text-accent text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <Services img={flouride} title="Fluoride Treatment" description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></Services>
                <Services img={cavity} title="Cavity Filling" description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></Services>
                <Services img={whitening} title="Teeth Whitening" description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></Services>
            </div>
        </div>
    );
};

export default Service;