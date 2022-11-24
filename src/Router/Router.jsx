import React from 'react';
import {createBrowserRouter} from 'react-router-dom'
import MainLayOut from '../Pages/LayOut/MainLayOut/MainLayOut';
import Login from '../Pages/UserLogForm/Login';
import Registration from '../Pages/UserLogForm/Registration';

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
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