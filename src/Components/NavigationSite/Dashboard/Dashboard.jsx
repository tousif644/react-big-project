import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Main/Hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-3xl text-secondary text-center my-4 mb-2'>Welcome to your  Dashboard</h1>
                    <Outlet />
                </div>
                <div class="drawer-side">

                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Appointment</Link></li>
                        <li><Link to="/dashboard/review">Review</Link></li>
                        {admin && <>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/addDoctor">Add Doctor</Link></li>
                            <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>

                        </>}
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;