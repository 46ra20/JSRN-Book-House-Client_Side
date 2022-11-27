import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuBar from '../../Sheared/MenuBar/MenuBar';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../../../UserContext/UserContext';

const Dashboard = () => {

    const { user, userData } = useContext(ContextProvider)
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col container mx-3">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-base-200">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 bg-base-200 text-base-content">
                        {
                            user?.uid && <li><Link to={'/dashboard/my-order'}>My Orders</Link></li>
                        }
                        {
                            userData[0]?.role === 'Selling' && <>
                                <li><Link to={'/dashboard/add-a-product'}>Add A product</Link></li>
                                <li><Link to={'/dashboard/my-product'}>My Products</Link></li>
                            </>
                        }
                        {
                            userData[0]?.role === 'admin' && <>
                                <li><Link to={'/dashboard/all-sellers'}>All Sellers</Link></li>
                                <li><Link to={'/dashboard/all-buyers'}>All Buyers</Link></li>
                                <li><Link to={''}>Reported Item</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;