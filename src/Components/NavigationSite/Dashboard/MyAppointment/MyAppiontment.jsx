import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../../../../firebase.init';

const MyAppiontment = () => {
    const [appiontments, setAppointments] = useState([[]]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    console.log(appiontments);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status == 401 || res.status == 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate("/")
                    }
                    return res.json()
                })
                .then(data => { setAppointments(data) });
        }
    }, [user])
    console.log();
    return (
        <div>

            <div className='my-4 p-4'>
                <div class="overflow-x-auto">
                    <table class="table  w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Treatment name</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appiontments.map((a, index) =>
                                    <tr key={a._id}>
                                        <th>{index + 1}</th>
                                        <td>{a.patientName}</td>
                                        <td>{a.date}</td>
                                        <td>{a.slot}</td>
                                        <td>{a.treatmentName}</td>
                                        <td>
                                            {(a.price && !a.paid) && <Link to={`payment/${a._id}`} ><button className='btn btn-xs btn-success text-white'>Pay</button></Link>}

                                            {(a.price && !a.paid) && <span className='text-success font-bold mx-2'>Paied</span>}
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppiontment;