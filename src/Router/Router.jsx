import React from 'react';
import {createBrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home/Home/Home';
import MainLayOut from '../Pages/LayOut/MainLayOut/MainLayOut';
import Login from '../Pages/UserLogForm/Login';
import Registration from '../Pages/UserLogForm/Registration';

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