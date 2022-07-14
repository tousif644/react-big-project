import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ users, refetch }) => {
    const { _id, patientEmail, role } = users;

    // fucntion for making admin
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${patientEmail}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an Error")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success("Successfully made an Admin");
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{_id}</th>
            <td>{patientEmail}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-accent text-white btn-xs">Make Admin</button>}
            </td>
            <td><button class="btn btn-secondary btn-xs text-white">Remove User</button>
            </td>
        </tr>

    );
};

export default UserRow;