import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { ContextProvider } from '../UserContext/UserContext';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(ContextProvider)
    const location = useLocation();

    //call loading page
    if(loading){
        return <Loading></Loading>
    }
    if(user?.uid){
        return children;
    }
    return <Navigate to={'/login'} state= {{from: location}} replace={true}></Navigate>
};

export default PrivateRouter;