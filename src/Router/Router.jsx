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
import PrivateRouter from './PrivateRouter';
import MyOrders from '../Pages/Buyer/MyOrders/MyOrders';
import Dashboard from '../Pages/LayOut/Dashboard/Dashboard';
import Blogs from '../Pages/Blogs/Blogs';
import ReportedItems from '../Pages/Admin/ReportedItems/ReportedItems';
import LoadDataByCategory from '../Pages/LoadDataByCategory/LoadDataByCategory/LoadDataByCategory/LoadDataByCategory';
import ErrorPage from '../Pages/Sheared/ErrorPage/ErrorPage';
// export router 
export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
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
                path:'/blog',
                element:<Blogs></Blogs>
            },
            //load product by category
            {
                path:'/category/:categoryName',
                loader: async({params}) => fetch(` https://b612-used-products-resale-server-side-46ra20-main-46ra20.vercel.app/get-product/${params.categoryName}`),
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
        ]
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        // errorElement:<ErrorPage></ErrorPage>,
        children:[
            //Customer order
            {
                path:'/dashboard',
                element:<PrivateRouter><MyOrders></MyOrders></PrivateRouter>
            },
            {
                path:'/dashboard/my-order',
                element:<PrivateRouter><MyOrders></MyOrders></PrivateRouter>
            },
             //sellers routers
             {
                path:"/dashboard/add-a-product",
                element:<SellersPrivateRouter><AddProduct></AddProduct></SellersPrivateRouter>
            },
            {
                path:"/dashboard/my-product",
                element:<SellersPrivateRouter><AllProduct></AllProduct></SellersPrivateRouter>
            },

            //admin routers
            {
                path:"/dashboard/all-buyers",
                element:<AdminRouter><AllBuyers></AllBuyers></AdminRouter>
            },
            {
                path:"/dashboard/all-sellers",
                element:<AdminRouter><AllSellers></AllSellers></AdminRouter>
            },
            {
                path:"/dashboard/reported-items",
                element:<AdminRouter><ReportedItems></ReportedItems></AdminRouter>
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