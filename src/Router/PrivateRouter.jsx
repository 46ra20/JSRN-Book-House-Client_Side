import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextProvider } from '../UserContext/UserContext';

const PrivateRouter = ({children}) => {
    const {user} = useContext(ContextProvider)
    const location = useLocation();
    if(user?.uid){
        return children;
    }
    return <Navigate to={'/login'} state= {{from: location}} replace={true}></Navigate>
};

export default PrivateRouter;