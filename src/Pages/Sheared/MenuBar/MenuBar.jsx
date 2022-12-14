import React, { Fragment } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../../../UserContext/UserContext'

const MenuBar = () => {
    const { user, logOut } = useContext(ContextProvider)
    console.log(user);

    //sing out 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('userRole')
            })
            .catch(err => console.log(err))
    }

    //menu bar container from here
    const menu = <Fragment>
        <li className='w-24'><Link to="/home">Home</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <li><Link onClick={handleLogOut}>Log Out</Link></li>
                </>
                :
                <li><Link to={'/login'}>Log In</Link></li>
        }
    </Fragment>
    return (
        <div className='bg-primary shadow-lg'>
            <div className="container navbar mx-auto justify-between text-white font-semibold">
                <div className="navbar-start w-full">

                    <div className='flex md:hidden items-center'>
                        <label htmlFor="dashboardDrawer" className="drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <Link to={'/home'} className='btn btn-ghost'>
                        <div>
                            <p className='text-xl space-x-3'>JSRN</p>
                            <p className='text-sm'>Book House</p>
                        </div>
                    </Link>

                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-700 rounded-box right-0">
                            {
                                menu
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">

                    <ul className="menu menu-horizontal p-0">
                        {
                            menu
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default MenuBar;