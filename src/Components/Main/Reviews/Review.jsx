import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

                <p>{review.review}</p>
                <div className='flex  items-center'>
                    <div className='my-4'>
                        <img src={review.img} alt="" className='rounded-full outline outline-emerald-300' width={64} />
                    </div>
                    <div className='pl-10'>
                        <h2 className="card-title">
                            {review.name}
                        </h2>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;