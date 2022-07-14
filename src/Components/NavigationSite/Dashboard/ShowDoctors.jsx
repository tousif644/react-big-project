import React from 'react';
import { toast } from 'react-toastify';

const ShowDoctors = ({ doctors, index, refetch , setDeletingDoctor }) => {
    const { name, email, specialty, image } = doctors;
   
    return (

        <tr>
            <th>{index + 1}</th>
            <th><img className='rounded' src={image} alt="" width={30} /></th>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>{email}</td>
            <td>
                <label onClick={setDeletingDoctor(doctors)} for="delete-confirmation-modal" class="btn btn-xs btn-error text-white mx-2">Delete</label>
            </td>
        </tr>
    );
};

export default ShowDoctors;