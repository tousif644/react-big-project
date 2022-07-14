import React from 'react';
import dribble from "../../assets/images/dribbble_1.gif"
const NotFound = () => {
    return (
        <div className='mr-0 ml-auto'>
            <h1>Oops Not Found 404 </h1>
            <img src={dribble} alt="" />
        </div>
    );
};

export default NotFound;