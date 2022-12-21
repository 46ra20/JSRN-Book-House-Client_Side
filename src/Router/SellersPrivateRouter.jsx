import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextProvider } from '../UserContext/UserContext';

const SellersPrivateRouter = ({children}) => {
    const {user} = useContext(ContextProvider)
    const userRole = localStorage.getItem('userRole')
    const location = useLocation()
    

    if(user && userRole === "Selling"){
        return children;
    }
    return <Navigate to={'/login'} state= {{from: location}} replace={true}></Navigate>;
};

export default SellersPrivateRouter;