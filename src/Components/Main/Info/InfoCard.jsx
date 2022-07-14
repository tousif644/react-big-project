import React from 'react';

const InfoCard = ({ img, bgColor, title, description }) => {
    return (
        <div className='p-2'>
            <div className={`card card-side ${bgColor} shadow-xl p-4 w-auto`}>
                <figure><img src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{title}</h2>
                    <p className='text-white'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;