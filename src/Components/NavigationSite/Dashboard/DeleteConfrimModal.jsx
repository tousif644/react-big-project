import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfrimModal = ({ deletingDoctor , refetch , setDeletingDoctor}) => {
    const { name , email} = deletingDoctor;
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctors/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor : ${name} deleted Successfully`);
                    refetch()
                    setDeletingDoctor(null)
                }
            })
    }
    return (
        <div>

            <input type="checkbox" id="delete-confirmation-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are your sure you want to delete ? {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} className='btn btn-error text-white'>Delete</button>

                        <label for="delete-confirmation-modal" class="btn btn-accent text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfrimModal;