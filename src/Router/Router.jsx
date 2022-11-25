import React from 'react';
import {createBrowserRouter} from 'react-router-dom'
import AddProduct from '../Pages/Seller/AddProduct/AddProduct';
import Home from '../Pages/Home/Home/Home';
import MainLayOut from '../Pages/LayOut/MainLayOut/MainLayOut';
import AllProduct from '../Pages/Seller/AllProduct/AllProduct';
import Login from '../Pages/UserLogForm/Login';
import Registration from '../Pages/UserLogForm/Registration';
import SellersPrivateRouter from './SellersPrivateRouter';

// export router 
export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/add-a-product",
                element:<SellersPrivateRouter><AddProduct></AddProduct></SellersPrivateRouter>
            },
            {
                path:"/my-product",
                element:<SellersPrivateRouter><AllProduct></AllProduct></SellersPrivateRouter>
            }
        ]
    }
])

const Router = () => {
    return (
        <div>
            
        </div>
    );
};

export default Router;