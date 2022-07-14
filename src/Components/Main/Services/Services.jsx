import React from 'react';

const Services = ({ img, description, title }) => {
    return (
        <div className='my-10 p-4'>
            {/* service cards */}
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="service-image" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <p className='text-center'>{description}</p>
                </div>
            </div>
            {/* service cards */}
        </div>
    );
};

export default Services;