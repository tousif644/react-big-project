import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import DeleteConfrimModal from './DeleteConfrimModal';
import ShowDoctors from './ShowDoctors';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl'>Total Doctors : {doctors.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => <ShowDoctors key={doctor._id} doctors={doctor} refetch={refetch} index={index} setDeletingDoctor={setDeletingDoctor}></ShowDoctors>)}
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfrimModal deletingDoctor={deletingDoctor} refetch={refetch} setDeletingDoctor={setDeletingDoctor}></DeleteConfrimModal>}
        </div>
    );
};

export default ManageDoctors;