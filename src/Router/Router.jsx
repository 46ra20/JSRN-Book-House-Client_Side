import React from 'react';
import {createBrowserRouter} from 'react-router-dom'
import AddProduct from '../Pages/Seller/AddProduct/AddProduct';
import Home from '../Pages/Home/Home/Home';
import MainLayOut from '../Pages/LayOut/MainLayOut/MainLayOut';
import AllProduct from '../Pages/Seller/AllProduct/AllProduct';
import Login from '../Pages/UserLogForm/Login';
import Registration from '../Pages/UserLogForm/Registration';
import SellersPrivateRouter from './SellersPrivateRouter';
import AdminRouter from './AdminRouter';
import AllBuyers from '../Pages/Admin/AllBuyers/AllBuyers';
import AllSellers from '../Pages/Admin/AllSellers/AllSellers';
import LoadDataByCategory from '../Pages/LoadDataByCategory/LoadDataByCategory/LoadDataByCategory';
import PrivateRouter from './PrivateRouter';
import MyOrders from '../Pages/Buyer/MyOrders/MyOrders';

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
            //load product by category
            {
                path:'/category/:categoryName',
                loader: async({params}) => fetch(`http://localhost:5000/get-product/${params.categoryName}`),
                element:<PrivateRouter><LoadDataByCategory></LoadDataByCategory></PrivateRouter>
            },

            //user log from
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },

            //Customer order
            {
                path:'/my-order',
                element:<PrivateRouter><MyOrders></MyOrders></PrivateRouter>
            },

            //sellers routers
            {
                path:"/add-a-product",
                element:<PrivateRouter><SellersPrivateRouter><AddProduct></AddProduct></SellersPrivateRouter></PrivateRouter>
            },
            {
                path:"/my-product",
                element:<PrivateRouter><SellersPrivateRouter><AllProduct></AllProduct></SellersPrivateRouter></PrivateRouter>
            },

            //admin routers
            {
                path:"/all-buyers",
                element:<PrivateRouter><AdminRouter><AllBuyers></AllBuyers></AdminRouter></PrivateRouter>
            },
            {
                path:"/all-sellers",
                element:<PrivateRouter><AdminRouter><AllSellers></AllSellers></AdminRouter></PrivateRouter>
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