
import {  NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const DashboardLayout = () => {
    return (
        <div className='container mx-auto my-10 flex justify-between'>
            <div className="w-[20%] bg-red-200 p-5">
                <nav>
                    <ul>
                        <li><NavLink to='/dashboard/dashboard'>Dashboard</NavLink></li>
                        <li><NavLink to='/dashboard/profile'>Profile</NavLink></li>
                        <li><NavLink to='/dashboard/editprofile'>Edit Profile</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className='w-[70%]'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;