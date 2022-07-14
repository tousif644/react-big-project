import React from 'react';
import chair from "../../../assets/images/chair.png"
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className=" rounded-lg shadow-2xl" width={600} />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="bg-gradient-to-r from-primary to-secondary btn btn-primary uppercase text-white border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;