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
                path:'/home/category/:categoryName',
                loader: async({params}) => fetch(`http://localhost:5000/get-product/${params.categoryName}`),
                element:<LoadDataByCategory></LoadDataByCategory>
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

            //sellers routers
            {
                path:"/add-a-product",
                element:<SellersPrivateRouter><AddProduct></AddProduct></SellersPrivateRouter>
            },
            {
                path:"/my-product",
                element:<SellersPrivateRouter><AllProduct></AllProduct></SellersPrivateRouter>
            },

            //admin routers
            {
                path:"/all-buyers",
                element:<AdminRouter><AllBuyers></AllBuyers></AdminRouter>
            },
            {
                path:"/all-sellers",
                element:<AdminRouter><AllSellers></AllSellers></AdminRouter>
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