import React from 'react';
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from './Review';
const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: "Clerk Smith",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            location : "Amsterdam"
        },
        {
            _id: 2,
            name: "Eleanor Ella",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            location:"New York"
        },
        {
            _id: 3,
            name: "Samantha Elizabeth",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            location : 'California'
        }
    ]
    return (
        <div >
            <div className='flex px-12 justify-between'>
                <div>
                    <h1 className='font-bold text-secondary'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>

                <div>
                    <img src={quote} alt="" width={192} />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-10'>
                {
                    reviews.map(review => <Review review={review} key={review._id}></Review>)
                }
            </div>
        </div >
    );
};

export default Reviews;